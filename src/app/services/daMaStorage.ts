import {Storage} from "@ionic/storage";
import {Injectable} from "@angular/core";
import 'rxjs/add/operator/map';

@Injectable()
export class daMaStorage {

  public dmg: any = null;

  constructor(public daMaStorage: Storage) {

  }

  public saveDaMaGotchi(dmg) {
    console.log("Saving your DaMaGotchi");
    console.log(dmg);
    this.daMaStorage.set('dmg', dmg);
    this.daMaStorage.get('dmg').then(value => {
      console.log(value);
    });
  }

  public loadDamaGotchi():Promise<boolean> {
    console.log("Loading your DaMaGotchi");
    return new Promise<boolean>((resolve) => {
      this.daMaStorage.get('dmg').then(value => {
        this.dmg = value;
        resolve(true);
      });
    });
  }

  public getDaMaGotchi() {
    return this.dmg;
  }

  public setDaMaGotchi(dmg) {
    this.dmg = dmg;
  }

}
