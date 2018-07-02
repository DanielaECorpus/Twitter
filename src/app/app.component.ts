import { Component } from '@angular/core';
import { UsersService } from './users.service';
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(
    public usersFirebaseDatabase:UsersService,
    public authenticationService:AuthenticationService,
    public router:Router
  ){

    
  }

  //para cerrar sesion
  logOut(){
    //llamamos el metodo que esta en el authentication service 
    this.authenticationService.logOut();
     //navegamos hacia login al cerrar sesion
     this.router.navigate(['dashboard-login-p']);
  }
}
