import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgbAccordionModule } from "@ng-bootstrap/ng-bootstrap";

import { RegistroComponent } from "./pages/registro/registro.component";
import { RegistroFormComponent } from "./components/registro-form/registro-form.component";
import { RegistroNavbarComponent } from "./components/registro-navbar/registro-navbar.component";
import { RegistroRoutingModule } from "./registro-routing.module";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [RegistroComponent, RegistroFormComponent, RegistroNavbarComponent],
  imports: [CommonModule, NgbModule, RegistroRoutingModule, NgbAccordionModule, ReactiveFormsModule],
})
export class RegistroModule {}
