import { Register } from "./registerOrLogin.js";
import { Login } from "./registerOrLogin.js";
import { Messenger } from "./messenger.js";
import { User } from "./user.js";
import { Feed } from "./feed.js";
import { System } from "./system.js";
import { CRUD } from "./crud.js";
let buttonOfSendRegister = document.getElementById("sendRegister");
buttonOfSendRegister.addEventListener("click", () => {
    let newRegister = new Register();
    newRegister.validate();
});
let buttonOfSendLogin = document.getElementById("sendLogin");
buttonOfSendLogin.addEventListener("click", () => {
    let newLogin = new Login();
    newLogin.validate();
});
let user1 = new User("david", "333");
let user2 = new User("nadir", "333");
let user3 = new User("eli", "333");
let user4 = new User("jojo", "333");
let user5 = new User("aron", "333");
let user6 = new User("koko", "333");
let a = [user1, user2, user3, user4, user5, user6];
console.log(a);
// Messenger.addPost(user2, "post from user 2");
// Messenger.addPost(user3, "post of user 3");
// Messenger.suggestAmembership(user1, user2);
// Messenger.suggestAmembership(user2, user3);
// Messenger.suggestAmembership(user3, user1);
// Messenger.suggestAmembership(user4, user3);
// Messenger.suggestAmembership(user4, user1);
// Messenger.suggestAmembership(user6, user3);
// Messenger.confirmRequest(user1, user4);
// Messenger.confirmRequest(user3, user2);
// Messenger.confirmRequest(user3, user4);
// Messenger.confirmRequest(user3, user6);
// user2.posts[0].addLike(user1);
// user2.posts[0].addLike(user2);
// user2.posts[0].addComment(user1, "bla bla");
// user2.posts[0].comments[0].addComment(user1, "abl abl");
console.log(Feed.allcontantOfFeed);
System.allUsers.then((j) => {
    Messenger.suggestAmembership(j[0], j[1]);
    // Messenger.suggestAmembership(user6, user3);
    Messenger.confirmRequest(j[1], j[0]);
    // Messenger.confirmRequest(user3, user2);
    let system = new System(j[0]);
    console.log(system);
});
System.allUsers.then((j) => j.forEach((user) => {
    let system = new System(j[0]);
    console.log(system.getConnectionLevel(j[0], user));
}));
System.allUsers.then((j) => console.log(j));
CRUD.deleteObj("63f61647ebd26539d0833402 ");
