import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";

import { RegistroComponent } from "./pages/registro/registro.component";

const routes: Routes = [{ path: "", component: RegistroComponent }];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroRoutingModule {}
