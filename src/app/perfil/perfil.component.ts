import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  //variables para mostrar info usuario
nombre:string;
apellido:string;
username:string;
email:string;
contra:string;
//var para guardar lo que regresa status
userlog:any;
//var para guardar el uid que obtengo usando la var anterior
uidUserLog:any;
//para guardar el objeto usuario obtendio desde firebase con el servicio 
objetoUsuarioL:any;

  constructor(
    public authenticationService:AuthenticationService,
    public userFirebaseService:UsersService
  ) { 

    //MOSTRAR LA INFO DEL USUARIO LOGUEADO
    //verifico la sesion del usuario logueado y con el iud voy a buscarn en la bd firebase para desplegar la info del usuario
    const stream1=this.authenticationService.getStatus();
    stream1.subscribe((result)=>{
      this.userlog=result;
      console.log(this.userlog);
      console.log(this.userlog.uid);
      debugger;
      this.uidUserLog=this.userlog.uid;

      const stream2=this.userFirebaseService.getUserByUId(this.uidUserLog);
      stream2.valueChanges().subscribe((result)=>{
        //para obtener el obejto usuario
        this.objetoUsuarioL=result;
        console.log(result);
        console.log(this.objetoUsuarioL.name);
        this.nombre=this.objetoUsuarioL.name;
        this.apellido=this.objetoUsuarioL.apellido;
        this.username=this.objetoUsuarioL.userName;
        this.email=this.objetoUsuarioL.correo;
        this.contra=this.objetoUsuarioL.pass;
      });
    });
  }

  updateUser(){
      const user={
        name:this.nombre,
        apellido:this.apellido,
        userName:this.username,
        correo:this.email,
        pass:this.contra,
        user_id:this.uidUserLog
      };
      //insertamos el objeto
      const promise=this.userFirebaseService.editUser(user);
      promise.then(()=>{
        alert('Usuario editado ;)');
      }).catch((error)=>{
        alert('No se pudo editar el usuario');
        console.log(error);
      });
    }

  
  ngOnInit() {
  }

}
