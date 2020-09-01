import { Component, Input } from "@angular/core";

// Services 
import { HomeService } from '../../services/home.service';

@Component({
  selector: "app-each-class",
  templateUrl: "./eachClass.component.html",
  styleUrls: ["./eachClass.component.scss"]
})

export class EachClassComponent {
  @Input('eachClass') eachClass;

  public studentsData;
  public profsData;
  public isExpanded: boolean;

  constructor(
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
}
