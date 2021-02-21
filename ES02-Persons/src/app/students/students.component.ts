import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent{
  students: string[]= []; //vettore vuoto 
  constructor() {


  }
  
  OnCreateStudent(){
    this.students.push("");
  }

  random(a, b){
    return (Math.floor((b-a+1)*Math.random())+a);
  } 
}
