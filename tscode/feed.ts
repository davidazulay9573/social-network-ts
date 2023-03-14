import { Post } from "./post.js";
import { User } from "./user.js";

export class Feed {
  private feedForSpecifiUser: Post[];
  static allcontantOfFeed: Post[] = [];

  constructor() {
    this.feedForSpecifiUser = [];
  }
  static orgenFeed() {
    Feed.allcontantOfFeed.sort((a, b) => b.rating - a.rating);
  }
 public displyFeed(userWatching: User) {
    Feed.allcontantOfFeed.forEach((post) => {
      if (
        post.userUp.friends.includes(userWatching) ||
        post.userUp.followers.includes(userWatching)
      ) {
        this.feedForSpecifiUser.push(post);
        this.feedForSpecifiUser.sort((a, b) => b.rating - a.rating);
      }
    });
    console.log(this.feedForSpecifiUser);
  }
}
