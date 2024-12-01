import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgbModule, NgbCarouselModule } from "@ng-bootstrap/ng-bootstrap";
import { NgbAccordionModule } from "@ng-bootstrap/ng-bootstrap";
import { PerfilComponent } from "./pages/perfil/perfil.component";
import { PerfilRoutingModule } from "./perfil-routing.module";
import { PerfilContentComponent } from "./components/perfil-content/perfil-content.component";
import { PerfilFooterComponent } from "./components/perfil-footer/perfil-footer.component";
import { PerfilNavbarComponent } from "./components/perfil-navbar/perfil-navbar.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    PerfilComponent,
    PerfilContentComponent,
    PerfilFooterComponent,
    PerfilNavbarComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    PerfilRoutingModule,
    NgbAccordionModule,
    FormsModule,
    NgbCarouselModule,
  ],
})
export class PerfilModule {}
