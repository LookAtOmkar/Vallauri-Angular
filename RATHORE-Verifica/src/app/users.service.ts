import { Injectable } from '@angular/core';
import { UserModel } from './models/user.model';
import { DataStorageService } from './shared/data-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users:UserModel[]=[];
  constructor(private dataStorageService: DataStorageService) { }


  AddUser(user:UserModel){
    this.users.push(user);
    this.PostUser(user);
  }

  PostUser(user:UserModel){
    this.dataStorageService.sendPostRequest('/usersDetails', user)
    .subscribe(
      (data: any[]) => {
        console.log(data);
        alert("UTENTE INSERITO CORRETTAMENTE")
      },
      (error: any) => {
        console.log(error);
      }
    )
  }

}
