import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    //variable de para firebase
    public angularFireDatabase:AngularFireDatabase,
    //variable del servicio de autenticacion de firebase
    public angularFireAuth:AngularFireAuth
  ) { }

  //metodo de regitro 
  emailRegistration(email,password){
    //referenciando a la autenticacion de firebase mediante email y password
    return this.angularFireAuth.auth.createUserWithEmailAndPassword(email,password);
  }

  //metodo de login
  emailLogin(email,password){
     //referenciando a la autenticacion de firebase mediante email y password
    return this.angularFireAuth.auth.signInWithEmailAndPassword(email,password);
  }

  //metodo para devolver el usuario que esta logueado y regresa un string
  getStatus(){
    return this.angularFireAuth.authState;
  }

  //metodo para cerrar sesion en firebase
  logOut(){
    //borra la informacion local del usuario loguado y notifica a la bd firebase para que cambie el estado de loguado
    return this.angularFireAuth.auth.signOut();
  }
}
