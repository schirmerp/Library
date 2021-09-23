
var divNum = -1;
let myLibrary = [];
//const rbtn = document.getElementById('checkOut').value; 
let indVal;

_e = (id) => {
    return document.getElementById(id);
};
addToScreen = (t) => {
    return document.getElementById('div1').innerHTML += t;   
};

//data setup
class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = Boolean(read);
        this.divNum = (divNum + 1);
        divNum ++; 
        this.info = () => {
            return `${this.title} by ${this.author}. Is ${this.pages} pages long.`;
        };
        this.reStat = () => {
            this.read = !this.read;
            /*if(this.read = true){
                return this.read = false;
            }if(this.read = false){
                return this.read = true;
            };*/
        };
    }
    toString() {
        return '"' + this.title + '" By: ' + this.author + '. Is ' + this.pages + 'pages long.' + '<br>';
    }
} ;
 
const harry = new Book("Harry Potter", "Rowling", 500, true);
const tom = new Book("Tom Sawyer", "Twain", 300, true);
const hardy = new Book("Hardy Boys","Dixon", 2000, false);






//functionality

function removeBook(b) {
    myLibrary.splice(b, 1);
    printBook();
    return myLibrary;
}



/*const printBook = () => {
        var divID = -1;
        var aN = -1;
        document.getElementById('div1').innerHTML = "";
    for (let Book in myLibrary) {
        var printInfo = document.createElement('div');
        divID ++;
        aN++;
        printInfo.setAttribute("data-index-number", divID)
        printInfo.innerHTML = divID + " " + myLibrary[aN];
        document.getElementById('div1').appendChild(printInfo);
};
}*/



function getData() {
    var userTitle = _e("form1").value;
    var userAuthor = _e("form2").value;
    var userPages = _e("form3").value;
    var userRead = _e("selected").value;
    userTitle = new Book(userTitle, userAuthor, parseInt(userPages), parseInt(userRead));
    render();

    return addBookToLibrary(userTitle);


};
function removeButt(){
    var bd = _e("checkOut").value;
    removeBook(bd);
};

// need to get index to print in front of info
//document.getElementById('container').innerHTML = myLibrary.join("");   

function getClass(c) {
let divC = document.getElementById(c);
for (let cssClass of divC.classList) {
    console.log(cssClass);  
};
}
function render() {
    const display = document.getElementById('container');
    const books = document.querySelectorAll('.book');
    books.forEach(book => display.removeChild(book));
   
    for (let i=0; i<myLibrary.length; i++){
        createBook(myLibrary[i]);
    }
}
const createBook = (item) => {
    const library = document.querySelector('#container');
    const bookDiv = document.createElement('div')
    const titleDiv = document.createElement('h4')
    const authorDiv = document.createElement('h4')
    const pageDiv = document.createElement('h5')
    const readButton = document.createElement('button')
    const removeButton = document.createElement('button')

    bookDiv.classList.add('book')
    bookDiv.setAttribute('id', myLibrary.indexOf(item))

    titleDiv.classList.add('title')
    titleDiv.textContent = item.title
    bookDiv.appendChild(titleDiv)

    authorDiv.classList.add('author')
    authorDiv.textContent = item.author
    bookDiv.appendChild(authorDiv)

    pageDiv.classList.add('pages')
    pageDiv.textContent = item.pages
    bookDiv.appendChild(pageDiv)

    readButton.classList.add('readBtn')
    bookDiv.appendChild(readButton)
    if(item.read == false){
        readButton.textContent = 'Not Read'
        readButton.style.backgroundColor ='red'
    }else{
        readButton.textContent= 'Read'
        readButton.style.backgroundColor = 'green'
    }

    removeButton.classList.add('removeBtn')
    removeButton.textContent = 'Remove'
    removeButton.setAttribute('id', 'removeBtn')
    bookDiv.appendChild(removeButton)

    library.appendChild(bookDiv)

    removeButton.addEventListener('click', () => {
        myLibrary.splice(myLibrary.indexOf(item), 1)
        render();
        return myLibrary
    });

    readButton.addEventListener('click', () => {
        item.read = !item.read; 
        render();       
    });

}
function addBookToLibrary(book) {
    myLibrary[myLibrary.length] = book;
    render();
   // console.table(myLibrary);
};


addBookToLibrary(harry);
addBookToLibrary(tom);
addBookToLibrary(hardy);