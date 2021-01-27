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
  
    public barChartData: ChartDataSets[] = [
      { data: [1,1,1,1,1,1,1], label: 'Netflix', stack:'a' },
      { data: [1,1,1,1,1,1,1], label: 'Youtube', stack:'a' }
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