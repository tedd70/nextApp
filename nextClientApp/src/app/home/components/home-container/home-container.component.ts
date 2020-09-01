import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

// Interfaces
import { SchoolInterface } from '../../bussiness/interfaces/school.interface';

@Component({
  selector: "app-home-container",
  templateUrl: "./home-container.component.html",
  styleUrls: ["./home-container.component.scss"]
})

export class HomeContainerComponent implements OnInit {

  public schoolsData: SchoolInterface[];

  constructor(
    private homeActivatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.homeActivatedRoute.data.subscribe(data => {
      this.schoolsData = data.response;
    });
  }
}
