import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';


@Injectable({
  providedIn: 'root'
})
export class TweetService {

  constructor(
    public angularFireDatabase:AngularFireDatabase
  ) { }

  //metodo agregar tweet
  createTweet(tweet){
    //a que nodo, el id que generaremos para ese usuario y se lo asignamos a la variable user
return this.angularFireDatabase.object('tweets/'+tweet.tweet_id).set(tweet);
}

//metodo buscar todos los tweets por el id del usuario 
getTweetByUId(user_id){
  //a que nodo, el id que generaremos para ese usuario 
return this.angularFireDatabase.list('tweets/'+user_id);
}

 //metodo para traer todos los tweets
 getTweets(){
  //accedemos a la bd de firebase (nos regresara una lista en este caso de usuarios)
                            //---nombre del nodo que creamos en FIREBASE
  return this.angularFireDatabase.list('tweets');
}


}
