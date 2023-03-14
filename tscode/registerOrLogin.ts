import { System } from "./system.js";
import { User } from "./user.js";
import { CRUD } from "./crud.js";

export class Register {
  private nameInput: string;
  private passwordInput: string;
  constructor() {
    this.nameInput = (
      document.getElementById("nameInput") as HTMLInputElement
    ).value;
    this.passwordInput = (
      document.getElementById("passwordInput") as HTMLInputElement
    ).value;
  }
  public validate() {
    if (this.nameInput != "" && this.passwordInput != "") {
      System.allUsers.then((json: User[]) => {
        let allNames = json.map((j) => j.name);
        if (!allNames.includes(this.nameInput)) {
          this.createNewUser();
          setTimeout(() => {
            location.reload();
          }, 1000);
        }
      });
    }
  }
  private createNewUser() {
    let newUser = new User(this.nameInput, this.passwordInput);
    CRUD.addObj(newUser);
  }
}
export class Login {
  private nameInput: string;
  private passwordInput: string;
  static allNames: string[] = [];
  constructor() {
    this.nameInput = (
      document.getElementById("nameInput") as HTMLInputElement
    ).value;
    this.passwordInput = (
      document.getElementById("passwordInput") as HTMLInputElement
    ).value;
  }
  public validate() {
    if (this.nameInput != "" && this.passwordInput != "") {
      System.allUsers.then((json: User[]) =>
        json.forEach((user) => {
          if (
            this.nameInput == user.name &&
            this.passwordInput == user.password
          ) {
            this.getIn(user);
          }
        })
      );
    }
  }
  private getIn(userWatching: User) {
    let newSystem = new System(userWatching);
    System.entrances.push(userWatching);
    console.log(newSystem);
  }
}
