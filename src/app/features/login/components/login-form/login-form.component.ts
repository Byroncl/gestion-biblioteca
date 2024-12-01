import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-login-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.scss"],
})
export class LoginFormComponent {
  correo: string = "";
  contrasena: string = "";
  mensaje: string = "";
  mensajeTipo: string = ""; // 'success' o 'error'

  constructor(private router: Router) {
    this.crearAdminPorDefecto();
  }

  crearAdminPorDefecto() {
    const usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");
    const adminExistente = usuarios.find(
      (user: any) => user.correo === "sekai@admin.com"
    );
    if (!adminExistente) {
      const admin = {
        id: usuarios.length
          ? Math.max(...usuarios.map((u: any) => u.id)) + 1
          : 1,
        nombre: "Admin",
        apellido: "User",
        correo: "sekai@admin.com",
        contrasena: "123456",
        rol: "administrador",
      };
      usuarios.push(admin);
      localStorage.setItem("usuarios", JSON.stringify(usuarios));
    }
  }

  onLogin() {
    this.mensaje = "";
    this.mensajeTipo = "";

    const usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");
    const usuario = usuarios.find(
      (user: any) =>
        user.correo === this.correo && user.contrasena === this.contrasena
    );

    if (usuario) {
      this.mensaje = `Inicio de sesión exitoso como ${usuario.rol}`;
      this.mensajeTipo = "success";
      localStorage.setItem("usuarioSesion", JSON.stringify(usuario));

      setTimeout(() => {
        if (usuario.rol === "administrador") {
          this.router.navigate(["/administrador-usuario"]);
        } else if (usuario.rol === "usuario") {
          this.router.navigate(["/perfil"]);
        }
      }, 2000);
    } else {
      this.mensaje = "Correo o contraseña incorrectos";
      this.mensajeTipo = "error";
    }
  }
  navigateToRegistro() {
    this.router.navigate(["/registro"]);
  }
}
