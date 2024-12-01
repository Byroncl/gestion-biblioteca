import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

interface Libro {
  id: number;
  titulo: string;
  autor: string;
  descripcion: string;
  imagen: string;
}

@Component({
  selector: "app-administrador-libros-table",
  templateUrl: "./administrador-libros-table.component.html",
  styleUrls: ["./administrador-libros-table.component.scss"],
})
export class AdministradorLibrosTableComponent implements OnInit {
  libros: Libro[] = [];
  librosFiltrados: Libro[] = [];
  nuevoLibroForm: FormGroup;
  libroEditandoForm: FormGroup;
  criterio: any = {};

  constructor(private modalService: NgbModal, private fb: FormBuilder) {
    this.nuevoLibroForm = this.fb.group({
      titulo: ["", [Validators.required, Validators.minLength(2)]],
      autor: ["", [Validators.required, Validators.minLength(2)]],
      descripcion: ["", [Validators.required, Validators.minLength(10)]],
      imagen: ["", Validators.required],
    });

    this.libroEditandoForm = this.fb.group({
      id: [0],
      titulo: ["", [Validators.required, Validators.minLength(2)]],
      autor: ["", [Validators.required, Validators.minLength(2)]],
      descripcion: ["", [Validators.required, Validators.minLength(10)]],
      imagen: ["", Validators.required],
    });
  }

  ngOnInit() {
    this.cargarLibros();
  }

  cargarLibros() {
    const libros = JSON.parse(localStorage.getItem("libros") || "[]");
    this.libros = libros;
    this.librosFiltrados = [...this.libros];
  }

  abrirModal(content: any) {
    this.modalService.open(content, { ariaLabelledBy: "modal-basic-title" });
  }

  agregarLibro() {
    if (this.nuevoLibroForm.valid) {
      const nuevoId = this.libros.length
        ? Math.max(...this.libros.map((libro) => libro.id)) + 1
        : 1;
      const nuevoLibro = { ...this.nuevoLibroForm.value, id: nuevoId };
      this.libros.push(nuevoLibro);
      localStorage.setItem("libros", JSON.stringify(this.libros));
      this.librosFiltrados = [...this.libros];
      this.nuevoLibroForm.reset();
      this.modalService.dismissAll();
    } else {
      this.nuevoLibroForm.markAllAsTouched();
    }
  }

  editarLibro(libro: Libro, content: any) {
    this.libroEditandoForm.setValue({
      id: libro.id,
      titulo: libro.titulo,
      autor: libro.autor,
      descripcion: libro.descripcion,
      imagen: libro.imagen,
    });
    this.modalService.open(content, { ariaLabelledBy: "modal-basic-title" });
  }

  guardarEdicion() {
    if (this.libroEditandoForm.valid) {
      const index = this.libros.findIndex(
        (libro) => libro.id === this.libroEditandoForm.value.id
      );
      if (index > -1) {
        this.libros[index] = { ...this.libroEditandoForm.value };
        localStorage.setItem("libros", JSON.stringify(this.libros));
        this.librosFiltrados = [...this.libros];
        this.libroEditandoForm.reset();
        this.modalService.dismissAll();
      }
    } else {
      this.libroEditandoForm.markAllAsTouched();
    }
  }

  cancelarEdicion() {
    this.libroEditandoForm.reset();
    this.modalService.dismissAll();
  }

  eliminarLibro(id: number) {
    this.libros = this.libros.filter((libro) => libro.id !== id);
    localStorage.setItem("libros", JSON.stringify(this.libros));
    this.librosFiltrados = [...this.libros];
  }

  aplicarFiltro() {
    this.librosFiltrados = this.libros.filter((libro) => {
      return Object.keys(this.criterio).every((key) => {
        return this.criterio[key]
          ? (libro[key as keyof Libro] as string)
              .toLowerCase()
              .includes((this.criterio[key] as string).toLowerCase())
          : true;
      });
    });
  }

  onFileChange(event: any, form: FormGroup) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        form.patchValue({
          imagen: reader.result as string,
        });
      };
    }
  }
}
