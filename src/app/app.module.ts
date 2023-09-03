import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { FullCalendarModule } from '@fullcalendar/angular';



import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';

console.log('AgGridModule',AgGridModule);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FullCalendarModule,
    HttpClientModule,
    FormsModule,
    AgGridModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
