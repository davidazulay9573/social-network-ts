import { User } from "./user.js";
import { Feed } from "./feed.js";
import { Messenger } from "./messenger.js";
import { CRUD } from "./crud.js";

export class System {
  userWatching: User;
  notAfriends: User[] = [];
  static allUsers: any = CRUD.getObj();
  static entrances: User[] = [];
  constructor(userWatchingInput: User) {
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
  public getConnectionLevel(user1: User, user2: User): number {
    const queue = [user1];
    const visited = new Set<User>();
    let level = 0;

    while (queue.length > 0) {
      level++;
      for (let i = 0; i < queue.length; i++) {
        let currentUser = queue.shift() as User;
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
