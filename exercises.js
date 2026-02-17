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

