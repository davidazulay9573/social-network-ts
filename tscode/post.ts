import { User } from "./user.js";
import { Feed } from "./feed.js";

export class Post {
  userUp: User;
  contant: string;
  likes: Likes[];
  comments: Comments[];
  rating: number;
  constructor(userUp: User, contant: string) {
    this.userUp = userUp;
    this.contant = contant;
    this.likes = [];
    this.comments = [];
    this.rating = 0;
  }
  addLike(fromUser: User) {
    let newLike = new Likes(fromUser);
    this.likes.push(newLike);
    this.setRating();
    Feed.orgenFeed();
  }
  addComment(fromUser: User, contant: string) {
    let newComment = new Comments(fromUser, contant);
    this.comments.push(newComment);
    this.setRating();
    this.orgenComments();
    Feed.orgenFeed();
  }
  setRating() {
    let byComments = this.comments.length * 2;
    let byLikes = this.likes.length;
    this.rating = byComments + byLikes;
  }
  orgenComments() {
    this.comments.sort((a, b) => b.rating - a.rating);
  }
}
 class Comments extends Post {
  constructor(userUp: User, contant: string) {
    super(userUp, contant);
    {
    }
  }
}

 class Likes {
  fromUser: User;
  constructor(fromeUserInput: User) {
    this.fromUser = fromeUserInput;
  }
}

