import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsSolidGauge from 'highcharts/modules/solid-gauge';

HighchartsMore(Highcharts);
HighchartsSolidGauge(Highcharts);
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  tableData: any;
  showData: boolean = false;

  constructor() {

  }

  ngOnInit(): void {
    this.tableData = [
      {
        accountNumber: '0101123456001',
        date: '2020-01-01 10:00:01',
        txnId: '120381921',
        amount: '$100',
        category: 'Fraud',
        riskProfile: '80%'
      },
      {
        accountNumber: '0101123456002',
        date: '2020-01-01 10:00:02',
        txnId: '098958975',
        amount: '$150',
        category: 'Scam',
        riskProfile: '51%'
      },
      {
        accountNumber: '0101123456003',
        date: '2020-01-01 10:00:03',
        txnId: '047652839',
        amount: '$150',
        category: 'Fraud',
        riskProfile: '99%'
      }
    ]
  }

  onClick(data: any) {
    this.showData = false
    setTimeout(() => {
      this.showData = true
    }, 100)
  }


}
