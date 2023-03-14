import { Feed } from "./feed.js";
import { CRUD } from "./crud.js";
export class System {
    constructor(userWatchingInput) {
        this.notAfriends = [];
        this.userWatching = userWatchingInput;
    }
    viewFeed() {
        let feed = new Feed();
        feed.displyFeed(this.userWatching);
    }
    viewFriendRequsts() {
        console.log(this.userWatching.friendRequests);
    }
    viewFriends() {
        // System.allUsers.then((json) =>
        //   json.forEach((user: User) => {
        //     console.log(this.getConnectionLevel(this.userWatching, user));
        //   })
        // );
    }
    getConnectionLevel(user1, user2) {
        const queue = [user1];
        const visited = new Set();
        let level = 0;
        while (queue.length > 0) {
            level++;
            for (let i = 0; i < queue.length; i++) {
                let currentUser = queue.shift();
                visited.add(currentUser);
                for (const friend of currentUser.friends) {
                    if (friend === user2) {
                        return level;
                    }
                    if (!visited.has(friend)) {
                        queue.push(friend);
                    }
                }
            }
        }
        return -1;
    }
}
System.allUsers = CRUD.getObj();
System.entrances = [];
