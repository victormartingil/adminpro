import { Injectable, Input, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  ajustes: Ajustes = {
    temaUrl: 'assets/css/colors/default.css',
    tema: 'green-dark',
    link: 'link8'
  };

  constructor( @Inject(DOCUMENT) private document ) {
    this.cargarAjustes(); // app.component.ts lo inicializa en su constructor, de modo que se ejecuta esto al inicar el app.component.ts
  }

  cargarAjustes() {
    if (localStorage.getItem('ajustes')){
      this.ajustes = JSON.parse(localStorage.getItem('ajustes'));
    }
    this.aplicarTema(this.ajustes.tema, this.ajustes.link);
  }

  aplicarTema(tema: string, link: string){
    const url = `assets/css/colors/${tema}.css`;
    this.document.getElementById('tema').setAttribute('href', url);

    // Aplicamos Check
    this.cambiarCheck(this.ajustes.link);

    // Guardar nuevos ajustes en localStorage
    this.ajustes.tema = tema;
    this.ajustes.temaUrl = url;
    this.ajustes.link = link;
    this.guardarAjustes();
  }

  guardarAjustes(){
    localStorage.setItem('ajustes', JSON.stringify(this.ajustes));
  }

  cambiarCheck(link: any) {

    const selectores: any = document.getElementsByClassName('selector');

    const tema = this.ajustes.tema;

    for (const selector of selectores) {

      if ( selector.getAttribute('data-theme') === tema){
        selector.classList.add('working');
        break;
      }
      // selector.classList.remove('working');
    }
  }
}

interface Ajustes {
  temaUrl: string;
  tema: string;
  link: string;
}
