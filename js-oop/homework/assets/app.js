class User {

    fullName;
    userName;
    #password;

    // constructor(fullName, userName, password) {
    //     this.fullName = fullName;
    //     this.userName = userName;
    //     this.#password = password;
    // }
    constructor() {}

    login(userName, password) {
        if (userName === this.userName && password === this.#password) {
            console.log(`Logged in Successfully!`);
        } else {
            console.log(`Authentication Failed! Please try again.`);
        }
    }

    register(fullName, userName, password) {
        if (!this.#validatePasswordFormat(password)) {
            console.log(`Your password is to weak! Please provide at least 8 characters!`);
            return false;
        }
        this.fullName = fullName;
        this.userName = userName;
        this.#password = password;
        console.log(`Dear ${userName}, your account has been successfully created!`);
        return true;
    }

    #validatePasswordFormat(password) {
        let regexRule = new RegExp('^[a-zA-Z0-9]{8,}$');
        let isValidValue = regexRule.test(password);
        return isValidValue;
    }

    set newPassword(newPassword) {
        if (!this.#validatePasswordFormat(newPassword)) {
            return console.log(`Your password is to weak! Please provide at least 8 characters!`);
        }
        this.#password = newPassword;
        console.log(`Password has been successfully changed!`);
    }

}

class Author extends User {
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

class Administrator extends User {

    removeUser(userName) {
        console.log(`${userName} has been successfully removed!`);
    }

}

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