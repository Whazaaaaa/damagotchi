import { Component } from '@angular/core';
import {DateTime, NavController} from 'ionic-angular';
import { GamePage } from "../game/game";
import {daMaStorage} from "../../app/services/daMaStorage";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public name = "";
  public gender = "Male";
  public birthday = new Date().toISOString();
  gameAvailable = false;

  constructor(public navCtrl: NavController, public damastorage: daMaStorage) {
    damastorage.loadDamaGotchi().then(() => {
      if(damastorage.getDaMaGotchi() != null) {
        this.gameAvailable = true
      }
    });
  }

  public startGame() {
    if(this.name == null || this.name == "") {
      alert("Invalid name");
    }
    else if(this.gender == null || this.gender == "") {
      alert("Invalid gender");
    }
    else if(this.birthday == null) {
      alert("Invalid birthday");
    }
    else {
      //probably should validate the inputs still but for now its okay
      this.navCtrl.push(GamePage, {'name': this.name, 'gender': this.gender, 'birthday': this.birthday})
    }

  }

  public resumeGame() {
    if(this.damastorage.getDaMaGotchi() != null) {
      this.navCtrl.setRoot(GamePage);
    }
  }



}
