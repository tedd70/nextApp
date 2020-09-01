// import { Component, Input } from "@angular/core";
// import { HomeService } from 'src/app/home/services/home.service';

// @Component({
//   selector: "app-accordion",
//   templateUrl: "./accordion.component.html",
//   styleUrls: ["./accordion.component.scss"]
// })
// export class AccordionComponent {

//   public classesBySchoolId;

//   constructor(
//     private homeService: HomeService
//   ) {

//   }
//   @Input('schoolData') schoolData: []

//   public isExpanded: boolean;

//   getClasses(school) {
//     school.isExpanded = !school.isExpanded;
//     // if (school.isExpanded) {
//     //   this.homeService.getClassesData(school.id).subscribe(data => {
//     //     school.classes = data;
//     //   });
//     // }
//   }

//   getStudents(clas) {
//     clas.isExpanded = !clas.isExpanded;
//     // if (clas.isExpanded) {
//     //   this.homeService.getStudentsData(clas.id).subscribe(data => {
//     //     clas.students = data;
//     //   });
//     // }
//   }

//   getMarks(student) {

//   }
// }
