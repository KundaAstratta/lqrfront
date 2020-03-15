import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LqrComponent } from './components/lqr/lqr.component';
import { QrComponent } from './components/qr/qr.component';
import { CreerqrComponent } from './components/creerqr/creerqr.component';


const routes: Routes = [
  {path: 'qr', component: LqrComponent},
  {path: 'qr/:qrid', component: QrComponent },
  {path: 'creerqr', component: CreerqrComponent},
  {path: '', redirectTo: 'qr', pathMatch: 'full' }   // page par défaut
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

