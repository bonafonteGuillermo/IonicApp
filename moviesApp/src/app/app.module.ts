import { FavouritesPage } from './../pages/favourites/favourites';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MovieDetailPage } from '../pages/movie-detail/movie-detail';
import { ProvidersMoviesProvider } from '../providers/providers-movies/providers-movies';
import { IonicStorageModule } from '@ionic/storage';
import { ProvidersFavouritesProvider } from '../providers/providers-favourites/providers-favourites';
import { SearchPage } from './../pages/search/search';
import { TabsPage } from './../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    FavouritesPage,
    HomePage,
    SearchPage,
    MovieDetailPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MovieDetailPage,
    FavouritesPage,
    SearchPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProvidersMoviesProvider,
    ProvidersFavouritesProvider,
    IonicStorageModule
  ]
})
export class AppModule {}
