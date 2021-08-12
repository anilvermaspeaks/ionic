import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Recipe 1',
      imageUrl:
        'https://avatars.githubusercontent.com/u/45934268?s=400&u=7fdf6632f7b8f731e0f6b9014ca485a36130f156&v=4',
      ingredients: ['fries', 'salad'],
    },
    {
      id: 'r2',
      title: 'Recipe 2',
      imageUrl:
        'https://avatars.githubusercontent.com/u/45934268?s=400&u=7fdf6632f7b8f731e0f6b9014ca485a36130f156&v=4',
      ingredients: ['fries 1', 'salad 2'],
    },
  ];

  constructor() {}

  public getAllRecipes() {
    return [...this.recipes];
  }

  public getRecipe(recipeId: string) {
    return [...this.recipes].find((recipe) => recipe.id === recipeId);
  }

  public deleteRecipeById(recipeId: string) {
    this.recipes = this.recipes.filter((recipe) => recipe.id !== recipeId);
  }
}
