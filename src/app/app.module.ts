import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { Chart2Component } from './chart2/chart2.component';
import { ChartModule } from 'primeng/chart';
import { DropdownModule } from 'primeng/dropdown';
import { DropdownComponent } from './dropdown/dropdown.component';
import { DropdownComponent2 } from './dropdown2/dropdown2.component';
import { TicketComponent } from './ticket/ticket.component';
import { TooltipModule } from 'primeng/tooltip';
import { SalesheaderComponent } from './salesheader/salesheader.component';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

import { ProgressBarModule } from 'primeng/progressbar';

import { ToastModule } from 'primeng/toast';

import { Table2Component } from './table2/table2.component';
import { Table3Component } from './table3/table3.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    Chart2Component,
    DropdownComponent,
    DropdownComponent2,
    TicketComponent,
    SalesheaderComponent,

    Table2Component,
    Table3Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    BrowserAnimationsModule,
    CanvasJSAngularChartsModule,
    ChartModule,
    DropdownModule,
    TooltipModule,
    InputSwitchModule,
    InputTextModule,
    TableModule,
    HttpClientModule,
    TagModule,
    ProgressSpinnerModule,
    ProgressBarModule,
    ToastModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
