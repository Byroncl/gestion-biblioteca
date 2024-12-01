import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";

import { PerfilHistorialComponent } from "./pages/perfil-historial/perfil-historial.component";

const routes: Routes = [{ path: "", component: PerfilHistorialComponent }];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilHistorialRoutingModule {}
