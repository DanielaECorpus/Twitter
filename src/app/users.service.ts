import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    public angularFireDatabase:AngularFireDatabase
  ) { }


  //metodo agregar
  createUser(user){
    //a que nodo, el id que generaremos para ese usuario y se lo asignamos a la variable user
return this.angularFireDatabase.object('usersT/' + user.user_id).set(user);
}

}
