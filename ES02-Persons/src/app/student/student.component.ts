import {Component} from '@angular/core';

@Component ({
    selector: 'app-student',
    templateUrl: './student.component.html',
    styleUrls: ['./student.component.css']
   })
export class StudentComponent{
    student:any = {}; //bisogna inizializzare la variabile 
    names: string[] = ["Pippo","Pluto","Minnie","Sonny","Penny"];

    constructor(){
        this.student.name = this.names[this.random(0,this.names.length-1)];
        this.student.presence = this.random(0,1)==0 ? "Absent": "Present";
    }

    random(a,b){
        return (Math.floor((b-a+1)*Math.random())+a);
    }
}
