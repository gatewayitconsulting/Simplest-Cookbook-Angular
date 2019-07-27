import { Recipe } from '../../services/recipe/recipe';

export const RECIPES: Recipe[] = [
  {
    id: 1,
    name: 'Toddy Cold Brew',
    image: '../../../assets/images/toddy.jpg',
    totalTimeMinutes: 120
  },
  {
    id: 2,
    name: 'Quick Steel Cut Oatmeal',
    image: '../../../assets/images/oatmeal.jpg',
    totalTimeMinutes: 15
  },
  {
    id: 3,
    name: 'Baked Salmon',
    image: '../../../assets/images/salmon.jpg',
    totalTimeMinutes: 30
  },
  {
    id: 4,
    name: 'Acai Bowl',
    image: '../../../assets/images/acai.jpg',
    totalTimeMinutes: 30
  },
  {
    id: 5,
    name: 'V60 Pour Over Coffee',
    image: '../../../assets/images/pour-over.jpg',
    totalTimeMinutes: 15
  }
];
