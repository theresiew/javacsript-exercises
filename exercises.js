//exercises 1

let productCategories = ["Electronics", "Books", "Clothing", "Food", "Sports"];

console.log(productCategories[0]); 
console.log(productCategories[productCategories.length - 1]);
console.log(productCategories.length);

productCategories[1] = "Toys"; 
console.log(productCategories);

//exercises 2

let inventory = [10, 20, 30];

inventory.push(40);
console.log(inventory); 

inventory.pop();
console.log(inventory);

inventory.unshift(0);
console.log(inventory);

inventory.shift();
console.log(inventory); 

inventory.splice(1, 1, 25, 35);
console.log(inventory);

//exercises 3

let originalScores = [90, 85, 78];


let referenceCopy = originalScores;
referenceCopy[0] = 100;
console.log(originalScores); 
console.log(referenceCopy);  

let spreadCopy = [...originalScores];
spreadCopy[2] = 50;
console.log(originalScores); 
console.log(spreadCopy);  

//exercises 4
let studentNames = ["Alice", "Bob", "Charlie", "Alice", "David"];

console.log(studentNames.indexOf("Alice"));     
console.log(studentNames.lastIndexOf("Alice")); 
console.log(studentNames.includes("Charlie"));  
console.log(studentNames.includes("Eve")); 

//exercises 5
let products = [
  {id: 1, name: "Laptop",   price: 1200},
  {id: 2, name: "Mouse",    price: 25},
  {id: 3, name: "Keyboard", price: 75}
];

let foundProduct = products.find(p => p.id === 2);
console.log(foundProduct); 

let expensiveIndex = products.findIndex(p => p.price > 1000);
console.log(expensiveIndex); 

//exercises 6
let userAges = [18, 24, 33, 16, 40];

console.log(userAges.some(age => age < 18));   
console.log(userAges.every(age => age >= 18)); 
console.log(userAges.some(age => age % 5 === 0));

//exercises 7
let dataPoints = [42, 10, 500, 2, 77];

let ascending = [...dataPoints].sort((a, b) => a - b);
console.log(ascending); // [2, 10, 42, 77, 500]

let descending = [...dataPoints].sort((a, b) => b - a);
console.log(descending);

dataPoints.reverse();
console.log(dataPoints);

//exercises 8
let arr1 = ["A", "B"];
let arr2 = ["C", "D"];
let sentenceParts = ["Hello", "world", "this", "is", "great"];

let combined = arr1.concat(arr2);
console.log(combined);

let sentence = sentenceParts.join(" ");
console.log(sentence); 

let middle = sentenceParts.slice(1, 4);
console.log(middle); 

//exercises 9
let nestedList = [1, [2, 3], [4, [5, 6]], 7];

console.log(nestedList.flat());          
console.log(nestedList.flat(Infinity)); 

//exercises 10
let pricesUSD = [10.50, 20.00, 5.25];
const rate = 1.3;

let localPrices = pricesUSD.map(price => price * rate);
console.log(localPrices); 

let priceStrings = pricesUSD.map(price => `Item price: $${price.toFixed(2)}`);
console.log(priceStrings);

//exercises 11
let testScores = [45, 78, 92, 30, 65, 88];

let passing = testScores.filter(score => score >= 70);
console.log(passing); 

let average = testScores.reduce((sum, s) => sum + s, 0) / testScores.length;
let belowAverage = testScores.filter(score => score < average);
console.log(belowAverage); 

//exercises 12
{
  let pricesUSD = [10.50, 20.00, 5.25];

  let total = pricesUSD.reduce((sum, price) => sum + price, 0);
  console.log("Total cost:", total); 

  let maxPrice = pricesUSD.reduce((max, price) => price > max ? price : max, 0);
  console.log("Max price:", maxPrice); 

  let countOver15 = pricesUSD.reduce((count, price) => price > 15 ? count + 1 : count, 0);
  console.log("Prices over $15:", countOver15); 
}

//exercises 13
let users = [
  {name: "Zoe",     age: 30},
  {name: "Adam",    age: 25},
  {name: "Charlie", age: 30}
];

users.sort((a, b) => a.age - b.age);
console.log(users);

users.sort((a, b) => a.age - b.age || a.name.localeCompare(b.name));
console.log(users);

//exercises 14
let names = users.map(user => user.name);
console.log(names); 

let olderThan28 = users.filter(user => user.age > 28);
console.log(olderThan28); 

//exercises 15
let gameBoard = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
];

gameBoard[1][1] = 1; 
console.log(gameBoard[0][2]);

//exercises 16
for (let row = 0; row < gameBoard.length; row++) {
  for (let col = 0; col < gameBoard[row].length; col++) {
    console.log(`[${row}][${col}]: ${gameBoard[row][col]}`);
  }
}

let sum = 0;
for (let row of gameBoard) {
  for (let val of row) {
    sum += val;

  }
}
console.log("Sum:", sum); 

//Project 1: Student Result System
let students = [
  {name: "A", score: 85},
  {name: "B", score: 45},
  {name: "C", score: 92},
  {name: "D", score: 68}
];

let passed = students.filter(s => s.score >= 70);
console.log(passed);

let avg = students.reduce((sum, s) => sum + s.score, 0) / students.length;
console.log("Average:", avg); 

let topScorer = students.reduce((top, s) => s.score > top.score ? s : top);
console.log("Top scorer:", topScorer);

//Project 2: Shopping Cart
let cart = [
  {id: 1, name: "Shirt", price: 20, quantity: 2},
  {id: 2, name: "Pants", price: 50, quantity: 1}
];

let total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
console.log("Total:", total); 

cart = cart.map(item => item.id === 1 ? {...item, quantity: 3} : item);
console.log(cart);

cart = cart.filter(item => item.id !== 2);
console.log(cart);

//Challenge 1: Remove Duplicates
let data = [1, 5, 2, 8, 5, 1, 9, 2];

let uniqueData = data.filter((value, index) => data.indexOf(value) === index);
console.log(uniqueData);


//Challenge 3: Shallow vs Deep Copy
let company = [{name: "A", details: {city: "NY"}}];

let spreadCopy = [...company];
spreadCopy[0].details.city = "LA";
console.log(company[0].details.city);   
console.log(spreadCopy[0].details.city); 


let deepCopy = JSON.parse(JSON.stringify(company));
deepCopy[0].details.city = "Chicago";
console.log(company[0].details.city);
console.log(deepCopy[0].details.city);
//Challenge 2: Custom Reduce
function myReduce(array, callback, initialValue) {
  let accumulator = initialValue;
  for (let i = 0; i < array.length; i++) {
    accumulator = callback(accumulator, array[i], i, array);
  }
  return accumulator;
}

let summ = myReduce([1, 2, 3, 4, 5], (acc, val) => acc + val, 0);
console.log(summ);

//Final Challenge: Tic-Tac-Toe

let board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""]
];

board[0][0] = "X";
board[1][1] = "O";

function checkWin(board, player) {

  for (let row of board) {
    if (row.every(cell => cell === player)) return true;
  }

  for (let col = 0; col < 3; col++) {
    if (board.every(row => row[col] === player)) return true;
  }

  if (board[0][0] === player && board[1][1] === player && board[2][2] === player) return true;

  if (board[0][2] === player && board[1][1] === player && board[2][0] === player) return true;

  return false;
}

console.log(checkWin(board, "X")); 
console.log(checkWin(board, "O")); 