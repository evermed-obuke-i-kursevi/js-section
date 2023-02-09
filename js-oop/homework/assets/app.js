import Author from './models/Author.js';
import Administrator from './models/Administrator.js';

// const user1 = new User('John Wick', 'john.wick1', 'johnwick123');
const user1 = new Author();
const admin = new Administrator();

// user1.login('john.wick1', '123johnwick'); // ! attempt with wrong credentials
const isRegistered = user1.register('John Wick', 'john.wick1', 'johnwick123'); // * register attempt with strong password

// user1.login('john.wick1', 'johnwick123'); // * attempt with correct credentials

// user1.newPassword = 'test123';
if (isRegistered) {

    user1.login('john.wick1', '123johnwick'); // ! login attempt with wrong credentials

    user1.login('john.wick1', 'johnwick123'); // * login attempt with correct credentials

    user1.newPassword = 'test123';

    user1.createNewPost(`This is my first post!`);
    user1.createNewPost(`Happy new year everyone!`);
    user1.createNewPost(`Happy today! 😊`);

    console.log(`User ${user1.userName} has ${user1.getPostNumber} posts`);

}

admin.removeUser(user1.userName);