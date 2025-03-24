'use client';

export default function ErrorMeals({ error }: { error: Error }) {
  console.log(error, 'Error');

  return (
    <main className='error'>
      <h1>An error occured!</h1>
      <p>Faild to fetch meals data. Please try again later.</p>
    </main>
  );
}
