import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { SlidingDialogComponent } from './sliding-dialog/sliding-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'kronos';

  @ViewChild(SlidingDialogComponent, { static: false })
  private slidingComponent: SlidingDialogComponent

  constructor() {
  }

  ngAfterViewInit() {
  }

  openSlider() {
    this.slidingComponent.open()
  }
}
