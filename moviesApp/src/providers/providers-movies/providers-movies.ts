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

  constructor(public http: HttpClient) {
    console.log('Hello ProvidersMoviesProvider Provider');
  }

  getTopRatedMovies() : Observable<any>{
    return this.http.get('https://api.themoviedb.org/3/movie/top_rated?api_key=fa7be82325f3cbb5596e2b31e0d74ba7')
      .pipe( map( (res: any) => res.results));
  }
}
