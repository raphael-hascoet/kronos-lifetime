import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sliding-dialog',
  templateUrl: './sliding-dialog.component.html',
  styleUrls: ['./sliding-dialog.component.scss'],
  animations: [
    trigger('openSlidingDialog', [
      state('true', style({      // final CSS following animation
        height: '67vh'
      })),
      state('false', style({
        height: "0"
      })),
      transition('true => false', animate('500ms linear')),  // animation timing
      transition('false => true', animate('500ms linear'))
    ])
  ]
})
export class SlidingDialogComponent implements OnInit {

  @Input('title') title: string

  openState = false;

  constructor() { }

  ngOnInit() {
    this.open()
  }

  open() {
    this.openState = !this.openState
  }

  openIfNot() {
    if (!this.openState) { open() }
  }

}
