import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgbModule, NgbCarouselModule } from "@ng-bootstrap/ng-bootstrap";
import { NgbAccordionModule } from "@ng-bootstrap/ng-bootstrap";
import { AdministradorUsuarioComponent } from "./pages/administrador-usuario/administrador-usuario.component";
import { AdministradorUsuarioRoutingModule } from "./administrador-usuario-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AdministradorUsuarioContentComponent } from "./components/administrador-usuario-content/administrador-usuario-content.component";
import { AdministradorUsuarioSidebarComponent } from "./components/administrador-usuario-sidebar/administrador-usuario-sidebar.component";
import { AdministradorUsuarioFiltroComponent } from "./components/administrador-usuario-filtro/administrador-usuario-filtro.component";
@NgModule({
  declarations: [
    AdministradorUsuarioComponent,
    AdministradorUsuarioContentComponent,
    AdministradorUsuarioSidebarComponent,
    AdministradorUsuarioFiltroComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    AdministradorUsuarioRoutingModule,
    NgbAccordionModule,
    FormsModule,
    NgbCarouselModule,
    ReactiveFormsModule,
  ],
})
export class AdministradorUsuarioModule {}
