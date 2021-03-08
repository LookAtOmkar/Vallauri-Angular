import { Injectable } from '@angular/core';
import { IngredientModel } from '../models/ingredient.model';
import { DataStorageService } from '../shared/data-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredients: IngredientModel[] = [];
  constructor(private dataStorageService:DataStorageService) { }


  getIngredients(){
    let observable = this.dataStorageService.sendGetRequest('/shopping-list');
    observable.subscribe(
        (data: any[]) => {
          console.log(data);
          this.ingredients = data;
        },
        (error: any) => {
          console.log(error);
        }
     )
  } 

  
  addIngredient(ingredient:IngredientModel){
    let trovato=false;
    for (let item of this.ingredients) {
      if (item["name"] == ingredient["name"]) {
        trovato=true;
        item["amount"] += ingredient["amount"];
        break;
      }
    }
    if(!trovato)
      this.ingredients.push(ingredient);

  }


  addIngredients(ingredients:IngredientModel[]){
    //SPREAD OPERATOR (...) --> applicato a un vettore restituisce la singole voci che compongono il vettore
    //this.ingredients.push(...ingredients);
    

    for (let item of ingredients) {
      this.addIngredient(item);  
    }
  }
}
