var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 cart.push({
   itemName: item,
   itemPrice: Math.floor(Math.random() * 100)
 })
 return item + " has been added to your cart."
}

function viewCart() {
	var cartLength = cart.length;
  var line = "In your cart, you have " + cart[0].itemName + " at $" + cart[0].itemPrice;
	if (cartLength === 1) {
		return line + "."
  } else if (cartLength === 2) {
		return line + " and " + cart[1].itemName + " at $" + cart[1].itemPrice + ".";
  } else if (cartLength > 2) {
		for (var i = 1; i < cartLength - 1; i++) {
			line = line + ", " + cart[i].itemName + " at $" + cart[i].itemPrice;
    } return line + ", and " + cart[cartLength - 1].itemName + " at $" + cart[cartLength - 1].itemPrice + ".";
  } else {
		return "Your shopping cart is empty.";
    }
}



function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
