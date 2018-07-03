import { Tweet } from './../models/tweet';
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

  currentTime = new Date()
  month = this.currentTime.getMonth() + 1;
  day = this.currentTime.getDate();
  year = this.currentTime.getFullYear();
  hour = this.currentTime.getHours() + ':' + this.currentTime.getMinutes();
  FechaServidorFrontEnd = this.day + "/" + this.month + "/" + this.year;
  FechaActual = new Date().toJSON().substring(0, 10);


  tweet_count: number = 0;
  countTweets: number;

  //var para navbar
  nav: any;
  //var fecha y hora tweet
  fecha = Date.now();

  hora = Date.now();
  tweets = new Tweet();

  //var para el tweet
  textoT: string;

  tweet_id: any = '';
  userlog: any;
  uidUserLog: any;
  objetoUsuarioL: any;
  nombre: any;
  username: any;

  mensajeAlerta: string = '';

  imgId = Date.now();
  imgRef =this.imgId + '.jpg';
  filePath = this.imgRef;
  imageChangedEvent: any = '';
  croppedImage: any = '';

  constructor(
    private storage: AngularFireStorage,
    public tweetService: TweetService,
    public authenticationService: AuthenticationService,
    public userFirebaseService: UsersService
  ) {


    const stream1=this.authenticationService.getStatus();
    stream1.subscribe((result)=>{
      this.userlog=result;
      //console.log(this.userlog);
      //console.log(this.userlog.uid);
      this.uidUserLog=this.userlog.uid;

      const stream2 = this.userFirebaseService.getUserByUId(this.uidUserLog);
      stream2.valueChanges().subscribe((result) => {
        //para obtener el obejto usuario
        this.objetoUsuarioL=result;
        //console.log(result);
       // console.log(this.objetoUsuarioL.name);
        this.nombre=this.objetoUsuarioL.name+' '+this.objetoUsuarioL.apellido ;
        this.username='@'+this.objetoUsuarioL.userName;
      });
    });

  }


  ngOnInit() {
    this.printTweets();
  }

  ShowAlertTweet() {
    $("#alertTweet").fadeIn(500);
    setTimeout(function () { $("#alertTweet").fadeOut(500); }, 3000);
  }
  
  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }
  imageCropped(image: string) {
    this.croppedImage = image;
  }
  imageLoaded() {
    // show cropper

  }
  loadImageFailed() {
    // show message
  }

  
  uploadFile() {
    
    const ref = this.storage.ref(this.filePath);
    const task = ref.putString(this.croppedImage, 'data_url');
    console.log(this.croppedImage);
    this.croppedImage = '';
    this.imageChangedEvent = '';
  }

  LimpiarTweet() {
    this.textoT = '';
    this.tweet_id = '';
  }

  createTweet() {
    //Tweet
    this.tweet_id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    const tweet = {
      description: this.textoT,
      tweet_date: this.FechaActual,
      tweet_hour: this.hour,
      tweet_id: this.tweet_id,
      tweet_count: this.tweet_count,
      user_id: this.uidUserLog,
      user_tweet: this.nombre,
      username_tweet: this.username
    };
    const promise = this.tweetService.createTweet(tweet);
    promise.then((data) => {
      console.log(data);
      this.LimpiarTweet();
      this.mensajeAlerta = 'Tweet Creado Exitosamente!!!';
      this.ShowAlertTweet();
      this.printTweets();
    }).catch((error) => {
      this.LimpiarTweet();
      this.mensajeAlerta = 'Upss!! Ha Ocurrido Un Error';
      this.ShowAlertTweet();
      console.log('error', error);
    });
  }

  //Metodo para mostrar todos los tweets
  printTweets() {
    const stream = this.tweetService.getTweets();
    //mediante esto nos sucribimos a la lista y asi obtener la( y no el objeto)
    stream.valueChanges().subscribe((result) => {
      //asignamos el result a la variable users para desplegar la en el componente
      this.tweets[0] = result;
      this.countTweets = result.length;
    });
  }


  LoveItTweet() {

  }
}
