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
      scales: { xAxes: [{}], yAxes: [{}] },
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
      { data: [24,24,24,24,24,24,24], label: 'Netflix' },
      { data: [24,24,24,24,24,24,24], label: 'Youtube' }
    ];
  
    constructor() { }
  
    ngOnInit(): void {
    }
  
    public randomize(): void {
      // Only Change 3 values
      this.barChartData[0].data = [
        Math.round(Math.random() * 24),
        10,
        6,
        (Math.random() * 24),
        2,
        (Math.random() * 24),
        5 ];
        this.barChartData[1].data = [
          Math.round(Math.random() * 24),
          9,
          (Math.random() * 24),
          (Math.random() * 24),
          (Math.random() * 24),
          (Math.random() * 24),
          (Math.random() * 24) ];
      
      }
  }