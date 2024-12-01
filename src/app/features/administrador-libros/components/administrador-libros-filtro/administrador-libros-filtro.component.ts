import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-administrador-libros-filtro",
  templateUrl: "./administrador-libros-filtro.component.html",
  styleUrls: ["./administrador-libros-filtro.component.scss"],
})
export class AdministradorLibrosFiltroComponent {
  criterio: any = {};
  @Output() filtroAplicado = new EventEmitter<any>();

  emitirFiltro() {
    this.filtroAplicado.emit(this.criterio);
  }
}
