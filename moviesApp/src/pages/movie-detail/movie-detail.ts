import { Movie } from './../../model/Movie';
import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-movie-detail',
  templateUrl: 'movie-detail.html',
})
export class MovieDetailPage {

  movie : Movie;
  favouriteMovies : Array<Movie> = [];
  addToFavouritesBtnText : String

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private toastCtrl: ToastController, 
    private storage: Storage) 
  {
    this.movie = navParams.data.movie;
    this.storage.get('saved_favourite_movies').then(
      (val) => {
        if(val != null){
          this.favouriteMovies = JSON.parse(val)
          //If the movie is NOT favourite
          if(this.favouriteMovies.find(movie => movie.id == this.movie.id)===undefined){
            this.enableAddToFavouriteBtn()
          }else{
            this.disableAddToFavouriteBtn()
          }
        }else{
          this.enableAddToFavouriteBtn()
        }
      },(err) => console.log('An error has ocurred.'));
  }

  ionViewDidLoad() {}

  addToFavouritesClicked(movie){
    if(this.addToFavouritesBtnText == 'Add to favourites'){
      this.putMovieInLocalStorage(movie)
      this.presentToast('Movie succesfully added')
      this.disableAddToFavouriteBtn()
    }else{
      this.deleteMovieFromLocalStorage(movie.id)
      this.presentToast('Movie succesfully deleted')
      this.enableAddToFavouriteBtn()
    }
  }

  putMovieInLocalStorage(movie){
    this.storage.get('saved_favourite_movies').then((val) => {
      if(val != null){
        this.favouriteMovies = JSON.parse(val)
      }
      this.favouriteMovies.push(movie)
      this.storage.set('saved_favourite_movies', JSON.stringify(this.favouriteMovies));
    });
  }

  deleteMovieFromLocalStorage(movieId) {
    this.storage.get('saved_favourite_movies').then((val) => {
      this.favouriteMovies = JSON.parse(val)
      this.storage.clear()
      var resultArray = this.favouriteMovies.filter(movie => movie.id !== movieId)
      this.storage.set('saved_favourite_movies', JSON.stringify(resultArray));
    });
  }

  disableAddToFavouriteBtn(){
      this.addToFavouritesBtnText = 'Remove from favourites'
  }

  enableAddToFavouriteBtn(){
    this.addToFavouritesBtnText = 'Add to favourites'
  }

  presentToast(toastMessage : string) {
    const toast = this.toastCtrl.create({
      message: toastMessage,
      duration: 3000,
    });
    toast.present();
  }
}