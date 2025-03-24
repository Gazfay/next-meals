import Link from 'next/link';
import Image from 'next/image';

import classes from './mealsGridItem.module.css';
import { FC } from 'react';

export interface MealsGridItemProps {
  id: string;
  title: string;
  slug: string;
  image: string;
  summary: string;
  creator: string;
}

export const MealsGridItem: FC<MealsGridItemProps> = ({ title, slug, image, summary, creator }) => {
  const imageSrc = `${process.env.AWS_IMAGES_BUCKET}/${image}`;

  return (
    <article className={classes.meal}>
      <header>
        <div className={classes.image}>
          <Image src={imageSrc} alt={title} fill />
        </div>
        <div className={classes.headerText}>
          <h2>{title}</h2>
          <p>by {creator}</p>
        </div>
      </header>
      <div className={classes.content}>
        <p className={classes.summary}>{summary}</p>
        <div className={classes.actions}>
          <Link href={`/meals/${slug}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
};
