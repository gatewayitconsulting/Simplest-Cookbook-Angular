import { Recipe } from '../../services/recipe/recipe';

export const RECIPES: Recipe[] = [
  {
    id: 1,
    name: 'Toddy Cold Brew',
    image: '../../../assets/img/toddy.jpg',
    imageDescription: 'Finished Toddy Cold Brew',
    totalTime: 720,
    description: 'Make delicious iced coffee that will last a week in the fridge.',
    flavorProfile: 'Milk Chocolate & Berries',
    category: 'Coffee',
    // tslint:disable-next-line: max-line-length
    ingredients: [{name: 'Water', image: ''}, {name: 'Coffee', image: ''}],
    // tslint:disable-next-line: max-line-length
    tools: [{name: 'Toddy Cold Brewer', image: ''}, {name: 'Toddy Cold Brew Filter', image: ''}, {name: 'Toddy Cold Brew Cork', image: ''}, {name: 'Measuring Cup', image: ''}, {name: 'Measuring Spoon', image: ''}],
    // tslint:disable-next-line: max-line-length
    steps: [{description: 'Steps coming soon!', image: '../../../assets/img/toddy.jpg'}, {description: 'Steps coming soon!', image: '../../../assets/img/toddy.jpg'}, {description: 'Steps coming soon!', image: '../../../assets/img/toddy.jpg'}, {description: 'Steps coming soon!', image: '../../../assets/img/toddy.jpg'}, {description: 'Steps coming soon!', image: '../../../assets/img/toddy.jpg'}]
  },
  {
    id: 2,
    name: 'Steel Cut Oatmeal',
    image: '../../../assets/img/oatmeal.jpg',
    imageDescription: 'Finished Steel Cut Oats',
    totalTime: 15,
    description: 'Make quick and nutritious steel cut oats with different grains and fruit.',
    flavorProfile: 'Earthy & Fruity',
    category: 'Grains',
    // tslint:disable-next-line: max-line-length
    ingredients: [{name: 'Water', image: ''}, {name: 'Steel Cut Oats', image: ''}, {name: 'Chia Seeds', image: ''}, {name: 'Flax Seeds', image: ''}, {name: 'Sunbutter', image: ''}, {name: 'Honey', image: ''}, {name: 'Mango', image: ''}],
    // tslint:disable-next-line: max-line-length
    tools: [{name: 'Measuring Cup', image: ''}, {name: 'Measuring Spoon', image: ''}, {name: 'Bowl', image: ''}, {name: 'Knife', image: ''}],
    // tslint:disable-next-line: max-line-length
    steps: [{description: 'Steps coming soon!', image: '../../../assets/img/oatmeal.jpg'}, {description: 'Steps coming soon!', image: '../../../assets/img/oatmeal.jpg'}, {description: 'Steps coming soon!', image: '../../../assets/img/oatmeal.jpg'}, {description: 'Steps coming soon!', image: '../../../assets/img/oatmeal.jpg'}, {description: 'Steps coming soon!', image: '../../../assets/img/oatmeal.jpg'}]
  },
  {
    id: 3,
    name: 'Baked Salmon',
    image: '../../../assets/img/salmon.jpg',
    imageDescription: 'Finished Baked Salmon',
    totalTime: 30,
    description: 'Make quick and easy baked salmon that tastes fantastic.',
    flavorProfile: 'Salt & Pepper',
    category: 'Seafood',
    // tslint:disable-next-line: max-line-length
    ingredients: [{name: 'Salmon', image: ''}, {name: 'Salt', image: ''}, {name: 'Pepper', image: ''}, {name: 'Avocado Oil', image: ''}],
    // tslint:disable-next-line: max-line-length
    tools: [{name: 'Baking Tray', image: ''}, {name: 'Oil Brush', image: ''}, {name: 'Spatula', image: ''}, {name: 'Knife', image: ''}],
    // tslint:disable-next-line: max-line-length
    steps: [{description: 'Steps coming soon!', image: '../../../assets/img/salmon.jpg'}, {description: 'Steps coming soon!', image: '../../../assets/img/salmon.jpg'}, {description: 'Steps coming soon!', image: '../../../assets/img/salmon.jpg'}, {description: 'Steps coming soon!', image: '../../../assets/img/salmon.jpg'}, {description: 'Steps coming soon!', image: '../../../assets/img/salmon.jpg'}]
  },
  {
    id: 4,
    name: 'Acai Bowl',
    image: '../../../assets/img/acai.jpg',
    imageDescription: 'Finished Acai Bowl',
    totalTime: 30,
    description: 'Make a super nutritious and tasty acai bowl with different fruits and toppings.',
    flavorProfile: 'Fruity',
    category: 'Superfoods',
    // tslint:disable-next-line: max-line-length
    ingredients: [{name: 'Angular 7', image: ''}, {name: 'JavaScript', image: ''}, {name: 'Bootstrap', image: ''}, {name: 'SASS', image: ''}, {name: 'HTML5', image: ''}],
    // tslint:disable-next-line: max-line-length
    tools: [{name: 'Angular 7', image: ''}, {name: 'JavaScript', image: ''}, {name: 'Bootstrap', image: ''}, {name: 'SASS', image: ''}, {name: 'HTML5', image: ''}],
    // tslint:disable-next-line: max-line-length
    steps: [{description: 'Steps coming soon!', image: '../../../assets/img/acai.jpg'}, {description: 'Steps coming soon!', image: '../../../assets/img/acai.jpg'}, {description: 'Steps coming soon!', image: '../../../assets/img/acai.jpg'}, {description: 'Steps coming soon!', image: '../../../assets/img/acai.jpg'}, {description: 'Steps coming soon!', image: '../../../assets/img/acai.jpg'}]
  },
  {
    id: 5,
    name: 'V60 Pour Over Coffee',
    image: '../../../assets/img/pour-over.jpg',
    imageDescription: 'Finished Coffee Pour Over',
    totalTime: 15,
    // tslint:disable-next-line: max-line-length
    description: 'Take your coffee game to the next level with pour over coffee that goes the extra steps to extract all the flavor coffee can provide.',
    flavorProfile: 'Fruity',
    category: 'Coffee',
    // tslint:disable-next-line: max-line-length
    ingredients: [{name: 'Angular 7', image: ''}, {name: 'JavaScript', image: ''}, {name: 'Bootstrap', image: ''}, {name: 'SASS', image: ''}, {name: 'HTML5', image: ''}],
    // tslint:disable-next-line: max-line-length
    tools: [{name: 'Angular 7', image: ''}, {name: 'JavaScript', image: ''}, {name: 'Bootstrap', image: ''}, {name: 'SASS', image: ''}, {name: 'HTML5', image: ''}],
    // tslint:disable-next-line: max-line-length
    steps: [{description: 'Steps coming soon!', image: '../../../assets/img/pour-over.jpg'}, {description: 'Steps coming soon!', image: '../../../assets/img/pour-over.jpg'}, {description: 'Steps coming soon!', image: '../../../assets/img/pour-over.jpg'}, {description: 'Steps coming soon!', image: '../../../assets/img/pour-over.jpg'}, {description: 'Steps coming soon!', image: '../../../assets/img/pour-over.jpg'}]
  }
];
