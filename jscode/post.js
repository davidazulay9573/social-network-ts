import { Feed } from "./feed.js";
export class Post {
    constructor(userUp, contant) {
        this.userUp = userUp;
        this.contant = contant;
        this.likes = [];
        this.comments = [];
        this.rating = 0;
    }
    addLike(fromUser) {
        let newLike = new Likes(fromUser);
        this.likes.push(newLike);
        this.setRating();
        Feed.orgenFeed();
    }
    addComment(fromUser, contant) {
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
    constructor(userUp, contant) {
        super(userUp, contant);
        {
        }
    }
}
class Likes {
    constructor(fromeUserInput) {
        this.fromUser = fromeUserInput;
    }
}
