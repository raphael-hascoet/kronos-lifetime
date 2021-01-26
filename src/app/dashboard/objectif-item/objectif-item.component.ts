import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-objectif-item',
  templateUrl: './objectif-item.component.html',
  styleUrls: ['./objectif-item.component.scss']
})
export class ObjectifItemComponent implements OnInit {

  @Input('objectif') objectif: any


  constructor() { }

  ngOnInit() {
  }

  getItemImageUrl() {
    return `assets/images/objectifs/${this.objectif.name}.png`;
  }

}
