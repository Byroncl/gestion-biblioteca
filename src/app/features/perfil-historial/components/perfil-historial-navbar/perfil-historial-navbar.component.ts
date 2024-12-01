import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

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

interface Notificacion {
  id: number;
  titulo: string;
  descripcion: string;
}

@Component({
  selector: "app-perfil-historial-navbar",
  templateUrl: "./perfil-historial-navbar.component.html",
  styleUrl: "./perfil-historial-navbar.component.scss",
})
export class PerfilHistorialNavbarComponent implements OnInit {
  menuVisible = false;
  notificationsVisible = false;
  usuario: Usuario | undefined;
  notificaciones: Notificacion[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    // Cargar los datos del usuario y las notificaciones del localStorage
    const usuarioSesion = JSON.parse(
      localStorage.getItem("usuarioSesion") || "{}"
    );
    this.usuario = usuarioSesion;
    this.notificaciones = JSON.parse(
      localStorage.getItem(`notificaciones_${usuarioSesion.id}`) || "[]"
    );
  }

  toggleMenu() {
    this.menuVisible = !this.menuVisible;
  }

  toggleNotifications() {
    this.notificationsVisible = !this.notificationsVisible;
  }

  toggleSearch() {
    // Lógica para mostrar u ocultar la búsqueda
  }

  navigateTo(route: string) {
    this.router.navigate([`/${route}`]);
    this.menuVisible = false; // Cerrar el menú después de la navegación
  }
}
