import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {

  @Input() leyenda: string = 'Leyenda';
  @Input() progreso: number = 50;

  @Output() eventoCambioValor: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  cambiarValor(n: number){
    if (   this.progreso >= 100 && n > 0
        || this.progreso <= 0   && n < 0) {
      return;
    }
    this.progreso += n;
    this.eventoCambioValor.emit(this.progreso);
  }

}
