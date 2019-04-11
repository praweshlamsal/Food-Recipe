import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.module';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
   public greeting: string = "";
   @Output() public childevent = new EventEmitter();
   recipes : Recipe[] = [
    new Recipe(1,'Dal-curry','The dal curry is the indian dish with the dal and curry','https://i1.wp.com/mypullzone-9vexd6dl53at.netdna-ssl.com/wp-content/uploads/2018/02/Dal-Fry-Recipe-Step-By-Step-Instructions.jpg?resize=750%2C775&ssl=1'),
    new Recipe(2,'Idli','The Idli is the indian dish with the rice grains', 'https://www.indianhealthyrecipes.com/wp-content/uploads/2013/01/soft-idli-recipe-with-idli-rava.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }
  onclick(recipe:Recipe)
  {
    this.childevent.emit(recipe);
  }

}
