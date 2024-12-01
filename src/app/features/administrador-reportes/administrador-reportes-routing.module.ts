import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";

import { AdministradorReportesComponent } from "./pages/administrador-reportes/administrador-reportes.component";

const routes: Routes = [
  { path: "", component: AdministradorReportesComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministradorReportesRoutingModule {}
