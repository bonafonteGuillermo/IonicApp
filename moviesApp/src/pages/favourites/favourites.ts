import { Movie } from './../../model/Movie';
import { ProvidersFavouritesProvider } from './../../providers/providers-favourites/providers-favourites';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-favourites',
  templateUrl: 'favourites.html',
})
export class FavouritesPage {

  favouriteMovies : Array<Movie> = []

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private favouritesProvider : ProvidersFavouritesProvider
  ){}

  ionViewDidEnter(){
    this.loadFavourites()
  }

  slideRemoveClicked(favouriteMovie : Movie){
    this.favouritesProvider.deleteMovieFromLocalStorage(favouriteMovie.id)
    this.loadFavourites()
    //TODO REFRESH THE LIST
  }

  loadFavourites(){
    this.favouriteMovies.length = 0
    this.favouritesProvider.getMoviesFromLocalStorage().then(
      (moviesArray) => { this.favouriteMovies = moviesArray });
  }
}