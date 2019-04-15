import { Component } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  item = {
    src: "http://img.europapress.es/fotoweb/fotonoticia_20161129104141_640.jpg",
    alt: "Obi Wan Kenobi"
  };

  funcionPrueba () {
    this.item = 3;
  }
  funcionPrueba2 (): number {
    let numero: number;
    numero = 3;
    return numero;
  }
}
