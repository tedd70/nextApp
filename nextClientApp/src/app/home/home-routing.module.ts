import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// Components
import { HomeContainerComponent } from "./components/home-container/home-container.component";
import { HomeResolver } from './services/home-resolver.service';

// const routes: Routes = [{ path: "", component: HomeContainerComponent }];

const routes: Routes = [
  {
    path: "",
    component: HomeContainerComponent,
    resolve: {
      response: HomeResolver
    }
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
