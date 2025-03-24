import Image from 'next/image';
import classes from './mealDetails.module.css';
import { getMeal } from '@/lib/meals';
import { FC } from 'react';
import { notFound } from 'next/navigation';

export interface Meal {
  id: number;
  slug: string;
  title: string;
  image: string;
  summary: string;
  instructions: string;
  creator: string;
  creator_email: string;
}

interface MealDetailsProps {
  mealId: string;
}

export const MealDetails: FC<MealDetailsProps> = ({ mealId }) => {
  const meal = getMeal(mealId) as Meal;

  if (!meal) {
    notFound();
  }

  const instructions = meal.instructions.replace(/\n/g, '<br />');

  const imageSrc = `${process.env.AWS_IMAGES_BUCKET}/${meal.image}`;

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={imageSrc} alt='meal-image' fill />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p className={classes.instructions} dangerouslySetInnerHTML={{ __html: instructions }}></p>
      </main>
    </>
  );
};
