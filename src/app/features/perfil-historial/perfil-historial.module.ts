import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgbModule, NgbCarouselModule } from "@ng-bootstrap/ng-bootstrap";
import { NgbAccordionModule } from "@ng-bootstrap/ng-bootstrap";

import { PerfilHistorialComponent } from "./pages/perfil-historial/perfil-historial.component";
import { PerfilHistorialNavbarComponent } from "./components/perfil-historial-navbar/perfil-historial-navbar.component";
import { PerfilHistorialContentComponent } from "./components/perfil-historial-content/perfil-historial-content.component";
import { PerfilHistorialRoutingModule } from "./perfil-historial-routing.module";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [PerfilHistorialComponent, PerfilHistorialNavbarComponent, PerfilHistorialContentComponent],
  imports: [
    CommonModule,
    NgbModule,
    PerfilHistorialRoutingModule,
    NgbAccordionModule,
    FormsModule,
    NgbCarouselModule,
  ],
})
export class PerfilHistorialModule {}
