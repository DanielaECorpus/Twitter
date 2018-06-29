import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
<<<<<<< HEAD
import { DashboardLoginPComponent } from './dashboard-login-p/dashboard-login-p.component';
import { DashboardRegistroComponent } from './dashboard-registro/dashboard-registro.component';
=======
import { UsuarioComponent } from './usuario/usuario.component';
>>>>>>> 199015726030e13292eb021f21d40a5722fe8aa9

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    DashboardLoginPComponent,
    DashboardRegistroComponent
=======
    UsuarioComponent
>>>>>>> 199015726030e13292eb021f21d40a5722fe8aa9
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
