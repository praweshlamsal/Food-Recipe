import { Component, OnInit } from '@angular/core';
import { Recipe } from '/recipe.module';
@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  public message:Recipe;
  constructor() { }

  ngOnInit() {
  }

  reciveMessage($event)
  {
  this.message= $event;
  }
}
