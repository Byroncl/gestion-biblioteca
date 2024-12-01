import { Component, OnInit } from "@angular/core";

interface Libro {
  id: number;
  titulo: string;
  autor: string;
  descripcion: string;
  imagen: string;
}

@Component({
  selector: "app-perfil-recomendaciones-content",
  templateUrl: "./perfil-recomendaciones-content.component.html",
  styleUrls: ["./perfil-recomendaciones-content.component.scss"],
})
export class PerfilRecomendacionesContentComponent implements OnInit {
  libros: Libro[] = [];

  ngOnInit(): void {
    const todosLibros = JSON.parse(localStorage.getItem("libros") || "[]");
    this.libros = this.getRandomBooks(todosLibros, 5); // Obtener 5 libros aleatorios
  }

  getRandomBooks(libros: Libro[], count: number): Libro[] {
    const shuffled = libros.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
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
