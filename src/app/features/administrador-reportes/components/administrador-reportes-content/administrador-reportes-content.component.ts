import { Component, OnInit } from "@angular/core";
import { ChartData, ChartOptions } from "chart.js";

@Component({
  selector: "app-administrador-reportes-content",
  templateUrl: "./administrador-reportes-content.component.html",
  styleUrls: ["./administrador-reportes-content.component.scss"],
})
export class AdministradorReportesContentComponent implements OnInit {
  chartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
    },
  };

  barChartLabels: string[] = [];
  barChartData: ChartData<"bar"> = {
    labels: this.barChartLabels,
    datasets: [
      {
        data: [],
        label: "Libros",
      },
    ],
  };

  lineChartLabels: string[] = [];
  lineChartData: ChartData<"line"> = {
    labels: this.lineChartLabels,
    datasets: [
      {
        data: [],
        label: "Usuarios por Semestre",
      },
    ],
  };

  ngOnInit(): void {
    this.prepareBarChartData();
    this.prepareLineChartData();
  }

  prepareBarChartData(): void {
    const libros = JSON.parse(localStorage.getItem("libros") || "[]");
    const librosPorAutor: { [autor: string]: number } = {};

    libros.forEach((libro: any) => {
      librosPorAutor[libro.autor] = (librosPorAutor[libro.autor] || 0) + 1;
    });

    this.barChartLabels = Object.keys(librosPorAutor);
    this.barChartData = {
      labels: this.barChartLabels,
      datasets: [
        {
          data: Object.values(librosPorAutor),
          label: "Libros",
        },
      ],
    };
  }

  prepareLineChartData(): void {
    const usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");
    const semestresDistribucion: { [semestre: number]: number } = {};

    usuarios.forEach((usuario: any) => {
      semestresDistribucion[usuario.semestre] =
        (semestresDistribucion[usuario.semestre] || 0) + 1;
    });

    this.lineChartLabels = Object.keys(semestresDistribucion).map(
      (key) => `Semestre ${key}`
    );
    this.lineChartData = {
      labels: this.lineChartLabels,
      datasets: [
        {
          data: Object.values(semestresDistribucion),
          label: "Usuarios por Semestre",
        },
      ],
    };
  }
}
