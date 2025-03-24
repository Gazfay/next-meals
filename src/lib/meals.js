import fs from 'fs';
import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';

import { S3 } from '@aws-sdk/client-s3';

export const s3 = new S3({
  region: process.env.AWS_S3_REGION,
});

export const db = sql(process.env.DB_FILE);

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return db.prepare('SELECT * FROM meals').all();
}

export function getMeal(id) {
  return db.prepare('SELECT * FROM meals WHERE slug = ?').get(id);
}

export async function createMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split('.').pop();
  const fileName = `${meal.slug}.${extension}`;

  const bufferImage = await meal.image.arrayBuffer();

  try {
    const result = await s3.putObject({
      Bucket: 'next-level-food-next-js',
      Key: fileName,
      Body: Buffer.from(bufferImage),
      ContentType: meal.image.type,
    });
    console.log(result, 'Result');
  } catch (error) {
    console.error(error);
  }

  meal.image = fileName;

  console.log(meal, 'Meal');

  await db
    .prepare(
      'INSERT INTO meals (title, slug, creator, creator_email, summary, instructions, image) VALUES (@title, @slug, @creator, @creator_email, @summary, @instructions, @image)',
    )
    .run(meal);
}
