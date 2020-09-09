import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { FormsModule } from '@angular/forms';

import { SharedModule } from "../shared/shared.module";
import { HomeRoutingModule } from "./home-routing.module";
import { HomeContainerComponent } from './components/home-container/home-container.component';
import { SchoolComponent } from './components/school/school.component';
import { EachClassComponent } from './components/eachClass/eachclass.component';
import { StudentComponent } from './components/student/student.component';
import { MarkComponent } from './components/mark/mark.component';
import { StudentFormComponent } from './components/student/student-form/student-form.component';
import { EachClassFormComponent } from './components/eachClass/eachClass-form/eachClass-form.component';
import { MarkFormComponent } from './components/mark/mark-form/mark-form.component';

@NgModule({
  declarations: [
    HomeContainerComponent, 
    SchoolComponent, 
    EachClassComponent, 
    StudentComponent, 
    MarkComponent,
    StudentFormComponent,
    EachClassFormComponent,
    MarkFormComponent
  ],
  imports: [
    CommonModule, 
    SharedModule, 
    HomeRoutingModule, 
    MatDialogModule,
    MatButtonModule,
    FontAwesomeModule,
    FormsModule
  ],
  exports: [
    HomeContainerComponent, 
    SchoolComponent, 
    EachClassComponent, 
    StudentComponent, 
    MarkComponent,
    StudentFormComponent,
    EachClassFormComponent,
    MarkFormComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule { }
