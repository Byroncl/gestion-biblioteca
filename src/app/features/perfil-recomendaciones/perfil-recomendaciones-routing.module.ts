import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";

import { PerfilRecomendacionesComponent } from "./pages/perfil-recomendaciones/perfil-recomendaciones.component";

const routes: Routes = [{ path: "", component: PerfilRecomendacionesComponent }];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilRecomendacionesRoutingModule {}
