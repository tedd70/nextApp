import { Component, Input } from "@angular/core";

// Services 
import { HomeService } from '../../services/home.service';

@Component({
  selector: "app-student",
  templateUrl: "./student.component.html",
  styleUrls: ["./student.component.scss"]
})

export class StudentComponent {
  @Input('student') student;

  public marksData;
  public isExpanded: boolean;

  constructor(
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
}
