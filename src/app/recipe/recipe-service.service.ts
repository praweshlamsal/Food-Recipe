import { Injectable } from '@angular/core';
import { Recipe } from './recipe.module';

@Injectable({
  providedIn: 'root',
})
export class RecipeServiceService {

  constructor() { }
  recipes : Recipe[] = [
    new Recipe(1,'Dal-curry','The dal curry is the indian dish with the dal and curry','https://i1.wp.com/mypullzone-9vexd6dl53at.netdna-ssl.com/wp-content/uploads/2018/02/Dal-Fry-Recipe-Step-By-Step-Instructions.jpg?resize=750%2C775&ssl=1'),
    new Recipe(2,'Idli','The Idli is the indian dish with the rice grains', 'https://www.indianhealthyrecipes.com/wp-content/uploads/2013/01/soft-idli-recipe-with-idli-rava.jpg')
  ];

  addRecipe(id:number,name:string,detail:string,imagePath:string)
  {
    this.recipes.push(new Recipe(id,name,detail,imagePath));
  }

  // updateRecipe(id:number,name:string,detail:string,imagePath:string)
  // {

  // }
}
