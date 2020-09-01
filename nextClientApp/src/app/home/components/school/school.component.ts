import { Component, Input } from "@angular/core";

// Services 
import { HomeService } from '../../services/home.service';

@Component({
  selector: "app-school",
  templateUrl: "./school.component.html",
  styleUrls: ["./school.component.scss"]
})

export class SchoolComponent {
  @Input('schoolData') schoolData;

  public classesData: any;
  public isExpanded: boolean;

  constructor(
    private homeService: HomeService
  ) { }

  onClick() {
    this.isExpanded = !this.isExpanded;

    if(this.isExpanded) {
      this.homeService.getClassesData(this.schoolData.id).subscribe(data => {
        this.classesData = data;
      });
    }
  }
}
