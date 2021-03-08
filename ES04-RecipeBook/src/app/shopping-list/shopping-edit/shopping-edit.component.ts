import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { IngredientModel } from 'src/app/Models/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  ingredientName:string='';
  ingredientAmount:number = 0;

  @Output() ingredientAdded = new EventEmitter<IngredientModel>();
  constructor() { }

  addIngredient(){
    const newIngredient: IngredientModel = new IngredientModel(this.ingredientName,this.ingredientAmount);
    this.ingredientAdded.emit(newIngredient);
  }

  ngOnInit(): void {
  }

}
