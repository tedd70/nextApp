import { Component, Inject, Output, EventEmitter } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HomeService } from 'src/app/home/services/home.service';

@Component({
  selector: 'app-eachClass-form',
  templateUrl: './eachClass-form.component.html',
  styleUrls: ["./eachClass-form.component.scss"],
})

export class EachClassFormComponent {

  @Output() showModalAction = new EventEmitter();

  constructor(
    public dialogRef: MatDialogRef<EachClassFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private homeService: HomeService
  ) {}

  closeDialog(): void {
    this.dialogRef.close();
  }
}