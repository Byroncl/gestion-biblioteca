import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgbModule, NgbCarouselModule } from "@ng-bootstrap/ng-bootstrap";
import { NgbAccordionModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from "@angular/forms";

import { PerfilFavoritosContentComponent } from "./components/perfil-favoritos-content/perfil-favoritos-content.component";
import { PerfilFavoritosNavbarComponent } from "./components/perfil-favoritos-navbar/perfil-favoritos-navbar.component";
import { PerfilFavoritosComponent } from "./pages/perfil-favoritos/perfil-favoritos.component";
import { PerfilFavoritosRoutingModule } from "./perfil-favoritos-routing.module";

@NgModule({
  declarations: [
    PerfilFavoritosComponent,
    PerfilFavoritosNavbarComponent,
    PerfilFavoritosContentComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    PerfilFavoritosRoutingModule,
    NgbAccordionModule,
    FormsModule,
    NgbCarouselModule,
  ],
})
export class PerfilFavoritosModule {}
