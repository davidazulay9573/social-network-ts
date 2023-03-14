import { System } from "./system.js";
import { User } from "./user.js";
class Register {
    constructor() {
        this.nameInput = document.getElementById("nameInput").value;
        this.passwordInput = document.getElementById("passwordInput").value;
    }
    validate() {
        if (this.nameInput != "" && this.passwordInput != "") {
            if (!Register.allNames.includes(this.nameInput)) {
                this.createNewUser();
            }
        }
    }
    createNewUser() {
        let newUser = new User(this.nameInput, this.passwordInput);
        System.allUsers.push(newUser);
        Register.allNames.push(this.nameInput);
    }
}
Register.allNames = [];
let buttonOfSendRegister = document.getElementById("sendRegister");
buttonOfSendRegister.addEventListener("click", () => {
    let newRegister = new Register();
    newRegister.validate();
    console.log(System.allUsers);
});
class Login {
    constructor() {
        this.nameInput = document.getElementById("nameInput").value;
        this.passwordInput = document.getElementById("passwordInput").value;
    }
    validate() {
        if (this.nameInput != "" && this.passwordInput != "") {
            System.allUsers.forEach((user) => {
                if (this.nameInput == user.name &&
                    this.passwordInput == user.password) {
                    this.getIn(user);
                }
            });
        }
    }
    getIn(userWatching) {
        let newSystem = new System(userWatching);
        console.log(newSystem);
    }
}
Login.allNames = [];
let buttonOfSendLogin = document.getElementById("sendLogin");
buttonOfSendLogin.addEventListener("click", () => {
    let newLogin = new Login();
    newLogin.validate();
    console.log(System.allUsers);
});
class DefaultDOM {
}
