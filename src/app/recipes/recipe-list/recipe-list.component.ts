import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Pizza', 'Pizza from Pizza Hut', 'https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/wmghlyfmhaj45fsq1jdc'),
    new Recipe('Burger', 'Burger from MCDonalds', 'https://www.freepnglogos.com/uploads/burger-png/burger-png-png-images-yellow-images-12.png')
  ];
  constructor() { }

  ngOnInit() {
  }
  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
