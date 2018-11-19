import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProvidersMoviesProvider } from '../../providers/providers-movies/providers-movies';


/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private moviesProvider : ProvidersMoviesProvider) {
    this.moviesProvider.getTopRatedMovies();
  }

  ionViewDidLoad() {
    //this.moviesProvider.getTopRatedMovies();
  }

}
