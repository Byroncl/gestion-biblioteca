import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-administrador-usuario-content",
  templateUrl: "./administrador-usuario-content.component.html",
  styleUrls: ["./administrador-usuario-content.component.scss"],
})
export class AdministradorUsuarioContentComponent implements OnInit {
  usuarios: any[] = [];
  usuariosFiltrados: any[] = [];
  nuevoUsuarioForm: FormGroup;
  usuarioEditandoForm: FormGroup;

  constructor(private modalService: NgbModal, private fb: FormBuilder) {
    this.nuevoUsuarioForm = this.fb.group({
      nombre: ["", [Validators.required, Validators.minLength(2)]],
      correo: ["", [Validators.required, Validators.email]],
      contrasena: ["", [Validators.required, Validators.minLength(6)]],
      rol: ["usuario", Validators.required],
    });

    this.usuarioEditandoForm = this.fb.group({
      nombre: ["", [Validators.required, Validators.minLength(2)]],
      correo: ["", [Validators.required, Validators.email]],
      contrasena: ["", [Validators.required, Validators.minLength(6)]],
      rol: ["usuario", Validators.required],
    });
  }

  ngOnInit() {
    this.cargarUsuarios();
  }

  cargarUsuarios() {
    const usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");
    this.usuarios = usuarios;
    this.usuariosFiltrados = [...this.usuarios];
  }

  aplicarFiltro(criterio: any) {
    this.usuariosFiltrados = this.usuarios.filter((item) => {
      return Object.keys(criterio).every((key) => {
        return criterio[key]
          ? item[key]
              .toString()
              .toLowerCase()
              .includes(criterio[key].toLowerCase())
          : true;
      });
    });
  }

  abrirModal(content: any) {
    this.modalService.open(content, { ariaLabelledBy: "modal-basic-title" });
  }

  agregarUsuario() {
    if (this.nuevoUsuarioForm.valid) {
      this.usuarios.push({ ...this.nuevoUsuarioForm.value });
      localStorage.setItem("usuarios", JSON.stringify(this.usuarios));
      this.usuariosFiltrados = [...this.usuarios];
      this.nuevoUsuarioForm.reset({ rol: "usuario" });
      this.modalService.dismissAll();
    } else {
      this.nuevoUsuarioForm.markAllAsTouched();
    }
  }

  editarUsuario(usuario: any, content: any) {
    this.usuarioEditandoForm.setValue({
      nombre: usuario.nombre,
      correo: usuario.correo,
      contrasena: usuario.contrasena,
      rol: usuario.rol,
    });
    this.modalService.open(content, { ariaLabelledBy: "modal-basic-title" });
  }

  guardarEdicion() {
    if (this.usuarioEditandoForm.valid) {
      const index = this.usuarios.findIndex(
        (usuario) => usuario.correo === this.usuarioEditandoForm.value.correo
      );
      if (index > -1) {
        this.usuarios[index] = { ...this.usuarioEditandoForm.value };
        localStorage.setItem("usuarios", JSON.stringify(this.usuarios));
        this.usuariosFiltrados = [...this.usuarios];
        this.usuarioEditandoForm.reset();
        this.modalService.dismissAll();
      }
    } else {
      this.usuarioEditandoForm.markAllAsTouched();
    }
  }

  cancelarEdicion() {
    this.usuarioEditandoForm.reset();
    this.modalService.dismissAll();
  }

  eliminarUsuario(correo: string) {
    this.usuarios = this.usuarios.filter(
      (usuario) => usuario.correo !== correo
    );
    localStorage.setItem("usuarios", JSON.stringify(this.usuarios));
    this.usuariosFiltrados = [...this.usuarios];
  }
}
