import { Movie } from './../../model/Movie';
import { ProvidersFavouritesProvider } from './../../providers/providers-favourites/providers-favourites';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieDetailPage } from '../movie-detail/movie-detail';

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
    .then( (it) => this.loadFavourites())
  }

  loadFavourites(){
    this.favouriteMovies.length = 0
    this.favouritesProvider.getMoviesFromLocalStorage()
    .then( (moviesArray) => { this.favouriteMovies = moviesArray })
  }

  favouriteMovieDetail(favouriteMovie : Movie){
    this.navCtrl.push(MovieDetailPage, {movie : favouriteMovie});
  }
}