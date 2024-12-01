import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgbModule, NgbCarouselModule } from "@ng-bootstrap/ng-bootstrap";
import { NgbAccordionModule } from "@ng-bootstrap/ng-bootstrap";
import { NgChartsModule } from "ng2-charts";
import { AdministradorReportesComponent } from "./pages/administrador-reportes/administrador-reportes.component";
import { AdministradorReportesRoutingModule } from "./administrador-reportes-routing.module";
import { FormsModule } from "@angular/forms";
import { AdministradorReportesContentComponent } from "./components/administrador-reportes-content/administrador-reportes-content.component";
import { AdministradorReportesSidebarComponent } from "./components/administrador-reportes-sidebar/administrador-reportes-sidebar.component";

@NgModule({
  declarations: [
    AdministradorReportesComponent,
    AdministradorReportesContentComponent,
    AdministradorReportesSidebarComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    AdministradorReportesRoutingModule,
    NgbAccordionModule,
    FormsModule,
    NgbCarouselModule,
    NgChartsModule,
  ],
})
export class AdministradorReportesModule {}
