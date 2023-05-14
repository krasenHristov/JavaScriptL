function createBookShop(inventory) {
  return {
    inventory: inventory, // ES5 // can remove inventory: inventory to just inventory
    inventoryValue() { // ES6
      return this.inventory.reduce((total, book) => total + book.price, 0);
    },
    priceForTitle: function(title) { // ES5
      return this.inventory.find(book => book.title === title).price;
    }
  };
}

const inventory = [
  { title: 'Harry Potter', price: 10 },
  { title: 'Eloquent Javascript', price: 15 },
  { title: 'The Dark Tower', price: 20 },
  { title: 'Lord of the Rings', price: 25 },
];

const bookShop = createBookShop(inventory);

let book1 = "Harry Potter";
let book2 = "Lord of the Rings";

console.log("All inventory price", bookShop.inventoryValue());
console.log(book1, bookShop.priceForTitle(book1));
console.log(book2, bookShop.priceForTitle(book2));

///////////////////////////////////////////////

function saveFile(url, data) {
  $.ajax({
    url,
    data,
    method: 'POST'
  });
}

const url = "http://fileupload.com";
const data = { color: 'purple' };

saveFile(url, data);
