import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-histogram',
  templateUrl: './histogram.component.html',
  styleUrls: ['./histogram.component.scss']
})
export class HistogramComponent implements OnInit {

  constructor() { }

  randomNumber = (max: number, min: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  ngOnInit() {

    const data = [
      ['Frequent Cash Credit via ATM', this.randomNumber(10, 100)],
      ['New account debited at ATM', this.randomNumber(10, 100)],
      ['New account followed by ATM', this.randomNumber(10, 100)],
      ['Banking at Unusual Hours', this.randomNumber(10, 100)],
      ['Transaction at Short span of Time via Internet banking', this.randomNumber(10, 100)],
      ['High Value Credit in New Account', this.randomNumber(10, 100)],
      ['Cheque Deposit at Multi Locations(Same Day)', this.randomNumber(10, 100)],
      ['High Value Cash Credit in Staff A/C', this.randomNumber(10, 100)],
      ['Rule for BSBDA Account', this.randomNumber(10, 100)],
      ['High Value Deposit', this.randomNumber(10, 100)],
      ['Sudden Activity in Dormant', this.randomNumber(10, 100)],
      ['High Value Deposit followed by Frequent Debits', this.randomNumber(10, 100)],
      ['Negative Balance In Account', this.randomNumber(10, 100)],
      ['Sudden Spurt in Number of Transactions', this.randomNumber(10, 100)],
      ['Full Limit Deposit OR Frequent Debit in SB DIGI A/c', this.randomNumber(10, 100)],
    ]
    const options: any = {
      chart: {
        type: "bar"
      },
      title: {
        text: "PARAMETERS THAT INFLUENCE RISK"
      },
      // subtitle: {
      //   text:
      //     'Data visualisation'
      // },
      xAxis: {
        categories: data.map(ele => ele[0]),
        title: {
          text: null
        }
      },
      yAxis: {
        min: 0,
        max: 100,
        title: {
          text: "Percentage",
          align: "high"
        },
        labels: {
          overflow: "justify"
        }
      },
      tooltip: {
        valueSuffix: "%"
      },
      plotOptions: {
        bar: {
          dataLabels: {
            enabled: false
          }
        }
      },

      legend: {
        layout: "vertical",
        align: "right",
        verticalAlign: "top",
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,
        backgroundColor:
          "#FFFFFF",
        shadow: true
      },
      credits: {
        enabled: false
      },
      series: [
        {
          name: 'Risk Parameters',
          data: data
        }
      ]
    };

    const chart = Highcharts.chart("bar", options);
  }





}
