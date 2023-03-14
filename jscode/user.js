export class User {
    constructor(name, password) {
        this.name = name;
        this.password = password;
        this.friends = [];
        this.followers = [];
        this.friendRequests = [];
        this.messages = [];
        this.posts = [];
        this.rating = 0;
    }
}
