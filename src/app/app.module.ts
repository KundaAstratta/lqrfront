import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LqrComponent } from './components/lqr/lqr.component';
import { QrComponent } from './components/qr/qr.component';

import { HttpClientModule } from '@angular/common/http';

import {TableModule} from 'primeng/table';

import {ButtonModule} from 'primeng/button';
import { CreerqrComponent } from './components/creerqr/creerqr.component';

import { FormsModule }   from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';

import {DialogModule} from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';





@NgModule({
  declarations: [
    AppComponent,
    LqrComponent,
    QrComponent,
    CreerqrComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    DialogModule,
    BrowserAnimationsModule,
  ],
  providers: [ 
    {provide: 'BACKEND_URL', useValue: 'http://localhost:8080'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
