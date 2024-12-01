import { Component, OnInit } from "@angular/core";

interface Historial {
  id: number;
  busqueda: string;
  fecha: string;
}

@Component({
  selector: "app-perfil-historial-content",
  templateUrl: "./perfil-historial-content.component.html",
  styleUrls: ["./perfil-historial-content.component.scss"],
})
export class PerfilHistorialContentComponent implements OnInit {
  historial: Historial[] = [];

  ngOnInit() {
    const usuarioSesion = JSON.parse(
      localStorage.getItem("usuarioSesion") || "{}"
    );
    this.historial = JSON.parse(
      localStorage.getItem(`historial_${usuarioSesion.id}`) || "[]"
    );
  }
}
