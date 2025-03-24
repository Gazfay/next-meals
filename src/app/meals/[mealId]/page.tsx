import { getMeal } from '@/lib/meals';
import { Meal, MealDetails } from '@/screens';
import { PageProps } from '@/types';
import { notFound } from 'next/navigation';

export function generateMetadata({ params }: { params: { mealId: string } }) {
  const meal = getMeal(params.mealId) as Meal;

  if (!meal) {
    notFound();
  }

  return {
    title: meal.title,
    description: meal.summary,
  };
}

export default function MealPage({ params }: PageProps<{ mealId: string }>) {
  return <MealDetails mealId={params.mealId} />;
}
