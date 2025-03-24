'use server';

import { redirect } from 'next/navigation';
import { createMeal } from './meals';
import { revalidatePath } from 'next/cache';

const isInvalidText = (text) => !text || text.trim() === '';

export const shareMeal = async (_, formData) => {
  const meal = {
    creator: formData.get('name'),
    creator_email: formData.get('email'),
    title: formData.get('title'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    image: formData.get('image'),
  };

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes('@') ||
    !meal.image ||
    meal.image.size === 0
  ) {
    return {
      message: 'Invalid meal data',
    };
  }

  await createMeal(meal);
  revalidatePath('/meals');
  redirect('/meals');
};
