import { ProvidersFavouritesProvider } from './../../providers/providers-favourites/providers-favourites';
import { Movie } from './../../model/Movie';
import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-movie-detail',
  templateUrl: 'movie-detail.html',
})
export class MovieDetailPage {

  movie : Movie;
  favouriteMovies : Array<Movie> = [];
  addToFavouritesBtnText : String

  //Const string values
  stringAddFavourites : string = 'Add to favourites'
  stringRemoveFavourites : string = 'Remove from favourites'
  stringToastRemove : string = 'Movie succesfully removed'
  stringToastAdd : string = 'Movie succesfully added'

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private toastCtrl: ToastController, 
    private favouritesProvider : ProvidersFavouritesProvider) 
  {
    this.movie = navParams.data.movie;
      this.favouritesProvider.getMovieFromLocalStorage(this.movie.id).then(
        (isFound) => {
          if(isFound != true){
            this.setFavouriteBtnText(this.stringAddFavourites)
          }else{
            this.setFavouriteBtnText(this.stringRemoveFavourites)
          }
        }
      );
  }

  addToFavouritesClicked(movie){
    if(this.addToFavouritesBtnText == this.stringAddFavourites){
      this.favouritesProvider.putMovieInLocalStorage(movie)
      this.presentToast(this.stringToastAdd)
      this.setFavouriteBtnText(this.stringRemoveFavourites)
    }else{
      this.favouritesProvider.deleteMovieFromLocalStorage(movie.id)
      this.presentToast(this.stringToastRemove)
      this.setFavouriteBtnText(this.stringAddFavourites)
    }
  }

  setFavouriteBtnText(btnText : string){
      this.addToFavouritesBtnText = btnText
  }

  presentToast(toastMessage : string) {
    const toast = this.toastCtrl.create({
      message: toastMessage,
      duration: 3000,
    });
    toast.present();
  }
}