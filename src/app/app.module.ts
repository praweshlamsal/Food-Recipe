import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { RecipeComponent } from './recipe/recipe.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingDetailComponent } from './shopping-list/shopping-detail/shopping-detail.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { basicHighlightDirective } from './basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './basic-highlight/better-highlight.directive';
import { RecipeServiceService } from './recipe/recipe-service.service';
import { FoodService } from './food.service';
import { NewRecipeComponent } from './recipe/new-recipe/new-recipe.component';
import { AngularFileUploaderModule } from 'angular-file-uploader';

@NgModule({
  declarations: [
    AppComponent,
    RecipeComponent,
    ShoppingListComponent,
    ShoppingDetailComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    HeaderComponent,
    basicHighlightDirective,
    BetterHighlightDirective, 
    NewRecipeComponent,
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFileUploaderModule,
  ],
  providers: [RecipeServiceService,FoodService],
  bootstrap: [AppComponent]
})
export class AppModule { }
