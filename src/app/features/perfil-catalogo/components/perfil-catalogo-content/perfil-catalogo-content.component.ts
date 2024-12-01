import { Component, OnInit } from "@angular/core";

interface Libro {
  id: number;
  titulo: string;
  autor: string;
  descripcion: string;
  imagen: string;
}

interface Historial {
  id: number;
  busqueda: string;
  fecha: string;
}

@Component({
  selector: "app-perfil-catalogo-content",
  templateUrl: "./perfil-catalogo-content.component.html",
  styleUrls: ["./perfil-catalogo-content.component.scss"],
})
export class PerfilCatalogoContentComponent implements OnInit {
  libros: Libro[] = [];
  filteredLibros: Libro[] = [];
  searchText: string = "";

  ngOnInit() {
    this.libros = JSON.parse(localStorage.getItem("libros") || "[]");
    this.filteredLibros = this.libros;
  }

  filterLibros() {
    this.filteredLibros = this.libros.filter(
      (libro) =>
        libro.titulo.toLowerCase().includes(this.searchText.toLowerCase()) ||
        libro.autor.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  buscar() {
    this.filterLibros();
    const usuarioSesion = JSON.parse(
      localStorage.getItem("usuarioSesion") || "{}"
    );
    const historial: Historial[] = JSON.parse(
      localStorage.getItem(`historial_${usuarioSesion.id}`) || "[]"
    );
    const nuevaBusqueda: Historial = {
      id: historial.length ? Math.max(...historial.map((h) => h.id)) + 1 : 1,
      busqueda: this.searchText,
      fecha: new Date().toLocaleString(),
    };
    historial.push(nuevaBusqueda);
    localStorage.setItem(
      `historial_${usuarioSesion.id}`,
      JSON.stringify(historial)
    );
  }

  agregarAFavoritos(libro: Libro) {
    const usuarioSesion = JSON.parse(
      localStorage.getItem("usuarioSesion") || "{}"
    );
    let favoritos = JSON.parse(
      localStorage.getItem(`favoritos_${usuarioSesion.id}`) || "[]"
    );
    favoritos.push(libro);
    localStorage.setItem(
      `favoritos_${usuarioSesion.id}`,
      JSON.stringify(favoritos)
    );

    // Mostrar alerta
    alert(`El libro "${libro.titulo}" ha sido agregado a favoritos.`);

    // Actualizar notificaciones
    const notificaciones = JSON.parse(
      localStorage.getItem(`notificaciones_${usuarioSesion.id}`) || "[]"
    );
    const nuevaNotificacion = {
      id: notificaciones.length
        ? Math.max(...notificaciones.map((n: any) => n.id)) + 1
        : 1,
      titulo: "Libro agregado a favoritos",
      descripcion: `El libro "${libro.titulo}" ha sido agregado a tus favoritos.`,
    };
    notificaciones.push(nuevaNotificacion);
    localStorage.setItem(
      `notificaciones_${usuarioSesion.id}`,
      JSON.stringify(notificaciones)
    );
  }
}
