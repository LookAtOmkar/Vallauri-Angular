import { Component, OnInit } from '@angular/core';
import { IngredientModel } from '../models/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  constructor(public shoppingListService:ShoppingListService) { }

  onIngredientAdded(ingredient: IngredientModel) {
    this.shoppingListService.addIngredient(ingredient);
  }

  ngOnInit(): void {
  }

}
