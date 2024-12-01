import { Component, OnInit } from "@angular/core";
import jsPDF from "jspdf";

interface Libro {
  id: number;
  titulo: string;
  autor: string;
  descripcion: string;
  imagen: string;
}

@Component({
  selector: "app-perfil-favoritos-content",
  templateUrl: "./perfil-favoritos-content.component.html",
  styleUrls: ["./perfil-favoritos-content.component.scss"],
})
export class PerfilFavoritosContentComponent implements OnInit {
  libros: Libro[] = [];

  ngOnInit(): void {
    const usuarioSesion = JSON.parse(
      localStorage.getItem("usuarioSesion") || "{}"
    );
    this.libros = JSON.parse(
      localStorage.getItem(`favoritos_${usuarioSesion.id}`) || "[]"
    );
  }

  eliminarDeFavoritos(libro: Libro) {
    const usuarioSesion = JSON.parse(
      localStorage.getItem("usuarioSesion") || "{}"
    );
    this.libros = this.libros.filter((l) => l.id !== libro.id);
    localStorage.setItem(
      `favoritos_${usuarioSesion.id}`,
      JSON.stringify(this.libros)
    );
  }

  imprimirLibro(libro: Libro) {
    const doc = new jsPDF();
    doc.text(`Título: ${libro.titulo}`, 10, 10);
    doc.text(`Autor: ${libro.autor}`, 10, 20);
    doc.text(`Descripción: ${libro.descripcion}`, 10, 30);
    doc.save(`${libro.titulo}.pdf`);
  }
}
