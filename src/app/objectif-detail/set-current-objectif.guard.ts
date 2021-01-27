import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ObjectifService } from '../services/objectif.service';

@Injectable({
  providedIn: 'root'
})
export class SetCurrentObjectifGuard implements CanActivate {

  constructor(private router: Router, private objectifService: ObjectifService
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {

    const objectifKey = next ? next.params ? next.params.objectif : undefined : undefined

    if (this.objectifService.setCurrentObjectifIfExists(objectifKey)) {
      return true;
    } else {
      return this.router.parseUrl('');
    }
  }

}
