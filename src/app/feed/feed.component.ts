import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from 'angularfire2/storage';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
//var para navbar
nav:any;
//var fecha y hora tweet
fecha=Date.now();
//hora=

  constructor(private storage: AngularFireStorage) {

    const pagina = window.location.href;
    console.log(pagina);
    if ( pagina === 'http://localhost:4200/feed'||pagina === 'http://localhost:4200/dashboard-login-p/feed') {
     this.nav = document.getElementById('nav');
     this.nav.style.display = 'show';
    }
   }

  ngOnInit() {
  }

}
