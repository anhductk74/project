const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const success = document.querySelector("#success");
const errorNodes = document.querySelectorAll(".error");

let cartIcon = document.querySelector('.yourcart') 
// #lg-bag
// .cart
// if (bar) {
//     bar.addEventListener("click", () => {
//         nav.add("active");
//     })
// }
function showMenu(){
	nav.style.right = "0";
}
function hideMenu(){
	nav.style.right = "-300px";
}

//Validate data
function validateForm(){
	clearMessages();

	if(!nameInput.value){
		errorNodes[0].innerText = "Name cannot be blank";
		nameInput.classList.remove("input-border");
		nameInput.classList.add("error-border");
		nameInput.focus();
	}
}

function clearMessages(){
	for(let i = 0; i < errorNodes.length; i++){
		errorNodes[i].innerText = "";
	}
	nameInput.classList.remove("error-border");
}

//Cart Working
if(document.readyState == 'loading'){
	document.addEventListener("DOMContentLoaded",ready);
} else {
	ready();
}

//Making function
function ready(){
	//remove items from cart
	var removeCartButton = document.getElementsByClassName('fa-trash-can')
	console.log(removeCartButton)
	for(var i = 0; i < removeCartButton.length; i++){
		var button = removeCartButton[i]
		button.addEventListener("click", removeCartItem);
	}
	// Quantity Changes
	var quantityInputs = document.getElementsByClassName('cart-quantity')
	for(var i = 0; i < quantityInputs.length; i++){
		var input = quantityInputs[i];
		input.addEventListener("change",quantityChanged);
	}
	//Add To Cart
	var addCart = document.getElementsByClassName('fa-bag-shopping cart')
	for(var i = 0; i < addCart.length; i++){
		var button = addCart[i];
		button.addEventListener("click", addCartClicked);
	}
}

//remove items from cart
function removeCartItem(event){
	var buttonClicked = event.target;
	buttonClicked.parentElement.remove();
	updateTotal();
}
//Quantity Changes
function quantityChanged(event){
	var input = event.target;
	if(isNaN(input.value) || input.value <= 0){
		input.value = 1;
	}
	updateTotal();
}

//Buy Button Cart
document.getElementsByClassName("btn-buy")[0].addEventListener("click", buyButtonClicked);

//Buy Button
function buyButtonClicked(){
	alert("Your Order is placed");
	var cartContent = document.getElementsByClassName('cart-content')[0]
	while (cartContent.hasChildNodes()) {
		cartContent.removeChild(cartContent.firstChild);
	}
	updateTotal();
}

//update total
function updateTotal(){
	var carContent = document.getElementsByClassName('cart-content')[0];
	var cartBoxes = carContent.getElementsByClassName('cart-box');
	var total = 0;
	for (var i = 0; i < cartBoxes.length; i++) {
		var cartBox = cartBoxes[i];
		var priceElement = cartBox.getElementsByClassName('cart-price')[0];
		var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
		var price = parseFloat(priceElement.innerText.replace("$",""));
		var quantity = quantityElement.value;
		total = total + price * quantity;
	}
		//If price contain some cents value
		total = Math.round(total * 100) / 100;

		document.getElementsByClassName('total-price')[0].innerText = '$' + total;
	
}

//Signin Page
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const signinBox = document.querySelector(".signin-box")
const sign_in_btn2 = document.querySelector("#sign-in-btn2");
const sign_up_btn2 = document.querySelector("#sign-up-btn2");

sign_up_btn.addEventListener("click", () =>{
	signinBox.classList.add("sign-up-mode");
});
sign_in_btn.addEventListener("click", () =>{
	signinBox.classList.remove("sign-up-mode");
});
sign_up_btn2.addEventListener("click", () => {
	signinBox.classList.add("sign-up-mode2");
});
sign_in_btn2.addEventListener("click", () => {
	signinBox.classList.remove("sign-up-mode2");
});