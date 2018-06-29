import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardLoginPComponent } from './dashboard-login-p/dashboard-login-p.component';
import { DashboardRegistroComponent } from './dashboard-registro/dashboard-registro.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardLoginPComponent,
    DashboardRegistroComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
