import { Component, OnInit} from '@angular/core';
import { Recipe } from '../recipe.module';
import { RecipeServiceService } from '../recipe-service.service';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
   public greeting: string = "";
  //  @Output() public childevent = new EventEmitter();
   recipes:Recipe[] = [];
  constructor(private recipeservice:RecipeServiceService) { }

  ngOnInit() {
    this.recipes = this.recipeservice.recipes;
  }


}
