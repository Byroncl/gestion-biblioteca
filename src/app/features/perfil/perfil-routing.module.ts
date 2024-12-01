import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";

import { PerfilComponent } from "./pages/perfil/perfil.component";

const routes: Routes = [{ path: "", component: PerfilComponent }];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilRoutingModule {}
