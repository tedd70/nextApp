import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HomeService } from 'src/app/home/services/home.service';

@Component({
  selector: 'app-mark-form',
  templateUrl: './mark-form.component.html',
  styleUrls: ["./mark-form.component.scss"],
})

export class MarkFormComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<MarkFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private homeService: HomeService
  ) {}

  ngOnInit() {
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}