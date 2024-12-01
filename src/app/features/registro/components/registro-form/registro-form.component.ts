import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-registro-form",
  templateUrl: "./registro-form.component.html",
  styleUrls: ["./registro-form.component.scss"],
})
export class RegistroFormComponent {
  registroForm: FormGroup;
  mensaje: string = "";
  mensajeTipo: string = ""; // 'success' o 'error'

  constructor(private fb: FormBuilder, private router: Router) {
    this.registroForm = this.fb.group(
      {
        nombre: ["", [Validators.required, Validators.minLength(2)]],
        apellido: ["", [Validators.required, Validators.minLength(2)]],
        correo: ["", [Validators.required, Validators.email]],
        contrasena: ["", [Validators.required, Validators.minLength(6)]],
        confirmarContrasena: ["", Validators.required],
        facultad: ["", Validators.required],
        carrera: ["", Validators.required],
        semestre: ["", Validators.required],
        telefono: ["", Validators.required],
      },
      {
        validator: this.passwordMatchValidator,
      }
    );
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get("contrasena")?.value;
    const confirmPassword = form.get("confirmarContrasena")?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }

  onSubmit() {
    if (this.registroForm.valid) {
      const usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");
      const nuevoUsuario = {
        id: usuarios.length
          ? Math.max(...usuarios.map((u: any) => u.id)) + 1
          : 1,
        nombre: this.registroForm.value.nombre,
        apellido: this.registroForm.value.apellido,
        correo: this.registroForm.value.correo,
        contrasena: this.registroForm.value.contrasena,
        facultad: this.registroForm.value.facultad,
        carrera: this.registroForm.value.carrera,
        semestre: this.registroForm.value.semestre,
        telefono: this.registroForm.value.telefono,
        foto: "",
        rol: "usuario",
      };
      usuarios.push(nuevoUsuario);
      localStorage.setItem("usuarios", JSON.stringify(usuarios));
      this.mensaje = "Usuario registrado exitosamente";
      this.mensajeTipo = "success";
      this.registroForm.reset();
    } else {
      this.mensaje = "Formulario inválido. Por favor, revisa los campos.";
      this.mensajeTipo = "error";
      this.registroForm.markAllAsTouched();
    }
  }

  navigateToLogin() {
    this.router.navigate(["/login"]);
  }
}
