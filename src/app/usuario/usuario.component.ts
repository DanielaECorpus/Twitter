import { Component, OnInit } from '@angular/core';
import { TweetService } from '../tweet.service';
import { AuthenticationService } from '../authentication.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
//var para guardar lo que regresa status
userlog:any;
//var para guardar el uid que obtengo usando la var anterior
uidUserLog:any;
tweetsUser:any;
objetoUsuarioL:any;
nombre:any;
username:any;

  constructor(
    public tweetService:TweetService,
    public authenticationService:AuthenticationService,
    public userFirebaseService:UsersService
  ) { 

    const stream1=this.authenticationService.getStatus();
    stream1.subscribe((result)=>{
      this.userlog=result;
      //console.log(this.userlog);
     // console.log(this.userlog.uid);
     // debugger;
      this.uidUserLog=this.userlog.uid;

      //MOSTRAR INFO DEL USUARIO
      const stream2=this.userFirebaseService.getUserByUId(this.uidUserLog);
      stream2.valueChanges().subscribe((result)=>{
        //para obtener el obejto usuario
        this.objetoUsuarioL=result;
        //console.log(result);
       // console.log(this.objetoUsuarioL.name);
        this.nombre=this.objetoUsuarioL.name+' '+this.objetoUsuarioL.apellido ;
        this.username='@'+this.objetoUsuarioL.userName;
      });

      //para traer los tweets del usuario
      const stream= this.tweetService.getTweetByUId(this.uidUserLog);
      //console.log(this.tweetsUser);
     stream.valueChanges().subscribe((result) =>{
        //asignamos el result a la variable users para desplegar la en el componente
        this.tweetsUser=result;
        console.log(result);
      });
      });
    }

  ngOnInit() {
  }

}
