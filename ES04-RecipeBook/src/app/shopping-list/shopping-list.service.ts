import { Injectable } from '@angular/core';
import { IngredientModel } from '../Models/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredients: IngredientModel[]=[];
  constructor(private DataStorageService: DataStorageService) { }

  getIngredients() {
    this.dataStorageService.sendGetRequest('shopping-list').subscribe(
      (data: IngredientModel[]) => {
        console.log(data);
        this.ingredients = data;
      },
      (error: any) => {
        console.log(error);
      }
    )
  }


  addIngredient(ingredient: IngredientModel) {
    // aggiungere il controllo per verificare se l’ingrediente è già presente
    this.ingredients.push(ingredient);
 }
    
  addIngredients(ingredients: IngredientModel[]) {
    // lo spread operator consente di suddividere un vettore nelle sue varie parti
    this.ingredients.push(...ingredients);
  }

}
