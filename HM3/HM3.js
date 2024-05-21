//N1

// let shoppingList = [
//   { name: "Apple", quantity: 100, bought: false },
//   { name: "Orange", quantity: 45, bought: true },
//   { name: "Banana", quantity: 140, bought: false },
//   { name: "Cucumber", quantity: 30, bought: true },
//   { name: "Watermelon", quantity: 60, bought: false },
// ];

// function AllInfo() {
//   shoppingList.sort((a, b) => a.bought - b.bought);
//   shoppingList.forEach((element) => {
//     console.log(
//       `${element.name} - ${element.quantity} (${
//         element.bought ? "куплено" : "не куплено"
//       })`
//     );
//   });
// }

// function ProductBouth(name) {
//   let checkfru = shoppingList.find((item) => item.name === name);

//   if (checkfru) {
//     if (!checkfru.bought) {
//       checkfru.bought = true;
//       console.log(`${checkfru.name} был отмечен как купленный.`);
//     } else {
//       console.log(`${name} уже куплен.`);
//     }
//   }
//   if (!checkfru) {
//     console.log("Этого продукта нет в списке покупок.");
//   }
// }

// function AddProduct(name, quantity) {
//   let existingProduct = shoppingList.find((item) => item.name === name);

//   if (existingProduct) {
//     existingProduct.quantity += quantity;
//     console.log(
//       `${name} Увеличино его количество. Теперь его количество: ${existingProduct.quantity}`
//     );
//   } else {
//     shoppingList.push({ name: name, quantity: quantity, bought: false });
//     console.log(`${name} был добавлен в список покупок.`);
//   }
// }

// ProductBouth("Apple");
// AddProduct("Tomato", 40);
// AllInfo();

//N2

// let check = [
//   { name: "Chocolate", quantity: 70, price: 2.5 },
//   { name: "Apple", quantity: 70, price: 0.5 },
// ];

// function AllInfo() {
//   check.forEach((element) => {
//     console.log(`${element.name} - ${element.quantity} - ${element.price}`);
//   });
// }

// function CheckInfo(name, quantity, price) {
//   let nameCheck = check.find(
//     (item) => item.name.toLowerCase() === name.toLowerCase()
//   );

//   let priceCheck = check.find((item) => item.price === price);

//   if (nameCheck && priceCheck) {
//     let res = quantity * price;
//     console.log(`Total Amount: ${res}`);
//   }
//   if (!nameCheck) {
//     console.log(`${name} this product does not exist`);
//   }
//   if (!priceCheck) {
//     console.log(`The price of the product is incorrect`);
//   }
// }

// function StaticRange(name) {
//   let priceCheck = check.find((item) => item.name === name);

//   if (priceCheck) {
//     let result = priceCheck.quantity * priceCheck.price;
//     console.log(`average cost of goods in receipt ${result / 2}`);
//   }
// }

// function ExpensiveProduct() {
//   let maxPrice = check[0].price;
//   let maxName = check[0].name;

//   for (let i = 1; i < check.length; i++) {
//     if (check[i].price > maxPrice) {
//       maxPrice = check[i].price;
//       maxName = check[i].name;
//     }
//   }
//   console.log(`The most expensive purchase is: ${maxName} - ${maxPrice}`);
// }

// AllInfo();
// CheckInfo("Apple", 10, 2.5);
// ExpensiveProduct();
// StaticRange("Apple");

//N3

let styles = [
  {
    key: "style",
    value: "color:green;font-size:25px;float:left;text-decoration:underline;",
  },
];

document.open();
for (const style of styles) {
  document.write(`<h1 style="${style.value}">${style.key}</h1>`);
}
document.close();
