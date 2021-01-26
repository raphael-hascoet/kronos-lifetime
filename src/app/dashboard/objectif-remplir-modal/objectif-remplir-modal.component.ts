import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-objectif-remplir-modal',
  templateUrl: './objectif-remplir-modal.component.html',
  styleUrls: ['./objectif-remplir-modal.component.scss']
})
export class ObjectifRemplirModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ObjectifRemplirModalComponent>, @Inject(MAT_DIALOG_DATA) public objectif: any) { }

  ngOnInit() {

  }

  onAjouterClick() {
    this.dialogRef.close()
  }
  onAnnulerClick() {
    this.dialogRef.close()
  }

}
