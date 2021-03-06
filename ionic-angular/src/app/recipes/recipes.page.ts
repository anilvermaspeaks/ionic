import { Component, OnInit } from '@angular/core';

import { RecipesService } from './recipes.service';
import { Recipe } from './recipe.model';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage {
  public recipes: Recipe[] = [];
  constructor(private recipeService: RecipesService) {}

  ionViewDidEnter() {
    this.recipes = this.recipeService.getAllRecipes();
  }
}
