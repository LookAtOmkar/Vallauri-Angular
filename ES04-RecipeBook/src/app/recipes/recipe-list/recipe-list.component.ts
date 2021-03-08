import { Component,EventEmitter, OnInit, Output } from '@angular/core';
import { RecipeModel } from 'src/app/Models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  
  recipes:RecipeModel[] =[
    new RecipeModel(
      "Spaghetti alla chitarra",
      "Un particolare tipo di paste che...",
      "https://images.lacucinaitaliana.it/wp-content/uploads/2017/02/Maccheroni-alla-chitarra.jpg"
    ),
    new RecipeModel(
      "Lasagne alla bolognese",
      "Pasta calorica emiliana...",
      "https://www.cucinare.it/uploads/wp-content/uploads/2015/05/pasta_alla_bolognese.webp"
    ),
    new RecipeModel(
      "Gnocchi ai formaggi",
      "Ottimi soprattutto in montagna",
      "https://images.fidhouse.com/fidelitynews/wp-content/uploads/sites/6/2017/05/1495792337_13c855513b63705bb079c377ed01563d4eb12ccc-223759579.jpg?w=580"
    ),
    new RecipeModel(
      "Tiramisù",
      "Con panna e mascarcope",
      "https://blog.giallozafferano.it/acasadimaria/wp-content/uploads/2019/06/tiramisu-sav.png"    )
  ];

  selectedRecipe:RecipeModel;

  @Output() recipeSelectedInList = new EventEmitter<RecipeModel>();
  constructor() {
    this.selectedRecipe = this.recipes[0];
   }

  ngOnInit(): void {
  }


  onRecipeSelected(recipe:RecipeModel){
    this.recipeSelectedInList.emit(recipe); //trasmettiamo la ricetta
  }



}
