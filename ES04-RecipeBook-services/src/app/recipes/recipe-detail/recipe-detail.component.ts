import { Component, Input, OnInit } from '@angular/core';
import { RecipeModel } from 'src/app/models/recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  constructor(public recipeService:RecipeService) { }

  ngOnInit(): void {
  }




  onAddToShoppingList(){
    this.recipeService.addIngredientsToShoppingList(this.recipeService.selectedRecipe.ingredients);
  }

}
