import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor() {
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    const myChart = new Chart("myChart", {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    const canvas = document.getElementById('operational') as HTMLCanvasElement;

    const ctx = canvas.getContext('2d');
    // @ts-ignore: Object is possibly 'null'.
    const gradient = ctx.createLinearGradient(0, 0, 600, 0);
    gradient.addColorStop(0, 'green');
    gradient.addColorStop(0.5, 'yellow');
    gradient.addColorStop(1, 'red');


    const gauge = new Chart('operational', {
      type: "doughnut",
      data: {
        labels: [],
        datasets: [
          {
            label: "",
            data: [90, 10],
            backgroundColor: gradient,
            borderColor: ["grey"],
            borderWidth: 1,
          }
        ]
      },
      options: {
        maintainAspectRatio: false,

        circumference: 180,
        rotation: 270,
        plugins: { tooltip: { enabled: false } },

        // cutoutPercentage: 64,

        onClick(...args) {
          console.log(args);
        }
      }
    });

  }


}
