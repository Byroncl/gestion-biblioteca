import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgbAccordionModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from "@angular/forms";

import { LoginComponent } from "./pages/login/login.component";

import { LoginRoutingModule } from "./login.routing.module";
import { LoginFormComponent } from "./components/login-form/login-form.component";
import { LoginNavbarComponent } from "./components/login-navbar/login-navbar.component";

@NgModule({
  declarations: [LoginComponent, LoginFormComponent, LoginNavbarComponent],
  imports: [CommonModule, NgbModule, LoginRoutingModule, NgbAccordionModule, FormsModule],
})
export class LoginModule {}
