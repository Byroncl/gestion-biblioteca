import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";

import { AdministradorLibrosComponent } from "./pages/administrador-libros/administrador-libros.component";

const routes: Routes = [{ path: "", component: AdministradorLibrosComponent }];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministradorLibrosRoutingModule {}
