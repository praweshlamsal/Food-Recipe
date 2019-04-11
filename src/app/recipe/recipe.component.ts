import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  public message:string;
  constructor() { }

  ngOnInit() {
  }

  reciveMessage($event)
  {
  this.message= $event;
  }
}
