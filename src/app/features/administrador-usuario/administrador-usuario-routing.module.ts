import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";

import { AdministradorUsuarioComponent } from "./pages/administrador-usuario/administrador-usuario.component";

const routes: Routes = [{ path: "", component: AdministradorUsuarioComponent }];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministradorUsuarioRoutingModule {}
