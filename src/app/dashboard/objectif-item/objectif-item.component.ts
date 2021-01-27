import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DiscussionService } from 'src/app/services/discussion.service';
import { ObjectifRemplirModalComponent } from '../objectif-remplir-modal/objectif-remplir-modal.component';
import { Router } from '@angular/router';
import { ObjectifService } from '../../services/objectif.service';

@Component({
  selector: 'app-objectif-item',
  templateUrl: './objectif-item.component.html',
  styleUrls: ['./objectif-item.component.scss']
})
export class ObjectifItemComponent implements OnInit {

  @Input('objectif') objectif: any

  imageUrl: string

  constructor(public dialog: MatDialog, public discussionService: DiscussionService, public router: Router, public objectifService: ObjectifService) { }

  ngOnInit() {
    this.imageUrl = this.objectifService.getItemImageUrl(this.objectif.name)
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
