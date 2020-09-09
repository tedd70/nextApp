import { Component, Input } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { faEdit, faPlusCircle } from '@fortawesome/free-solid-svg-icons';

// Services 
import { HomeService } from '../../services/home.service';
import { StudentFormComponent } from './student-form/student-form.component';
import { MarkFormComponent } from '../mark/mark-form/mark-form.component';

@Component({
  selector: "app-student",
  templateUrl: "./student.component.html",
  styleUrls: ["./student.component.scss"]
})

export class StudentComponent {
  @Input('student') student;

  public marksData;
  public isExpanded: boolean;
  public faEdit = faEdit;
  public faPlusCircle = faPlusCircle;

  constructor(
    public dialog: MatDialog,
    private homeService: HomeService
  ) { }

  onClick() {
    this.isExpanded = !this.isExpanded;

    if(this.isExpanded) {
      this.homeService.getMarksData(this.student.id).subscribe((data: Array<any>) => {
        let result = [];
        data.forEach(x => {
          result[x.profId] = {
            profName: x.prof.name, 
            values: data.filter(y=>y.profId == x.profId).map(ele=>ele.value)
          }
  
          return result;
        });
  
        this.marksData = result;
      });
    }
  }

  openModal(): void {
    let dialogRef = this.dialog.open(StudentFormComponent, {
      height: "200px",
      width: "400px",
      data: this.student,
      disableClose: true
    });
    dialogRef.afterClosed().subscribe((result: string) => {
      if (typeof result !== "undefined") {
        this.student.name = result;
      }
    });
  }
}
