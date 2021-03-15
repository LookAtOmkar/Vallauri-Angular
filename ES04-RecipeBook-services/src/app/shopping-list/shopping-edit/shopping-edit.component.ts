import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IngredientModel } from 'src/app/models/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  ingredientName: string;
  ingredientAmount: number;
  isAddEmpty: boolean = true;

  @Output() ingredientAdded = new EventEmitter<IngredientModel>();

  constructor(public shoppingListService:ShoppingListService) { }

  addIngredient() {
    console.log(this.ingredientName + "-" + this.ingredientAmount);
    const newIngredient:IngredientModel =new IngredientModel(this.ingredientName, this.ingredientAmount);
    //this.ingredientAdded.emit(newIngredient);
    this.shoppingListService.addIngredient(newIngredient);
  }

  onInputChanged() {
    if ((this.ingredientName != "") && (this.ingredientAmount > 0)) {
      this.isAddEmpty = false;
    }
    else {
      this.isAddEmpty = true;
    }
  }

  clearInputs(){
    this.ingredientName = "";
    this.ingredientAmount = 0;
    this.isAddEmpty=true;
  }

  ngOnInit(): void {
  }

}
