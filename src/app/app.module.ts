import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LogregComponent } from './logreg/logreg.component';










@NgModule({
  declarations: [
    AppComponent,
      HomeComponent,
      LogregComponent,







   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,





  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
