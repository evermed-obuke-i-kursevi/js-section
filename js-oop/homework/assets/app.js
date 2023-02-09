class User {

    fullName;
    userName;
    #password;

    constructor(fullName, userName, password) {
        this.fullName = fullName;
        this.userName = userName;
        this.#password = password;
    }

    login(userName, password) {
        if (userName === this.userName && password === this.#password) {
            console.log(`Logged in Successfully!`);
        } else {
            console.log(`Authentication Failed! Please try again.`);
        }
    }

    set newPassword(newPassword) {
        this.#password = newPassword;
        console.log(`Password has been successfully changed!`);
    }

}

const user1 = new User('John Wick', 'john.wick1', 'johnwick123');

user1.login('john.wick1', '123johnwick'); // ! attempt with wrong credentials

user1.login('john.wick1', 'johnwick123'); // * attempt with correct credentials

user1.newPassword = 'test123';