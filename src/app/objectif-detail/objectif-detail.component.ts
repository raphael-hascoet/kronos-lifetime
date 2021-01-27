import { Component, OnInit } from '@angular/core';
import { Objectif, ObjectifService } from '../services/objectif.service';

@Component({
  selector: 'app-objectif-detail',
  templateUrl: './objectif-detail.component.html',
  styleUrls: ['./objectif-detail.component.scss']
})
export class ObjectifDetailComponent implements OnInit {

  objectif: Objectif

  imageUrl: string

  constructor(public objectifService: ObjectifService) { }

  ngOnInit() {

    this.objectifService.currentObjectifObs.subscribe(objectif => {
      this.objectif = objectif
      this.imageUrl = this.objectifService.getItemImageUrl(this.objectif.name)
    })
  }

}
