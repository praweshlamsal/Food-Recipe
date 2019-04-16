import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeComponent } from './recipe/recipe.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const routes: Routes = [
  { path:'', redirectTo:'/recipe', pathMatch:'full'},
  // { path:'**', redirectTo:'', pathMatch:'full'},
  { path: 'recipe', component: RecipeComponent },
  { path: 'shopping', component: ShoppingListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
