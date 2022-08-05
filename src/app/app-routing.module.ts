import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogregComponent } from './logreg/logreg.component';


const routes: Routes = [
  {path:'logreg',component:LogregComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
