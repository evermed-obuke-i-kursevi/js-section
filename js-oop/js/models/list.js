export default class List {
    name;
    items = [];

    constructor(listName, items) {
        this.name = listName;
        this.items = items;
    }

}