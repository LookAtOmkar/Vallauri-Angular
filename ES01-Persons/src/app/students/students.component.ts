import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students: any[] = [
    { "name":"Pippo","city":"Fossano","Gender":"M"},
    { "name":"Paolo","city":"Fossano","Gender":"M"},
    { "name":"Pietro","city":"Fossano","Gender":"M"},
    { "name":"Parola","city":"Cuneo","Gender":"F"},
    { "name":"Andrea","city":"Torino","Gender":"M"},
    { "name":"Chiara","city":"Genola","Gender":"F"},
    { "name":"Giada","city":"Fossano","Gender":"F"},
    { "name":"Laura","city":"Alba","Gender":"F"},
    { "name":"Raffaele","city":"Alessandria","Gender":"M"},
    { "name":"Alberto","city":"Cuneo","Gender":"M"},
    { "name":"Valeria","city":"Carmagnola","Gender":"F"},
    { "name":"Roberto","city":"Novara","Gender":"M"},
  ] 

  student: any;

  constructor() {
    let n = this.random(0, this.students.length-1);
    this.student = this.students[n];
    let status = this.random(0,1);
    this.student.presence = status==0 ? "Absent":"Present";

   }

  random(a,b){
    return (Math.floor((b-a+1)*Math.random())+a);
  } 

  ngOnInit(): void {
  }

}
