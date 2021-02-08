import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students = [
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


  constructor() {
    


   }

  ngOnInit(): void {
  }

}
