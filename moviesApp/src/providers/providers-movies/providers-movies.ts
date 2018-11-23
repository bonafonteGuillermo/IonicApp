import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Movie } from '../../model/Movie';

/*
  Generated class for the ProvidersMoviesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProvidersMoviesProvider {

  baseUrl = 'https://api.themoviedb.org/3/'
  API_key ='?api_key=fa7be82325f3cbb5596e2b31e0d74ba7'

  constructor(public http: HttpClient) {}

  getTopRatedMovies() : Observable<Movie[]>{
    return this.http.get(this.baseUrl+'movie/top_rated'+this.API_key)
      .pipe( map( (res: any) => res.results.map((movie: Movie) => new Movie().deserialize(movie))));
  }

  getNowPlayingMovies() : Observable<Movie[]>{
    return this.http.get(this.baseUrl+'movie/now_playing'+this.API_key)
    .pipe( map( (res: any) => res.results.map((movie: Movie) => new Movie().deserialize(movie))));
  }

  getPopularMovies() : Observable<Movie[]>{
    return this.http.get(this.baseUrl+'movie/popular'+this.API_key)
    .pipe( map( (res: any) => res.results.map((movie: Movie) => new Movie().deserialize(movie))));
  }
}