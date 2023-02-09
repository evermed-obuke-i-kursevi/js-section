import User from './User.js';

export default class Author extends User {
    #numberOfPosts;

    constructor() {
        super();
        this.#numberOfPosts = 0;
    }

    createNewPost(postContent) {
        console.log(`Post content is: ${postContent}`);
        this.#numberOfPosts++;
    }

    get getPostNumber() {
        return this.#numberOfPosts;
    }

}