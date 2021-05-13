import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { UserModel } from '../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-elenco',
  templateUrl: './elenco.component.html',
  styleUrls: ['./elenco.component.css']
})
export class ElencoComponent implements OnInit {
  usersList:UserModel[]=[];

  constructor(public dataStorageService:DataStorageService, public router:Router) { }

  ngOnInit(): void {
    this.dataStorageService.sendGetRequest("/usersList").subscribe(
      (data:any)=>{
        console.log(data);
        this.usersList=data;
      },
      (error:any) =>{
        console.log(error);
      }
    );
  }

  GetDetails(id:any){
    this.router.navigate(['/dettagli',id]);
  }

  AddUser(){
    this.router.navigate(['/newuser']);
  }

}
