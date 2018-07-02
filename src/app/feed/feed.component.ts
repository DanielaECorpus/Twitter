import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from 'angularfire2/storage';

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
  //hora=
  imgId = Date.now();
  imgRef =this.imgId + '.jpg';
  filePath = this.imgRef;
  imageChangedEvent: any = '';
  croppedImage: any = '';

  constructor(private storage: AngularFireStorage) {

    const pagina = window.location.href;
    console.log(pagina);
    if (pagina === 'http://localhost:4200/feed' || pagina === 'http://localhost:4200/dashboard-login-p/feed') {
      this.nav = document.getElementById('nav');
      this.nav.style.display = 'show';
    }
  }

  ngOnInit() {
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

}
