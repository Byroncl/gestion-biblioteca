import { Component, OnInit } from "@angular/core";

interface Libro {
  id: number;
  titulo: string;
  autor: string;
  descripcion: string;
  imagen: string;
}

@Component({
  selector: "app-home-content",
  templateUrl: "./home-content.component.html",
  styleUrls: ["./home-content.component.scss"],
})
export class HomeContentComponent implements OnInit {
  libros: Libro[] = [];

  ngOnInit(): void {
    this.libros = JSON.parse(localStorage.getItem("libros") || "[]");
  }
}
