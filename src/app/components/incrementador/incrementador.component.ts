import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress') txtProgress: ElementRef;

  @Input() leyenda: string = 'Leyenda';
  @Input() progreso: number = 50;

  @Output() eventoCambioValor: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  inputChange(event: number) {

    // const elemHtml: any = document.getElementsByName('progreso')[0];
    // elemHtml.value = this.progreso;

    this.txtProgress.nativeElement.value = this.progreso;

    this.txtProgress.nativeElement.focus();

    if (event >= 100) {
      this.progreso = 100;
    } else if (event <= 0){
      this.progreso = 0;
    } else {
      this.progreso = event;
    }
    this.eventoCambioValor.emit(this.progreso);
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
