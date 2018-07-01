import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';
//modal
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-dashboard-login-p',
  templateUrl: './dashboard-login-p.component.html',
  styleUrls: ['./dashboard-login-p.component.css']
})
export class DashboardLoginPComponent implements OnInit {

  //variables registro
  nombre:string;
  apellido:string;
  correoR:string;
  contra:string;
  avatar:string;
  username:string;

  //variables login
  correo:string;
  pass:string;
//para guardar el id que se crea cuando se registra el usuario
registerUId:any;
//navbar
nav:any;

  constructor(
    public authenticationService:AuthenticationService,
    public userFirebaseService:UsersService,
    //para navegar hacia otro componente
    public router:Router,
    //modal
    private modalService: NgbModal
  ) { 

    ///para ocultar el navbar del login
    const pagina = window.location.href;
   console.log(pagina);
   if ( pagina === 'http://localhost:4200/'||pagina === 'http://localhost:4200/dashboard-login-p' ) {
    this.nav = document.getElementById('nav');
    this.nav.style.display = 'none';
   }
  }

  //modal
  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  //metodo para loguarse
  login(){
    //llamamos el metodo que esta en el servicio y le damos los parametros
    const promise=this.authenticationService.emailLogin(this.correo,this.pass);
    promise.then((data)=>{
      alert('Logueado con exito');
      console.log(data);
      //navegamos hacia home
     this.router.navigate(['feed']); 
    }).catch((error)=>{
      alert('Ocurrio un error');
      console.log(error);
    });
  }

register(){
  const promise=this.authenticationService.emailRegistration(this.correoR,this.contra);
    promise.then((data)=>{
      alert('Usuario registrado');
      //mostramos la info que regresa el registro
     // console.log(data);
      //leasignamos el valor del uid que se genera a la variable creada
      this.registerUId=data.user.uid;
      //llamamos el metodo de registro creado y le enviamos el id generado en el registro
      //this.insertOnDatabase(this.registerUId);
     // console.log(this.registerUId);
     debugger;
      const user={
        user_id:this.registerUId,
        name:this.nombre,
        apellido:this.apellido,
        correo:this.correoR,
        pass:this.contra,
        avatar:this.avatar,
        userName:this.username
        //userName:'@'+this.username
      } ;
      //enviamos el objeto al metodo que esta en el servicio
      const promise1= this.userFirebaseService.createUser(user);
      promise1.then((data)=>{
        console.log(data);
      }).catch((error)=>{
        console.log('error', error);
      });
    }).catch((error)=>{
      alert('Hubo un error');
      console.log(error);
    });

    
}


  ngOnInit() {
  }

}
