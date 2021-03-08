import { Component,EventEmitter, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  collapsed:boolean = true;

  @Output() featureSelected = new EventEmitter<string>();
  constructor() { }
  ngOnInit(): void { }

  onSelect(feature:string){
    console.log(feature);
    this.featureSelected.emit(feature); //.emit consente di generare un evento 
  }

}