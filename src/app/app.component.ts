import { Component, Inject, PLATFORM_ID } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "gestión inventario mobiliario";
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit() {
    if (this.isBrowser) {
      const script = document.createElement("script");
      script.src =
        "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js";
      script.integrity =
        "sha384-Tfg9oXB51Hgr6xYcfsrWgfiT/zAIb6Z6doY1b5VcbUEp3uvf4idIS+65Vkp2K+60";
      script.crossOrigin = "anonymous";
      document.body.appendChild(script);
    }
  }
}
