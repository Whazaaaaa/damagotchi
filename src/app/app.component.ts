import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {daMaStorage} from "./services/daMaStorage";
import {HomePage} from "../pages/home/home";
import {GamePage} from "../pages/game/game";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, damastorage: daMaStorage) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      damastorage.loadDamaGotchi().then(() => {
        statusBar.styleDefault();
        splashScreen.hide();
        if(damastorage.getDaMaGotchi() == null) {
          this.rootPage = HomePage;
        }
        else {
          this.rootPage = GamePage;
        }
      });
    });
  }
}
