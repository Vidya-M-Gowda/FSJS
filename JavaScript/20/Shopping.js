// //In the following shopping cart add, remove, edit items
// => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// - add 'Meat' in the beginning of your shopping cart if it has not been already added
// - add Sugar at the end of your shopping cart if it has not been already added
// - remove 'Honey'
// - modify Tea to 'Green Tea'

const shoppingCart = ['Milk','Coffee','Tea','Honey']
console.log(shoppingCart);

shoppingCart.unshift('Meat');
console.log(shoppingCart);

shoppingCart.push('Sugar')
console.log(shoppingCart);

var index = shoppingCart.indexOf('Tea')
if (~index){
    shoppingCart[index] = 'Green Tea'
}
console.log(shoppingCart);

const array = shoppingCart.splice(4,1)
console.log(shoppingCart);