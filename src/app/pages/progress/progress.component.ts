import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: [
  ]
})
export class ProgressComponent implements OnInit {

  progreso1: number = 10;
  progreso2: number = 90;

  variableTitulo: string = 'Este es el título desde la variable';
  variableProgreso: number = 10;

  constructor() { }

  ngOnInit(): void {
  }

  actualizarProgreso1( event: number){
    this.progreso1 = event;
  }

}
