import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-boton-flotante',
  templateUrl: './boton-flotante.component.html',
  styleUrls: ['./boton-flotante.component.css']
})
export class BotonFlotanteComponent {

  @Input() nombreIconoBoton!: string;
  @Output() presionarBoton = new EventEmitter();

  seleccionarBoton() {
    this.presionarBoton.emit();
  }
}
