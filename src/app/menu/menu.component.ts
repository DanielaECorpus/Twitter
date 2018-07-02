import { Router } from '@angular/router';
import { AuthenticationService } from './../authentication.service';
import { UsersService } from './../users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(    public usersFirebaseDatabase: UsersService,
    public authenticationService: AuthenticationService,
    public router: Router) { }

  ngOnInit() {
    this.checkSesion();
  }

  checkSesion() {
    const stream = this.authenticationService.getStatus();
    stream.subscribe((result) => {
      console.log(result);
      if (result === null) {
        alert('Sesión Expirada, Por Favor Ingrese de Nuevo sus Credenciales');
        this.router.navigate(['/dashboard-login-p']);
      }
      else {
        // localStorage.setItem('uid', result.uid);
      }
    });
  }

  //para cerrar sesion
  logOut() {
    //llamamos el metodo que esta en el authentication service 
    this.authenticationService.logOut();
    //navegamos hacia login al cerrar sesion
    this.router.navigate(['dashboard-login-p']);
  }

}
