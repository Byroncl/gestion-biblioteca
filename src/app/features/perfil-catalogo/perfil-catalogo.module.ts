import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgbModule, NgbCarouselModule } from "@ng-bootstrap/ng-bootstrap";
import { NgbAccordionModule } from "@ng-bootstrap/ng-bootstrap";

import { PerfilCatalogoComponent } from "./pages/perfil-catalogo/perfil-catalogo.component";

import { PerfilCatalogoRoutingModule } from "./perfil-catalogo-routing.module";
import { PerfilCatalogoNavbarComponent } from "./components/perfil-catalogo-navbar/perfil-catalogo-navbar.component";
import { PerfilCatalogoContentComponent } from "./components/perfil-catalogo-content/perfil-catalogo-content.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [PerfilCatalogoComponent, PerfilCatalogoNavbarComponent, PerfilCatalogoContentComponent],
  imports: [
    CommonModule,
    NgbModule,
    PerfilCatalogoRoutingModule,
    NgbAccordionModule,
    FormsModule,
    NgbCarouselModule,
  ],
})
export class PerfilCatalogoModule {}
