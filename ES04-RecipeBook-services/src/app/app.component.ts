import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeature:string ='recipes'
  title = 'Es04-Recipe-book';

  onNavigate(feature:string){
    console.log(feature);
    this.loadedFeature = feature;
  }
}
