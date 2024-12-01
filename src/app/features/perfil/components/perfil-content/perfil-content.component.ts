import { Component, OnInit } from "@angular/core";

interface Usuario {
  id: number;
  nombre: string;
  apellido: string;
  correo: string;
  facultad: string;
  carrera: string;
  semestre: number;
  telefono: string;
  foto: string;
}

interface Libro {
  id: number;
  titulo: string;
  autor: string;
  descripcion: string;
  imagen: string;
}

@Component({
  selector: "app-perfil-content",
  templateUrl: "./perfil-content.component.html",
  styleUrls: ["./perfil-content.component.scss"],
})
export class PerfilContentComponent implements OnInit {
  usuario: Usuario = {
    id: 0,
    nombre: "",
    apellido: "",
    correo: "",
    facultad: "",
    carrera: "",
    semestre: 0,
    telefono: "",
    foto: "",
  };
  libros: Libro[] = [];
  editMode: boolean = false;

  ngOnInit(): void {
    const usuarioSesion = JSON.parse(
      localStorage.getItem("usuarioSesion") || "{}"
    );
    if (Object.keys(usuarioSesion).length > 0) {
      this.usuario = usuarioSesion;
    }
    this.libros = JSON.parse(localStorage.getItem("libros") || "[]");
  }

  toggleEditMode() {
    this.editMode = !this.editMode;
  }

  saveChanges() {
    if (this.usuario) {
      // Actualizar el usuario en la lista de usuarios
      const usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");
      const index = usuarios.findIndex(
        (u: Usuario) => u.id === this.usuario.id
      );
      if (index !== -1) {
        usuarios[index] = this.usuario;
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
      }

      // Actualizar el usuario en la sesión
      localStorage.setItem("usuarioSesion", JSON.stringify(this.usuario));
      this.editMode = false;
    }
  }

  onFileChange(event: any) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        if (this.usuario) {
          this.usuario.foto = reader.result as string;
        }
      };
    }
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
