import { Input, OnInit } from '@angular/core';
import {Component} from '@angular/core';

@Component ({
    selector: 'app-student',
    templateUrl: './student.component.html',
    styleUrls: ['./student.component.css']
   })
export class StudentComponent implements OnInit{
    student:any = {}; //bisogna inizializzare la variabile 
    //names: string[] = ["Pippo","Pluto","Minnie","Sonny","Penny"];
    @Input() newStudent: string = ""; //@input() dichiara che la variabile newStudent deriva dal componente superiore

    constructor(){
    }

    random(a,b){
        return (Math.floor((b-a+1)*Math.random())+a);
    }

    ngOnInit(): void{
        //this.student.name = this.names[this.random(0,this.names.length-1)];
        this.student.presence = this.random(0,1)==0 ? "Absent": "Present";
        this.student.name=this.newStudent;
    }
}
