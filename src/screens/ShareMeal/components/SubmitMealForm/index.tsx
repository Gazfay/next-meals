'use client';

import { FC } from 'react';
import { useFormStatus } from 'react-dom';

export const SubmitMealForm: FC = () => {
  const { pending } = useFormStatus();

  return (
    <button type='submit' disabled={pending}>
      {pending ? 'Submitting...' : 'Share Meal'}
    </button>
  );
};
