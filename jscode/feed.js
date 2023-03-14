export class Feed {
    constructor() {
        this.feedForSpecifiUser = [];
    }
    static orgenFeed() {
        Feed.allcontantOfFeed.sort((a, b) => b.rating - a.rating);
    }
    displyFeed(userWatching) {
        Feed.allcontantOfFeed.forEach((post) => {
            if (post.userUp.friends.includes(userWatching) ||
                post.userUp.followers.includes(userWatching)) {
                this.feedForSpecifiUser.push(post);
                this.feedForSpecifiUser.sort((a, b) => b.rating - a.rating);
            }
        });
        console.log(this.feedForSpecifiUser);
    }
}
Feed.allcontantOfFeed = [];
