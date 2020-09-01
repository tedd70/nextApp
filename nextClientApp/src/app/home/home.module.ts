import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MatExpansionModule } from '@angular/material/expansion';

import { SharedModule } from "../shared/shared.module";
import { HomeRoutingModule } from "./home-routing.module";
import { HomeContainerComponent } from './components/home-container/home-container.component';
import { SchoolComponent } from './components/school/school.component';
import { EachClassComponent } from './components/eachClass/eachclass.component';
import { StudentComponent } from './components/student/student.component';
import { MarkComponent } from './components/mark/mark.component';

@NgModule({
  declarations: [HomeContainerComponent, SchoolComponent, EachClassComponent, StudentComponent, MarkComponent],
  imports: [CommonModule, SharedModule, HomeRoutingModule, MatExpansionModule],
  exports: [HomeContainerComponent, SchoolComponent, EachClassComponent, StudentComponent, MarkComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule { }
