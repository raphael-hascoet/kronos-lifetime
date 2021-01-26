import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatChipsModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule, MatToolbarModule } from '@angular/material';
import { SlidingDialogComponent } from './sliding-dialog/sliding-dialog.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ObjectifItemComponent } from './dashboard/objectif-item/objectif-item.component';
import { AjoutObjectifComponent } from './dashboard/ajout-objectif/ajout-objectif.component';
import { FormsModule } from '@angular/forms';
import { ObjectifRemplirModalComponent } from './dashboard/objectif-remplir-modal/objectif-remplir-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    SlidingDialogComponent,
    DashboardComponent,
    ObjectifItemComponent,
    AjoutObjectifComponent,
    ObjectifRemplirModalComponent
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
    FormsModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ObjectifRemplirModalComponent]
})
export class AppModule { }
