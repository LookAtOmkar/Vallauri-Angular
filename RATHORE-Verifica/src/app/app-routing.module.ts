import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DettagliComponent } from './dettagli/dettagli.component';
import { ElencoComponent } from './elenco/elenco.component';
import { AppComponent } from './app.component';
import { NewUserComponent } from './new-user/new-user.component';




const appRoutes: Routes = [
  {
    path: 'dettagli', // senza slash !
    component: DettagliComponent
  },
  {
    path: 'elenco', // senza slash !
    component: ElencoComponent
  },
  {
    path:'newuser',
    component:NewUserComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
