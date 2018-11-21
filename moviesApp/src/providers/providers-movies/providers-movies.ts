import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

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

  getTopRatedMovies() : Observable<any>{
    return this.http.get(this.baseUrl+'movie/top_rated'+this.API_key)
      .pipe( map( (res: any) => res.results));
  }

  getNowPlayingMovies() : Observable<any>{
    return this.http.get(this.baseUrl+'movie/now_playing'+this.API_key)
      .pipe( map( (res: any) => res.results));
  }

  getPopularMovies() : Observable<any>{
    return this.http.get(this.baseUrl+'movie/popular'+this.API_key)
      .pipe( map( (res: any) => res.results));
  }
}