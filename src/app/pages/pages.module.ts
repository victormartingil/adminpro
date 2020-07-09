import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Routes
import { PagesRoutingModule } from './pages.routes';

// Modules
import { SharedModule } from '../shared/shared.module';


// Components
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';

// Temporal
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';


@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    Graficas1Component,
    ProgressComponent,
    IncrementadorComponent
  ],
  exports: [
    DashboardComponent,
    Graficas1Component,
    ProgressComponent
  ],
  imports: [
    SharedModule,
    PagesRoutingModule,
    FormsModule,
  ]
})
export class PagesModule { }
