import { Injectable } from "@angular/core";
import usuarios from "./json/usuario.json"

@Injectable({
  providedIn: "root",
})
export class AuthService {
  login(correo: string, contrasena: string): string | null {
    const usuario = usuarios.find(
      (user) => user.correo === correo && user.contrasena === contrasena
    );

    // Retorna el rol sin redirigir
    return usuario ? usuario.rol : null;
  }
}
