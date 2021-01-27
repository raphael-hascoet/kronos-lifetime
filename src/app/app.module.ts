import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule, ThemeService } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatChipsModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule, MatToolbarModule, MatTabsModule } from '@angular/material';
import { SlidingDialogComponent } from './sliding-dialog/sliding-dialog.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ObjectifItemComponent } from './dashboard/objectif-item/objectif-item.component';
import { AjoutObjectifComponent } from './dashboard/ajout-objectif/ajout-objectif.component';
import { FormsModule } from '@angular/forms';
import { ObjectifRemplirModalComponent } from './dashboard/objectif-remplir-modal/objectif-remplir-modal.component';
import { ObjectifDetailComponent } from './objectif-detail/objectif-detail.component';
import { StatsComponent } from './stats/stats.component';

@NgModule({
  declarations: [
    AppComponent,
    SlidingDialogComponent,
    DashboardComponent,
    ObjectifItemComponent,
    AjoutObjectifComponent,
    ObjectifRemplirModalComponent,
    ObjectifDetailComponent,
    StatsComponent,
  ],
  imports: [
    BrowserModule,
    MatChipsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    ChartsModule,
    MatTabsModule,
    FormsModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule
  ],
  providers: [ThemeService],
  bootstrap: [AppComponent],
  entryComponents: [ObjectifRemplirModalComponent]
})
export class AppModule { }
