import {DateTime} from "ionic-angular";

export class damagotchi {
  constructor(name, gender, birthday) {

    console.log("name: " + name);
    this.name = name;
    this.gender = gender;
    this.birthday = birthday;

    //Giving a small random to all the variables.
    let random;

    random = Math.floor(Math.random() * 10);
    this.lifePoints = 90 + random;

    random = Math.floor(Math.random() * 10);
    this.foodLevel = random;

    random = Math.floor(Math.random() * 10);
    this.sickLevel = random;

    random = Math.floor(Math.random() * 10);
    this.toiletLevel = random;

    random = Math.floor(Math.random() * 10);
    this.tiredLevel = random;

    random = Math.floor(Math.random() * 25);
    this.happiness = 100 - random;
  }

  public name: string;
  public birthday: DateTime;
  public gender: string;
  public lifePoints: number;
  public foodLevel: number;
  public sickLevel: number;
  public toiletLevel: number;
  public tiredLevel: number;
  public happiness: number;

}
