import User from './User.js';

export default class Administrator extends User {

    removeUser(userName) {
        console.log(`${userName} has been successfully removed!`);
    }

}