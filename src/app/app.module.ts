import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
//importamos FormsModule para que funcionara el ngModule
import {FormsModule} from '@angular/forms';
//para el modal
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { DashboardLoginPComponent } from './dashboard-login-p/dashboard-login-p.component';
import { DashboardRegistroComponent } from './dashboard-registro/dashboard-registro.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { FeedComponent } from './feed/feed.component';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { PerfilComponent } from './perfil/perfil.component';
import { Routes,RouterModule} from '@angular/router';

const appRoutes:Routes=[
  {path:'',component:DashboardLoginPComponent},
  {path:'dashboard-login-p',component:DashboardLoginPComponent},
  {path:'dashboard-registro',component:DashboardRegistroComponent},
  {path:'usuario',component:UsuarioComponent},
  {path:'feed',component:FeedComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    FeedComponent,
    PerfilComponent,
    DashboardLoginPComponent,
    DashboardRegistroComponent,
    UsuarioComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule, 
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    //para el modal
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
