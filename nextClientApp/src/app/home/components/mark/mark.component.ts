import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";

import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { MarkFormComponent } from './mark-form/mark-form.component';
import { HomeService } from '../../services/home.service';

@Component({
  selector: "app-mark",
  templateUrl: "./mark.component.html",
  styleUrls: ["./mark.component.scss"]
})

export class MarkComponent implements OnInit{
  @Input('markData') markData;
  @Input() marksDataObj;

  public isExpanded: boolean;
  public faPlusCircle = faPlusCircle;
  public eachMarkValue;

  constructor(
    public dialog: MatDialog,
    private homeService: HomeService
  ) { }

  ngOnInit() {
    console.log(this.marksDataObj)
  }

  // addNewMark() {
  //   let mark = {
  //     value: null
  //   }
  
  //   let dialogRef = this.dialog.open(MarkFormComponent, {
  //     height: "200px",
  //     width: "400px",
  //     data: mark,
  //     disableClose: true
  //   });
  //   dialogRef.afterClosed().subscribe((result: string) => {
  //     if (typeof result !== "undefined") {
  //       this.homeService.addNewMark(result).subscribe(data => {
  //         console.log(data);
  //       });
  //     }
  //   });
  // }
}
