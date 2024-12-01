import { Component, OnInit } from "@angular/core";
import usuarioData from "../../models/usuario.json";

@Component({
  selector: "app-administrador-usuario",

  templateUrl: "./administrador-usuario.component.html",
  styleUrl: "./administrador-usuario.component.scss",
})
export class AdministradorUsuarioComponent implements OnInit {
  mostrarModal: boolean = false;
  usuario: any[] = usuarioData;
  usuarioFiltrado: any[] = [...this.usuario];

  ngOnInit() {}

  aplicarFiltro(criterio: any) {
    this.usuarioFiltrado = this.usuario.filter((item) => {
      return Object.keys(criterio).every((key) => {
        return criterio[key]
          ? item[key]
              .toString()
              .toLowerCase()
              .includes(criterio[key].toString().toLowerCase())
          : true;
      });
    });
  }
  abrirModal() {
    this.mostrarModal = true;
  }

  cerrarModal() {
    this.mostrarModal = false;
  }
}
