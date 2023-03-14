import { Feed } from "./feed.js";
import { Post } from "./post.js";
export class Messenger {
    constructor() { }
    static addPost(sender, contant) {
        let newPost = new Post(sender, contant);
        sender.posts.push(newPost);
        Feed.allcontantOfFeed.push(newPost);
        Feed.orgenFeed();
    }
    static suggestAmembership(sender, receiver) {
        if (!sender.friends.includes(receiver)) {
            receiver.friendRequests.push(sender);
        }
    }
    static confirmRequest(sender, receiver) {
        sender.friends.push(receiver);
        receiver.friends.push(sender);
        let usersIndex = receiver.friendRequests;
        console.log(usersIndex);
        // receiver.friendRequests.splice(usersIndex, 1);
    }
    static rejectedRequest(sender, receiver) {
        receiver.friendRequests = receiver.friendRequests.filter((friendRequest) => {
            friendRequest != sender;
        });
    }
    static startFollowing(sender, receiver) {
        receiver.followers.push(sender);
    }
    static sendMessage(contant, sender, receiver) {
        let newMessage = {
            frome: sender,
            to: receiver,
            messageContent: contant,
        };
        receiver.messages.push(newMessage);
        sender.messages.push(newMessage);
    }
}
