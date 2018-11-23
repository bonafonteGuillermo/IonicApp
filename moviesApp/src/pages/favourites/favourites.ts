import { Movie } from './../../model/Movie';
import { ProvidersFavouritesProvider } from './../../providers/providers-favourites/providers-favourites';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FavouritesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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
    this.favouritesProvider.getMoviesFromLocalStorage().then(
      (moviesArray) => { 
        if(moviesArray.lenght !== 0){
          this.favouriteMovies = moviesArray
        }
      });
  }
}
