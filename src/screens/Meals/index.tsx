import Link from 'next/link';
import classes from './meals.module.css';
import { MealsGrid, MealsLoading } from './components';
import { getMeals } from '@/lib/meals';
import { Suspense } from 'react';

const MealsItems = async () => {
  const meals = (await getMeals()) as [];

  return <MealsGrid meals={meals} />;
};

export const Meals = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created <span className={classes.highlight}>by you</span>
        </h1>
        <p>Choose your favorite receipt and cook it yourself.</p>
        <p className={classes.cta}>
          <Link href='/meals/share'>Share Your Favorite Receip</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<MealsLoading />}>
          <MealsItems />
        </Suspense>
      </main>
    </>
  );
};
