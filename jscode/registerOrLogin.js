import { System } from "./system.js";
import { User } from "./user.js";
import { CRUD } from "./crud.js";
export class Register {
    constructor() {
        this.nameInput = document.getElementById("nameInput").value;
        this.passwordInput = document.getElementById("passwordInput").value;
    }
    validate() {
        if (this.nameInput != "" && this.passwordInput != "") {
            System.allUsers.then((json) => {
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
    createNewUser() {
        let newUser = new User(this.nameInput, this.passwordInput);
        CRUD.addObj(newUser);
    }
}
export class Login {
    constructor() {
        this.nameInput = document.getElementById("nameInput").value;
        this.passwordInput = document.getElementById("passwordInput").value;
    }
    validate() {
        if (this.nameInput != "" && this.passwordInput != "") {
            System.allUsers.then((json) => json.forEach((user) => {
                if (this.nameInput == user.name &&
                    this.passwordInput == user.password) {
                    this.getIn(user);
                }
            }));
        }
    }
    getIn(userWatching) {
        let newSystem = new System(userWatching);
        System.entrances.push(userWatching);
        console.log(newSystem);
    }
}
Login.allNames = [];
