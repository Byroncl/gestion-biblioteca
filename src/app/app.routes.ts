import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "administrador-reportes",
    loadChildren: () =>
      import(
        "./features/administrador-reportes/administrador-reportes.module"
      ).then((m) => m.AdministradorReportesModule),
  },
  {
    path: "administrador-libros",
    loadChildren: () =>
      import(
        "./features/administrador-libros/administrador-libros.module"
      ).then((m) => m.AdministradorLibrosModule),
  },
  {
    path: "administrador-usuario",
    loadChildren: () =>
      import(
        "./features/administrador-usuario/administrador-usuario.module"
      ).then((m) => m.AdministradorUsuarioModule),
  },
  {
    path: "perfil-recomendaciones",
    loadChildren: () =>
      import(
        "./features/perfil-recomendaciones/perfil-recomendaciones.module"
      ).then((m) => m.PerfilRecomendacionesModule),
  },
  {
    path: "perfil-historial",
    loadChildren: () =>
      import("./features/perfil-historial/perfil-historial.module").then(
        (m) => m.PerfilHistorialModule
      ),
  },
  {
    path: "perfil-guardados",
    loadChildren: () =>
      import("./features/perfil-favoritos/perfil-favoritos.module").then(
        (m) => m.PerfilFavoritosModule
      ),
  },
  {
    path: "perfil-catalogo",
    loadChildren: () =>
      import("./features/perfil-catalogo/perfil-catalogo.module").then(
        (m) => m.PerfilCatalogoModule
      ),
  },
  {
    path: "perfil",
    loadChildren: () =>
      import("./features/perfil/perfil.module").then((m) => m.PerfilModule),
  },
  {
    path: "registro",
    loadChildren: () =>
      import("./features/registro/registro.module").then(
        (m) => m.RegistroModule
      ),
  },
  {
    path: "login",
    loadChildren: () =>
      import("./features/login/login.module").then((m) => m.LoginModule),
  },
  {
    path: "",
    loadChildren: () =>
      import("./features/home/home.module").then((m) => m.HomeModule),
  },
  {
    path: "**",
    redirectTo: "",
  },
];
