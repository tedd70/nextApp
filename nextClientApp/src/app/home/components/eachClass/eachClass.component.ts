import { Component, Input } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

// Services 
import { HomeService } from '../../services/home.service';
import { StudentInterface } from '../../bussiness/interfaces/student.interface';
import { EachClassFormComponent } from './eachClass-form/eachClass-form.component';

@Component({
  selector: "app-each-class",
  templateUrl: "./eachClass.component.html",
  styleUrls: ["./eachClass.component.scss"]
})

export class EachClassComponent {
  @Input('eachClass') eachClass;

  public studentsData : any;
  public isExpanded: boolean;
  public faPlusCircle = faPlusCircle;

  constructor(
    public dialog: MatDialog,
    private homeService: HomeService
  ) { }

  onClick() {
    this.isExpanded = !this.isExpanded;

    if(this.isExpanded) {
      this.homeService.getStudentsData(this.eachClass.id).subscribe(data => {
        this.studentsData = data;
      });
    }
  }

  openModal(): void {
    let student = {
      classId: this.eachClass.id,
      name:""
    };

    let dialogRef = this.dialog.open(EachClassFormComponent, {
      height: "200px",
      width: "400px",
      data: student,
      disableClose: true
    });
    dialogRef.afterClosed().subscribe((result: string) => {
      if (typeof result !== "undefined") {
        this.homeService.createOrUpdateStudent(result).subscribe(data => {
          console.log(data);
        });
        
        this.studentsData.push(result);
      } 
    });
  }
}
