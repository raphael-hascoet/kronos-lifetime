import { Injectable } from '@angular/core';
import * as objectifs from '../../assets/data/objectifs.json';
import { BehaviorSubject } from 'rxjs';

export interface Objectif {
  name: string,
  label: string,
  time: string,
  objectif: string
}

@Injectable({
  providedIn: 'root'
})
export class ObjectifService {

  private currentObjectifSubject = new BehaviorSubject<Objectif>(null)
  public currentObjectifObs = this.currentObjectifSubject.asObservable()

  objectifs = (objectifs as any).default as Objectif[]

  constructor() { }

  setCurrentObjectifIfExists(name: string) {
    const objectif = this.objectifs.find(obj => obj.name === name)

    if (objectif) {
      this.currentObjectifSubject.next(objectif)
    }

    return objectif
  }


  getItemImageUrl(name: string) {
    return `assets/images/objectifs/${name}.png`;
  }

}
