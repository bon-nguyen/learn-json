const faker = require("faker");

// Set local to use Vietnamese
faker.locale = "vi";

// Random data

console.log(faker.commerce.department());
console.log(faker.commerce.productName());
console.log(faker.image.imageUrl());