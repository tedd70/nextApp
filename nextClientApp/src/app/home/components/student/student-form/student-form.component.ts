import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HomeService } from 'src/app/home/services/home.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ["./student-form.component.scss"],
})

export class StudentFormComponent {

  constructor(
    public dialogRef: MatDialogRef<StudentFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private homeService: HomeService
  ) {}

  closeDialog(): void {
    this.dialogRef.close();
  }

  updateStudentName() {
    this.homeService.createOrUpdateStudent(this.data).subscribe(data => {
      this.data = data;
      this.dialogRef.close();
    });
  }


}