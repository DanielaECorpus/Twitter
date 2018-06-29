import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//importamos FormsModule para que funcionara el ngModule
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { PerfilComponent } from './perfil/perfil.component';
import { DashboardLoginPComponent } from './dashboard-login-p/dashboard-login-p.component';
import { DashboardRegistroComponent } from './dashboard-registro/dashboard-registro.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { Routes,RouterModule} from '@angular/router';

const appRoutes:Routes=[
  {path:'',component:DashboardLoginPComponent},
  {path:'dashboard-login-p',component:DashboardLoginPComponent},
  {path:'dashboard-registro',component:DashboardRegistroComponent},
  {path:'usuario',component:UsuarioComponent},
  {path:'perfil',component:PerfilComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    PerfilComponent,
    DashboardLoginPComponent,
    DashboardRegistroComponent,
    UsuarioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
