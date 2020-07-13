import { Component, OnInit, Inject, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {

  constructor( public settingService: SettingsService ) { }

  ngOnInit(): void {
  }

  cambiarColor(tema: string, link: any){

    this.settingService.aplicarTema(tema, link);

  }

  // cambiarCheck(link: any){
  //   this.settingService.cambiarCheck(link);
  // }

}
