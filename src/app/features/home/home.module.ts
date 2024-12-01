import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgbModule, NgbCarouselModule } from "@ng-bootstrap/ng-bootstrap";
import { NgbAccordionModule } from "@ng-bootstrap/ng-bootstrap";

import { HomeComponent } from "./pages/home/home.component";
import { HomeNavbarComponent } from "./components/home-navbar/home-navbar.component";
import { HomeContentComponent } from "./components/home-content/home-content.component";
import { HomeRoutingModule } from "./home-routing.module";
import { HomeFooterComponent } from "./components/home-footer/home-footer.component";

@NgModule({
  declarations: [
    HomeComponent,
    HomeNavbarComponent,
    HomeContentComponent,
    HomeFooterComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    HomeRoutingModule,
    NgbAccordionModule,
    NgbCarouselModule,
  ],
})
export class HomeModule {}
