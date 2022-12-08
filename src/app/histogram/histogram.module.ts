import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistogramComponent } from './histogram.component';
import { HighchartsChartModule } from 'highcharts-angular';

@NgModule({
  imports: [
    CommonModule,
    HighchartsChartModule
  ],

  exports: [HistogramComponent],
  declarations: [HistogramComponent]
})
export class HistogramModule { }
