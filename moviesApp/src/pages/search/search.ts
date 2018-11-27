import { Movie } from './../../model/Movie';
import { ProvidersMoviesProvider } from './../../providers/providers-movies/providers-movies';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieDetailPage } from '../movie-detail/movie-detail';

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  movieName : string
  searchedMovies : Array<Movie> = []
  constructor(public navCtrl: NavController, public navParams: NavParams, private movieProvider: ProvidersMoviesProvider) {}

  ionViewDidLoad() {
    this.movieName = ""
    this.searchedMovies = []
  }

  searchMovie(){
    console.log(this.movieName);
    this.movieProvider.getMovie(this.movieName)
    .subscribe (res => {
      this.searchedMovies = res
    });
    
  }

  searchedMovieSelected(searchedMovie : Movie){
    this.navCtrl.push(MovieDetailPage, {movie : searchedMovie});
  }
}
