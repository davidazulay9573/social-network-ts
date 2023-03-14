import { Post } from "./post.js";
export class User {
  name: string;
  password: string;
  friends: User[];
  followers: User[];
  friendRequests: User[];
  messages: Message[];
  posts: Post[];
  rating: number;
  constructor(name: string, password: string) {
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

// class grup {
//   groupMembers: User[];
//   grupFeed: Post[];
//   constructor() {
//     this.groupMembers = [];
//     this.grupFeed = [];
//   }
//   joinAgrup(userJoins: User) {
//     this.groupMembers.push(userJoins);
//   }
// }

interface Message {
  frome: User;
  to: User;
  messageContent: string;
}
