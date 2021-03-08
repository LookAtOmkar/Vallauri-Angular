import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RecipeModel } from 'src/app/models/recipe.model';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { PromiseType } from 'protractor/built/plugins';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { error } from '@angular/compiler/src/util';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  //recipes: RecipeModel[];
  //selectedRecipe: RecipeModel;

  //I servizi si possono usare sia nell'evento ngOnInit() che nel costruttore
  
  constructor(public recipeService: RecipeService) { }
  ngOnInit(): void {
    this.recipeService.getRecipes();
  }
}
