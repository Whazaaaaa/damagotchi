import { Component } from '@angular/core';
import {NavController, NavParams, Platform} from 'ionic-angular';
import {damagotchi} from "../../app/models/damagotchi";
import {daMaStorage} from "../../app/services/daMaStorage";
import {HomePage} from "../home/home";

@Component({
  selector: 'page-game',
  templateUrl: 'game.html',
})
export class GamePage {

  public damagotchi;

  constructor(public navCtrl: NavController, public navParams: NavParams, public damastorage: daMaStorage, platform: Platform) {

    platform.ready().then(() => {
      damastorage.loadDamaGotchi().then(() => {
        if(damastorage.getDaMaGotchi() == null && navParams.data != null) {
          this.startNewGame(navParams);
        }
        else {
          this.resumeGame();
        }
      });
    });

  }

  ionViewWillLeave() {
    console.log('leaving');
    this.damastorage.saveDaMaGotchi(this.damagotchi);
  }

  saveProgress() {
    this.damastorage.saveDaMaGotchi(this.damagotchi);
  }

  startNewGame(navParams) {
    console.log("Starting a new Game!");
    this.damagotchi = new damagotchi(navParams.get('name'), navParams.get('gender'), navParams.get('birthday'));
    this.damastorage.setDaMaGotchi(this.damagotchi);
  }

  resumeGame() {
    console.log("Resuming game");
    this.damagotchi = this.damastorage.getDaMaGotchi();
  }

  backToHome() {
    this.damastorage.saveDaMaGotchi(this.damagotchi);
    this.navCtrl.setRoot(HomePage);
  }

}
