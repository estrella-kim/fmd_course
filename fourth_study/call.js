function Product(name, price){
    this.name = name;
    this.price = price;
}
function Food(name, price){
    Product.call(this, name, price);
    this.category = 'food';
}
function Toy(name, price){
    Product.call(this, name, price);
    this.category = 'toy';
}

var cheese = new Food('festa', 55);
var fun = new Toy('robot', 40);


console.log(cheese);
console.log(fun);