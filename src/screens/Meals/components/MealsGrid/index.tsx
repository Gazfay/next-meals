import { FC } from 'react';
import { MealsGridItem, MealsGridItemProps } from './components';
import classes from './mealsGrid.module.css';

interface MealsGridProps {
  meals: MealsGridItemProps[];
}

export const MealsGrid: FC<MealsGridProps> = ({ meals }) => {
  return (
    <ul className={classes.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealsGridItem {...meal} />
        </li>
      ))}
    </ul>
  );
};
