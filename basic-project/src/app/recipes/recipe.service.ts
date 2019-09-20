import { Recipe } from './recipe.module';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.module';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Test Recipe', 
            'This is a simply test', 
            'https://www.wellplated.com/wp-content/uploads/2017/12/Hoppin-John-recipe-600x629.jpg', 
            [
                new Ingredient('Meat',1),
                new Ingredient('french fries', 20)
            ]),
        new Recipe(
            'Test Recipe 2', 
            'This is a simply test 2', 
            'https://www.wellplated.com/wp-content/uploads/2017/12/Hoppin-John-recipe-600x629.jpg', 
            [
                new Ingredient('Meat',1),
                new Ingredient('french fries', 20)
            ]),        
        new Recipe(
            'Test Recipe 3', 
            'This is a simply test 3', 
            'https://www.wellplated.com/wp-content/uploads/2017/12/Hoppin-John-recipe-600x629.jpg', 
            [
                new Ingredient('Meat',1),
                new Ingredient('french fries', 20)
            ])
      ];

      constructor(private shoppingListService: ShoppingListService){}

      getRecipe(id: number){
        return this.recipes[id];
      }

      getRecipes(){
          return this.recipes.slice();
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
      }
}