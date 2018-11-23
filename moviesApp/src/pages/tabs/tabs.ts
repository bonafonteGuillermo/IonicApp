import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { HomePage } from '../home/home';
import { FavouritesPage } from '../favourites/favourites';
import { SearchPage } from '../search/search';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tabExplore : any = HomePage
  tabFavourites : any = FavouritesPage
  tabSearch : any = SearchPage

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
}
