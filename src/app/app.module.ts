import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HighchartsChartModule } from 'highcharts-angular';
// import {ChartsModule} from 'ng2-charts'

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GaugeModule } from './gauge/gauge.module';
import { HistogramModule } from './histogram/histogram.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HighchartsChartModule,
    NgbModule,
    GaugeModule,
    HistogramModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
