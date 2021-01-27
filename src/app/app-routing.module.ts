import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ObjectifDetailComponent } from './objectif-detail/objectif-detail.component';
import { SetCurrentObjectifGuard } from './objectif-detail/set-current-objectif.guard';


const routes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "objectif/:objectif", component: ObjectifDetailComponent, canActivate: [SetCurrentObjectifGuard] },
  { path: '**', redirectTo: "dashboard" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
