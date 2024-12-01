import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-administrador-usuario-filtro",
  templateUrl: "./administrador-usuario-filtro.component.html",
  styleUrls: ["./administrador-usuario-filtro.component.scss"],
})
export class AdministradorUsuarioFiltroComponent {
  criterio: any = {};
  aplicarFiltro() {
    this.filtroAplicado.emit(this.criterio);
  }

  @Output() filtroAplicado = new EventEmitter<any>();

  emitirFiltro() {
    this.filtroAplicado.emit(this.criterio);
  }
}
