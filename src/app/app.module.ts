import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { Chart2Component } from './chart2/chart2.component';
import { ChartModule } from 'primeng/chart';

@NgModule({
  declarations: [AppComponent, Chart2Component],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    BrowserAnimationsModule,
    CanvasJSAngularChartsModule,
    ChartModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}