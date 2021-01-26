import { Component, OnInit } from '@angular/core';
import * as objectifs from '../../assets/data/objectifs.json';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  objectifs = (objectifs as any).default

  constructor() { }

  ngOnInit() {
  }

}
