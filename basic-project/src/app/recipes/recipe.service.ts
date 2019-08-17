import { Recipe } from './recipe.module';

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('Test Recipe', 'This is a simply test', 'https://www.wellplated.com/wp-content/uploads/2017/12/Hoppin-John-recipe-600x629.jpg'),
        new Recipe('Test Recipe', 'This is a simply test', 'https://www.wellplated.com/wp-content/uploads/2017/12/Hoppin-John-recipe-600x629.jpg'),
        new Recipe('Test Recipe', 'This is a simply test', 'https://www.wellplated.com/wp-content/uploads/2017/12/Hoppin-John-recipe-600x629.jpg')
      ];

      getRecipes(){
          return this.recipes.slice();
      }
}