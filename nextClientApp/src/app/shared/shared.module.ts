import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

// Components
import { HeaderComponent } from "../shared/components/header/header.component";
// import { AccordionComponent } from './components/accordion/accordion.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports: [HeaderComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule {}
