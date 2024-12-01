import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgbModule, NgbCarouselModule } from "@ng-bootstrap/ng-bootstrap";
import { NgbAccordionModule } from "@ng-bootstrap/ng-bootstrap";

import { AdministradorLibrosComponent } from "./pages/administrador-libros/administrador-libros.component";
import { AdministradorLibrosRoutingModule } from "./administrador-libros-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AdministradorLibrosTableComponent } from "./components/administrador-libros-table/administrador-libros-table.component";
import { AdministradorLibrosSidebarComponent } from "./components/administrador-libros-sidebar/administrador-libros-sidebar.component";
import { AdministradorLibrosFiltroComponent } from "./components/administrador-libros-filtro/administrador-libros-filtro.component";
import { HttpClientModule } from "@angular/common/http";
import exp from "constants";

@NgModule({
  declarations: [
    AdministradorLibrosComponent,
    AdministradorLibrosTableComponent,
    AdministradorLibrosSidebarComponent,
    AdministradorLibrosFiltroComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    AdministradorLibrosRoutingModule,
    NgbAccordionModule,
    FormsModule,
    NgbCarouselModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
})
export class AdministradorLibrosModule {}

