import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from 'angularfire2/storage';
import * as $ from 'jquery';
import { TweetService } from '../tweet.service';
import { AuthenticationService } from '../authentication.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  //var para navbar
  nav: any;
  //var fecha y hora tweet
  fecha = Date.now();
  hora = Date.now();
  tweets: any;

  //var para el tweet
  textoT: string;

  tweet_id = Date.now();

  userlog: any;
  uidUserLog: any;

  objetoUsuarioL: any;

  nombre: any;
  username: any;



  constructor(
    private storage: AngularFireStorage,
    public tweetService: TweetService,
    public authenticationService: AuthenticationService,
    public userFirebaseService: UsersService
  ) {

    const pagina = window.location.href;
    console.log(pagina);
    if (pagina === 'http://localhost:4200/feed' || pagina === 'http://localhost:4200/dashboard-login-p/feed') {
      this.nav = document.getElementById('nav');
      this.nav.style.display = 'show';
    }

    const stream1 = this.authenticationService.getStatus();
    stream1.subscribe((result) => {
      this.userlog = result;
      console.log(this.userlog);
      console.log(this.userlog.uid);
      this.uidUserLog = this.userlog.uid;

      const stream2 = this.userFirebaseService.getUserByUId(this.uidUserLog);
      stream2.valueChanges().subscribe((result) => {
        //para obtener el obejto usuario
        this.objetoUsuarioL = result;
        console.log(result);
        console.log(this.objetoUsuarioL.name);
        this.nombre = this.objetoUsuarioL.name + ' ' + this.objetoUsuarioL.apellido;
        this.username = '@' + this.objetoUsuarioL.userName;
      });
    });

  }

  //Metodo para mostrar todos los tweets
  printTweets() {
    this.tweetService.getTweets();
    console.log();

    const stream = this.tweetService.getTweets();
    //mediante esto nos sucribimos a la lista y asi obtener la( y no el objeto)
    stream.valueChanges().subscribe((result) => {
      //asignamos el result a la variable users para desplegar la en el componente
      this.tweets = result;
      console.log(result);
    });
  }

  printUser() {

  }

  createTweet() {
    //Tweet
    debugger;
    const tweet = {
      description: this.textoT,
      timestamp: Date.now(),
      tweet_id: this.tweet_id,
      user_id: this.uidUserLog
    };

    const promise = this.tweetService.createTweet(tweet);
    promise.then((data) => {
      console.log(data);
      alert('tweet creado');
    }).catch((error) => {
      console.log('error', error);
    });
  }

  ngOnInit() {
  }

  ShowAlertTweet() {
    $("#alertTweet").fadeIn(500);
    setTimeout(function () { $("#alertTweet").fadeOut(500); }, 3000);

  }
}
