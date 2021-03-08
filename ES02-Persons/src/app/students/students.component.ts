import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent{
  students: string[]= []; //vettore vuoto 
  studentName:string = "";
  isCreated:boolean = false;
  constructor() {


  }
  
  OnCreateStudent(){
    this.students.push("");
  }

  onTextChanged(){
    this.isCreated = true;
  }

  random(a, b){
    return (Math.floor((b-a+1)*Math.random())+a);
  } 
}
