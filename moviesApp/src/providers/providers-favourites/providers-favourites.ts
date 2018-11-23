import { Movie } from './../../model/Movie';
import { Observable } from "rxjs";
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class ProvidersFavouritesProvider {

  favouriteMovies : Array<Movie> = [];
  storageFileName : string = 'saved_favourite_movies'

  constructor(private storage: Storage,) {}

  putMovieInLocalStorage(movie){
    this.storage.get(this.storageFileName).then((val) => {
      if(val != null){
        this.favouriteMovies = JSON.parse(val)
      }
      this.favouriteMovies.push(movie)
      this.storage.set(this.storageFileName, JSON.stringify(this.favouriteMovies));
    });
  }

  deleteMovieFromLocalStorage(movieId) {
    this.storage.get(this.storageFileName).then((val) => {
      this.favouriteMovies = JSON.parse(val)
      this.storage.clear()
      var resultArray = this.favouriteMovies.filter(movie => movie.id !== movieId)
      this.storage.set(this.storageFileName, JSON.stringify(resultArray));
    });
  }

  getMovieFromLocalStorage(movieId) {
    return this.storage.get(this.storageFileName).then(
      (val) => {
        if(val != null){
          this.favouriteMovies = JSON.parse(val)
          //If the movie is NOT favourite
          if(this.favouriteMovies.find(movie => movie.id == movieId)===undefined){
            return false
          }else{
            return true
          }
        }else{
          return false
        }
      },(err) => console.log('An error has ocurred.'));
  }

  getMoviesFromLocalStorage() {
    this.favouriteMovies.length = 0 //MAYBE NOT NEEDED!!!!
    return this.storage.get(this.storageFileName).then(
      (val) => {
        if(val != null){
          return this.favouriteMovies = JSON.parse(val)
        }else{
          return this.favouriteMovies
        }
      },(err) => console.log('An error has ocurred.'));
  }
}