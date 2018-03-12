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
	if (cart.length === 1) {
		return "In your cart, you have " + cart[0].itemName + " at $" + cart[0].itemPrice + "."
  } else if (cart.length === 2) {
		return "In your cart, you have " + cart[0].itemName + " at $" + cart[0].itemPrice + " and " + cart[1].itemName + " at $" + cart[1].itemPrice + ".";
  } else if (cart.length > 2) {
		var line = "In your cart, you have " + cart[0].itemName + " at $" + cart[0].itemPrice;
		for (var i = 1; i < cart.length - 1; i++) {
			line = line + ", " + cart[i].itemName + " at $" + cart[i].itemPrice;
    } return line + " and " + cart[cart.length - 1].itemName + " at $" + cart[cart.length - 1].itemPrice + ".";
  } else {
		return "Your shopping cart is empty.";
    }
}



function total() {
	if (cart.length <= 0) {
		return 0;
    } else if (cart.length > 0) {
		var cartTotal = 0;
		for (i = 0; i = cart.length; i++) {
			cartTotal = cartTotal + cart[i].itemPrice;
        } 
		return cartTotal;
    }
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
