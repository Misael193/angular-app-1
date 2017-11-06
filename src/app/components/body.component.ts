import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: 'body.component.html'
})
export class BodyComponent {

  mostrar:boolean = false;

  frase:any = {
    mensaje: "La unica diferencia entre un loco y yo es que yo no estoy loco",
    autor: "Salvador Dalí"
  }

  artistas:string[] = ["Salvador Dalí", "Diego Rivera", "Vincent Van Gogh", "Remedios Varo"];

}
