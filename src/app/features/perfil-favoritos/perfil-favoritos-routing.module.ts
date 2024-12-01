import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";

import { PerfilFavoritosComponent } from "./pages/perfil-favoritos/perfil-favoritos.component";

const routes: Routes = [{ path: "", component: PerfilFavoritosComponent }];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilFavoritosRoutingModule {}
