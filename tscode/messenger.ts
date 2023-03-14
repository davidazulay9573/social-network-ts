import { User } from "./user.js";
import { Feed } from "./feed.js";
import { Post } from "./post.js";
export class Messenger {
  private constructor() {}
  static addPost(sender: User, contant: string) {
    let newPost = new Post(sender, contant);
    sender.posts.push(newPost);
    Feed.allcontantOfFeed.push(newPost);
    Feed.orgenFeed();
  }

  static suggestAmembership(sender: User, receiver: User) {
    if (!sender.friends.includes(receiver)) {
      receiver.friendRequests.push(sender);
    }
  }

  static confirmRequest(sender: User, receiver: User) {
    sender.friends.push(receiver);
    receiver.friends.push(sender);
    let usersIndex = receiver.friendRequests;
    console.log(usersIndex);

    // receiver.friendRequests.splice(usersIndex, 1);
  }

  static rejectedRequest(sender: User, receiver: User) {
    receiver.friendRequests = receiver.friendRequests.filter(
      (friendRequest) => {
        friendRequest != sender;
      }
    );
  }

  static startFollowing(sender: User, receiver: User) {
    receiver.followers.push(sender);
  }

  static sendMessage(contant: string, sender: User, receiver: User) {
    let newMessage = {
      frome: sender,
      to: receiver,
      messageContent: contant,
    };
    receiver.messages.push(newMessage);
    sender.messages.push(newMessage);
  }
}
