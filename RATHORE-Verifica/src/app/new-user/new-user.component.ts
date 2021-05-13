import { Component, OnInit } from '@angular/core';
import { UserModel } from '../models/user.model';
import { DataStorageService } from '../shared/data-storage.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  Title:string;
  First:string;
  Last:string;
  Cell:string;
  phone:string;
  Age:string;
  imgPath:string;
  isEmpty:boolean=false;
  Gender:string;
  Name:any={};
  nat:string;
  Dob:any={};
  constructor(public userService:UsersService) { }

  ngOnInit(): void {
  }

  onInputChanged(){
    if((this.Title=="")||(this.First=="")||(this.Last=="")||(this.Cell=="")||(this.phone=="")||(this.Age=="")||(this.imgPath=="")||(this.nat==""))
    {
      this.isEmpty=true;
    }
    else
    {
      this.isEmpty=false;
    }
    if(this.Gender=="male"|| this.Gender=="female")
    {
      this.isEmpty=false;
    }
    else
    {
      this.isEmpty=true;
    }
  }

  AddUser(){
    this.Name={
      "Title":this.Title,
      "First":this.First,
      "Last":this.Last
    }
    this.Dob={
      "Age":this.Age
    }
    
    let user =  new UserModel(this.Name,this.Gender,this.imgPath,this.nat,this.phone,this.phone,this.Dob);
    this.userService.AddUser(user);
  }
}
