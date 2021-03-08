import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RecipeModel } from 'src/app/models/recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: RecipeModel;
  constructor(public recipeService: RecipeService) { }
  
  onSelected() { 
    this.recipeService.selectedRecipe = this.recipe;
  }

  ngOnInit(): void {
  }

}
