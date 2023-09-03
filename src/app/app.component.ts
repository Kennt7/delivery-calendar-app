import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridReadyEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
   title = 'delivery-calendar-app';
   
   calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin]
   }
   rowData: any[] = [
    {delivery_name:'courier',expected_delivery_time: '2023.09.06.',package_weight:'heavy',status:'none',delivery_price:'3500'},
    
   
 
   
   ];
    colDefs: ColDef[] = [
      {  field: 'delivery_name' },
      {  field: 'expected_delivery_time' },
      {field: 'package_weight'},
      {field: 'status'},
      {  field: 'delivery_price' }
    ];
  
  }


