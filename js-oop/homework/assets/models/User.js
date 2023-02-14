export default class User {

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

    get currentPassword() {
        return this.#password;
    }

}
