import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { UserModel } from '../models/user.model';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-dettagli',
  templateUrl: './dettagli.component.html',
  styleUrls: ['./dettagli.component.css']
})
export class DettagliComponent implements OnInit {
  userDetails:UserModel;

  constructor(public dataStorageService: DataStorageService,private activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
    let idUser = parseInt(this.activateRoute.snapshot.paramMap.get("id"));
    this.dataStorageService.sendGetRequest("/usersDetails/"+idUser).subscribe(
      (data:any)=>{
        console.log(data);
        this.userDetails=data;
      },
      (error:any) =>{
        console.log(error);
      }
    );
  }

}
