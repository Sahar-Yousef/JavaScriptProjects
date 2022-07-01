// Books in our store
const Books= [[1,"Start with why","Simon Sinek",80.0,13],[3,"Clean Code","Robert Cecil Martin",50.0,5]];
var ar = [];
var arr =[2,"But how do it know","J. Clark Scott",59.9,22];
console.log(" ");
console.table(Books);

// edit Books data in the store
console.log(" ");
var oldData = 80;
var newData = 99;
function editBooksData(oldData, newData) {
    if (query(oldData)) {
        var oldDataIndex = ar.indexOf(oldData);
        ar[oldDataIndex] = newData;
        console.log("Book data have been updated!");
    } else {
        console.log("Book not found!");
    }
}
editBooksData(oldData, newData);
console.table(Books);



// delete Books
console.log(" ");
var dataOfdeltedBooks = 5;
function deleteBooks(dataOfdeltedBooks) {
    if (query(dataOfdeltedBooks)) {
        Books.pop(Books.indexOf(ar));
        console.log("Book have been deleted!");
    } else {
        console.log("Book not found!");
    }
}
deleteBooks(dataOfdeltedBooks);
console.table(Books);



// Add books to store
console.log(" ");
function addBooks (arr){
    if (arr != Books.forEach(element => {Books.push(arr)})) {
        console.log("Book added secuucefully!");
    } 
    else {
        console.log("Can not add it!");
    }
}
addBooks(arr);
console.table(Books);



// Search for books
console.log(" ");
var search = 'J. Clark Scott';
function query (search) {
    for (let index = 0; index < Books.length; index++) {
        for (let InnerIndex = 0; InnerIndex < Books[index].length; InnerIndex++) {
            if (search == Books[index][InnerIndex]) {
                ar = Books[index];
                return true;
            } 
        }
    }
}

if (query(search)) {
    console.log("Yaaay! " + search + " Book is available!");
} else {
    console.log("Sorry! " + search + " Book is not available, we will bring it soon.");
}



// Buy books
console.log(" ");
var BookTitle = 'But how do it know'; 
var Cash = 2000;
var Quantity = 5;
function buyBooks (BookTitle, Cash, Quantity){
    if (query(BookTitle)) {

        if (ar[3]<=Cash*Quantity && ar[4]>=Quantity) {
            Price = ar[3]*Quantity
            ar[4] -=  Quantity;
            console.log(" PAYMENT ACCEPTED");
            console.log(" YOUR PILL | AMOUNT : " + Quantity + " | PRICE : " +  Price);
            console.log(" ");
            console.table(Books);
        } 
        
        else if (ar[3] > Cash*Quantity) {
            console.log("Opps! We dont have this much of " + BookTitle + "!");
        } 
        
        else {
            console.log("Opps! Your balance is lees than the requried balance!");
        }
    } 
    
    else {
        console.log("Sorry! " + BookTitle + " Book is not available, we will bring it soon.");
    }
}
buyBooks(BookTitle,Cash,Quantity);