import { Recipe } from '../../services/recipe/recipe';

export const RECIPES: Recipe[] = [
  {
    id: 1,
    name: 'Toddy Cold Brew',
    image: '../../../assets/images/toddy.jpg',
    totalTimeMinutes: 720,
    description: 'Make delicious cold brew that although takes a day to make can make many servings.'
  },
  {
    id: 2,
    name: 'Quick Steel Cut Oatmeal',
    image: '../../../assets/images/oatmeal.jpg',
    totalTimeMinutes: 15,
    description: 'Make delicious cold brew that can serve many.'
  },
  {
    id: 3,
    name: 'Baked Salmon',
    image: '../../../assets/images/salmon.jpg',
    totalTimeMinutes: 30,
    description: 'Make delicious cold brew that can serve many.'
  },
  {
    id: 4,
    name: 'Acai Bowl',
    image: '../../../assets/images/acai.jpg',
    totalTimeMinutes: 30,
    description: 'Make delicious cold brew that can serve many.'
  },
  {
    id: 5,
    name: 'V60 Pour Over Coffee',
    image: '../../../assets/images/pour-over.jpg',
    totalTimeMinutes: 15,
    description: 'Make delicious cold brew that can serve many.'
  }
];
