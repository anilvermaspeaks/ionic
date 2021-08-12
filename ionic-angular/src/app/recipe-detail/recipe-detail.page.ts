import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from '../recipes/recipes.service';
import { Recipe } from '../recipes/recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
  public recipe: Recipe;
  constructor(
    private router: Router,
    private activateRoute: ActivatedRoute,
    private recipeService: RecipesService
  ) {}

  ngOnInit() {
    this.activateRoute.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('recipeId')) {
        return;
      } else {
        const recipeId = paramMap.get('recipeId');
        this.recipe = this.recipeService.getRecipe(recipeId);
      }
    });
  }

  public deleteRecipe() {
    this.recipeService.deleteRecipeById(this.recipe.id);
    this.router.navigate(['/recipes']);
  }
}
