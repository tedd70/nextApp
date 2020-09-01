import { Component, Input } from "@angular/core";

@Component({
  selector: "app-mark",
  templateUrl: "./mark.component.html",
  styleUrls: ["./mark.component.scss"]
})

export class MarkComponent {
  @Input('markData') markData;

  public isExpanded: boolean;

  constructor(
  ) { }
}
