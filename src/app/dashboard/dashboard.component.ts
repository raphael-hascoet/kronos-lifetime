import { Component, OnInit } from '@angular/core';
import * as objectifs from '../../assets/data/objectifs.json';
import { DiscussionService } from '../services/discussion.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  objectifs = (objectifs as any).default

  message: string[] = [""]

  currentTab = 0

  constructor(private discussionService: DiscussionService) { }

  ngOnInit() {
    this.discussionService.sendMessage('greet')
    this.discussionService.discussionObs.subscribe(message => this.message = message)
  }

  tabChanged(event) {
    this.currentTab = event.index
  }

}
