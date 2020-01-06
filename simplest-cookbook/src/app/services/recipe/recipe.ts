export class Recipe {
    id: number;
    name: string;
    image: string;
    imageDescription: string;
    totalTime: number;
    description: string;
    flavorProfile: string;
    category: string;
    ingredients: Array<{
      name: string;
      image: string;
    }>
    tools: Array<{
      name: string;
      image: string;
    }>
    steps: Array<{
      description: string;
      image: string;
    }>
  }
