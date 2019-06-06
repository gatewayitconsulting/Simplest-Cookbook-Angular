import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Recipe } from './Recipe';
import { RECIPES } from './mock-recipes';
// import { MessageService } from '../message.service';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {

  // constructor(private messageService: MessageService) { }

  getRecipes(): Observable<Recipe[]> {
    // TODO: send the message _after_ fetching the recipes
    // this.messageService.add('RecipesService: fetched recipes');
    return of(RECIPES);
  }

  getHero(id: number | string) {
    return this.getRecipes().pipe(
      // (+) before `id` turns the string into a number
      map((recipes: Recipe[]) => recipes.find(recipe => recipe.id === +id))
    );
  }
}
