
// 20. In the following shopping cart add, remove, edit items
//     => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//     - add 'Meat' in the beginning of your shopping cart if it has not been already added
//     - add Sugar at the end of your shopping cart if it has not been already added
//     - remove 'Honey'
//     - modify Tea to 'Green Tea'

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
console.log("Meat add in the beginning");
shoppingCart.unshift("Meat");
console.log(shoppingCart);

// add sugar
console.log("Sugar add at the end");
shoppingCart.push("Sugar");
console.log(shoppingCart);

// remove Honey
console.log("Removed Honey");
shoppingCart.splice(4, 1);
console.log(shoppingCart);

// modify Tea to Green tea
console.log("Remove tea and add Green tea");
shoppingCart.splice(3, 1, "Green Tea");
console.log(shoppingCart);