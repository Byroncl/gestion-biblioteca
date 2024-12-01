import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgbModule, NgbCarouselModule } from "@ng-bootstrap/ng-bootstrap";
import { NgbAccordionModule } from "@ng-bootstrap/ng-bootstrap";

import { PerfilRecomendacionesComponent } from "./pages/perfil-recomendaciones/perfil-recomendaciones.component";
import { PerfilRecomendacionesNavbarComponent } from "./components/perfil-recomendaciones-navbar/perfil-recomendaciones-navbar.component";
import { PerfilRecomendacionesRoutingModule } from "./perfil-recomendaciones-routing.module";
import { PerfilRecomendacionesContentComponent } from "./components/perfil-recomendaciones-content/perfil-recomendaciones-content.component";

@NgModule({
  declarations: [
    PerfilRecomendacionesComponent,
    PerfilRecomendacionesNavbarComponent,
    PerfilRecomendacionesContentComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    PerfilRecomendacionesRoutingModule,
    NgbAccordionModule,
    NgbCarouselModule,
  ],
})
export class PerfilRecomendacionesModule {}
