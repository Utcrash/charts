import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GaugeComponent } from './gauge.component';
import { HighchartsChartModule } from 'highcharts-angular';


@NgModule({
  imports: [
    CommonModule,
    HighchartsChartModule
  ],
  exports: [GaugeComponent],
  declarations: [GaugeComponent]
})
export class GaugeModule { }
