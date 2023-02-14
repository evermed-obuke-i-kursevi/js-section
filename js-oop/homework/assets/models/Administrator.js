import User from './User.js';

export default class Administrator extends User {

    // @overrides User.login()
    login(userName, password) {
        const isAdminRole = true; // u realnom sistemu ovde bi bila neka logika koji odlucuje da li ce ovo biti true ili false
        if (isAdminRole && userName === this.userName && password === this.currentPassword) {
            console.log(`Logged in Successfully!`);
        } else {
            console.log(`Authentication Failed! Please try again.`);
        }
    }

    removeUser(userName) {
        console.log(`${userName} has been successfully removed!`);
    }

}