import { Injectable, OnInit } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { RecipeModel } from '../models/recipe.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { IngredientModel } from '../models/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService implements OnInit {
  recipes: RecipeModel[];
  selectedRecipe: RecipeModel;
  
  constructor(private dataStorageService:  DataStorageService,
              private shoppingListService:ShoppingListService) { 
    this.getRecipes();
    
  }


  ngOnInit(): void{}

  addIngredientsToShoppingList(ingredients: IngredientModel[]){
    this.shoppingListService.addIngredients(ingredients);
  }


  getRecipes(){  
    /*subscibe() si aspetta come paametro due funzioni, una di ok, e una di errore
    Alla funzione di ok viene iniettato il parametro data ricevuto d server, mentre alla funzione di errore
    viene iniettato l'oggetto error*/

    
    /****************************       1^ SOLUZIONE ANGULAR MEDIANTE OBSERVABLE        ************************/
    let observable = this.dataStorageService.sendGetRequest('/recipes');
    observable.subscribe(
       (data: any[]) => {
         console.log(data);
         this.recipes = data;
         this.selectedRecipe = this.recipes[0];
       },
       (error: any) => {
         console.log(error);
       }
     )
    /***********************************************/



    /************************************     2^ SOLUZIONE PROMISE    ********************************/
    // let promise = observable.toPromise();
    // promise.then((data:any) =>{
    //   console.log(data);
    //   this.recipes = data;
    //   this.selectedRecipe = this.recipes[0];
    // })
    // promise.catch(error  => console.log(error));

    /****************************************************************************************************** */




    /****************FATTA COSI' NON FUNZIONA PERCHE' IL THIS RAPPRESENTA IL PROMISE************************/
    // promise.then(function(data:any){
    //   console.log(data);
    //   this.recipes = data;
    //   this.selectedRecipe = this.recipes[0];
    // });
    // promise.catch(function(error:any){
    //   console.log(error);
    // })
    /*********************************************************************************************************/



    
  }
}
