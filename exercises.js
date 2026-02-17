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