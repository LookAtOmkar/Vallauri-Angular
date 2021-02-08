import {Component} from '@angular/core';

@Component ({
    selector: 'app-student',
    templateUrl: './student.component.html',
    styleUrls: ['./student.component.css']
   })
export class StudentComponent{
    name : string;
    status : string;
    names = ["Pippo","Pluto","Minnie","Sonny","Penny"];

    constructor(){
        this.name = this.names[this.random(0,this.names.length-1)];
        let n = this.random(0,1);
        if(n==0)
            this.status="Absent";
        else
            this.status ="Present";
    }


    random(a,b){
        return (Math.floor((b-a+1)*Math.random())+a);
    }
}
