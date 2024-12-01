import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";

import { PerfilCatalogoComponent } from "./pages/perfil-catalogo/perfil-catalogo.component";

const routes: Routes = [{ path: "", component: PerfilCatalogoComponent }];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilCatalogoRoutingModule {}
