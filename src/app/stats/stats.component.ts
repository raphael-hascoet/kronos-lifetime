import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-annotation';
@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
  
    public barChartOptions: ChartOptions = {
      responsive: true,
      // We use these empty structures as placeholders for dynamic theming.
      scales: { xAxes: [{}], yAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Nombre d\'heures'
       }
      }] },
      plugins: {
        datalabels: {
          anchor: 'end',
          align: 'end',
        }
      }
    };
    public barChartLabels: Label[] = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
    public barChartType: ChartType = 'bar';
    public barChartLegend = true;
    public barChartPlugins = [pluginDataLabels];

    public chartColors: Array<any> = [
      { // first color
        backgroundColor: 'rgba(225,10,24,0.4)',
        borderColor: 'rgba(225,10,24,0.4)',
        pointBackgroundColor: 'rgba(225,10,24,0.4)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(225,10,24,0.4)'
      },
      { // second color
        backgroundColor: 'rgba(144,181,120,0.6)',
        borderColor: 'rgba(144,181,120,0.6)',
        pointBackgroundColor: 'rgba(144,181,120,0.6)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(144,181,120,0.6)'
      }];
  
    public barChartData: ChartDataSets[] = [
      { data: [1,1,1,1,1,1,1], label: 'Netflix', stack:'a' },
      { data: [1,1,1,1,1,1,1], label: 'Footing', stack:'a' }
    ];
  
    constructor() { }
  
    ngOnInit(): void {
    }
  
    public randomize(): void {
      this.barChartData[0].data = [
          Math.round((Math.random() * 8)),
          Math.round((Math.random() * 8)),
          Math.round((Math.random() * 8)),
          Math.round((Math.random() * 8)),
          Math.round((Math.random() * 8)),
          Math.round((Math.random() * 8)),
          Math.round((Math.random() * 8)) ];
        this.barChartData[1].data = [
          Math.round((Math.random() * 8)),
          Math.round((Math.random() * 8)),
          Math.round((Math.random() * 8)),
          Math.round((Math.random() * 8)),
          Math.round((Math.random() * 8)),
          Math.round((Math.random() * 8)),
          Math.round((Math.random() * 8)) ];
      
      }
  }