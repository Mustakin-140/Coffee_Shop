function addToCart() {
    alert("Item added to the cart");
  }

  // Select all the cart icons
  const cartIcons = document.querySelectorAll('.fa-cart-shopping');

  // Add a click event listener to each icon
  cartIcons.forEach(icon => {
    icon.addEventListener('click', fa-cart-shopping);
  });