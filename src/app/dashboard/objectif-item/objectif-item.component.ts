import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DiscussionService } from 'src/app/services/discussion.service';
import { ObjectifRemplirModalComponent } from '../objectif-remplir-modal/objectif-remplir-modal.component';

@Component({
  selector: 'app-objectif-item',
  templateUrl: './objectif-item.component.html',
  styleUrls: ['./objectif-item.component.scss']
})
export class ObjectifItemComponent implements OnInit {

  @Input('objectif') objectif: any


  constructor(public dialog: MatDialog, public discussionService: DiscussionService) { }

  ngOnInit() {
  }

  getItemImageUrl() {
    return `assets/images/objectifs/${this.objectif.name}.png`;
  }

  openRemplirDialog() {
    const dialogRef = this.dialog.open(ObjectifRemplirModalComponent, {
      data: this.objectif
    })

    dialogRef.afterClosed().subscribe(data => {
      if (data && data.added) {
        this.discussionService.sendMessage('congratulate')
      }
    })
  }
}
