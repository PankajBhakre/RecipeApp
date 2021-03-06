import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
 @Output() recipeWasSelected= new EventEmitter<Recipe>();
 recipes: Recipe[]= [
   new Recipe("Chicken Grill","Grilled with butter","")
 ]
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
this.recipeWasSelected.emit(recipe);
  }

}
