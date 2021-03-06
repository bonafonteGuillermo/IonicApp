import { Movie } from './../../model/Movie';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProvidersMoviesProvider } from '../../providers/providers-movies/providers-movies';
import { MovieDetailPage } from '../movie-detail/movie-detail';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  topRatedMovies : Movie[] = []
  nowPlayingMovies : Movie[] = []
  popularMovies : Movie[] = []
  movies_section : string

  constructor(public navCtrl: NavController, public navParams: NavParams, private moviesProvider : ProvidersMoviesProvider) {
    
    this.moviesProvider.getTopRatedMovies()
    .subscribe (res => {
      this.topRatedMovies = res
    });

    this.moviesProvider.getNowPlayingMovies()
    .subscribe (res => {
      this.nowPlayingMovies = res
    });

    this.moviesProvider.getPopularMovies()
    .subscribe (res => {
      this.popularMovies = res
    });

    //Select default segment
    this.movies_section = "top_rated";
  }

  ionViewDidLoad() {}
  
  movieCardClicked(movie){
    this.navCtrl.push(MovieDetailPage, {movie : movie});
  }
}