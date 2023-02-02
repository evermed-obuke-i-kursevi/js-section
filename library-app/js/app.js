// ! CRUD operacije - Create, Read, Update, Delete

const libraryBooks = [
    {
        id: 1,
        name: 'Misery',
        writter: 'Steven King'
    },
    {
        id: 2,
        name: 'Special Mission',
        writter: 'Otto Skorczeny'
    },
    {
        id: 3,
        name: 'Head Hunters',
        writter: 'Ju Nesbe'
    }
];

// 1. GET BOOK funkcija
const findBook = (userInput) => {
    const searchTerm = userInput
        .toLowerCase()
        .trim()
        .split(' ')
        .join(''); // '    HeAD HUNTERS   ' --> '    head hunters   ' --> 'head hunters' --> ['head', 'hunters'] --> 'headhunters'
    
    const foundBook = libraryBooks.find(book => {
        return book.name.toLowerCase().trim().split(' ').join('') === searchTerm;
    });

    alert(JSON.stringify(foundBook));
}

searchBookBtn.addEventListener('click', () => {
    findBook(searchBookInput.value);
});


// 2. ADD BOOK funkcija
const addBook = (name, writter, attributeName = '', attributeValue = '') => {
    const addedBook = {
        id: Math.ceil(Math.random() * 100), // 0.31231 ==> 31.231 ==> 32
        name, // skraceno od name: name
        writter
    }
    if (attributeName !== '' && attributeValue !== '') {
        addedBook[attributeName] = attributeValue;
    }
    libraryBooks.push(addedBook);
    console.log(libraryBooks);
    alert(`Added new book to library: ${addedBook.name} (${addedBook.writter})`);
}

addBookBtn.addEventListener('click', () => {
    addBook(bookNameInput.value, bookWritterInput.value, additionalAttributeNameInput.value, additionalAttributeValueInput.value);
});


// 3. DELETE BOOK funkcija
const deleteBook = (userInput) => {
    const searchTerm = userInput
        .toLowerCase()
        .trim()
        .split(' ')
        .join(''); // lord of THE RINGS --> lordoftherings

    const foundBook = libraryBooks.find(book => {
        return book.name.toLowerCase().trim().split(' ').join('') === searchTerm;
    });
    
    const indexOfFoundBook = libraryBooks.indexOf(foundBook);

    libraryBooks.splice(indexOfFoundBook, 1);

    console.log(libraryBooks);
    alert(`Succesfully deleted book from library: ${foundBook.name}`);
}

deleteBookBtn.addEventListener('click', () => {
    deleteBook(deleteBookInput.value);
});



// TODO 32. cas domaci
/*
    1. Ukoliko nema ni jedne knjige u biblioteci ispisati odgovarajucu poruku
    2. Istraziti kako da se obrisu input polja nakon izvrsene operacije: pretrage, dodavanja i brisanja knjige
    3. Dodati funkcionalnost koja izlistava sve knjige na konzoli na klik dugmeta
    4. Dodati validaciju polja, nijedno polje za unos ne sme ostati prazno, ako je prazno obavestiti korisnika da mora uneti neku vrednost
    5. Dodati validaciju koja proverava da li u postojecem nizu vec postoji knjiga sa istim nazivom. Ako postoji obavestiti korisnika.
    6. Pri ispisu knjiga na konzoli, knjige ispisati po rastucem redosledu po nazivu
    7. Update-ovati search tako da nadje ne samo po striktno nazivu knjige knjigu, vec i po delu reci. Npr ako korisnik ukuca 'head' onda
       automatski treba da dobije sve knjige koje imaju tu rec 'head' u nazivu
*/