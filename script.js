document.addEventListener("DOMContentLoaded", function () {
    const addToCartButtons = document.querySelectorAll(".addtocart-button");

    addToCartButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const product = button.parentElement;
            const productName = product.querySelector(".product-name").textContent;
            const productPrice = parseFloat(product.querySelector(".product-price").textContent.replace("RM", ""));
            const quantityInput = product.querySelector(".qtys");
            const quantity = parseInt(quantityInput.value);

            if (quantity <= 0) {
                alert("Please select a quantity greater than 0.");
                return;
            }

            // Get the existing cart data from localStorage
            let cart = JSON.parse(localStorage.getItem("cart")) || {};

            // Update the cart data with the new quantity or add a new product
            cart[productName] = (cart[productName] || 0) + quantity;

            // Store the updated cart data back in localStorage
            localStorage.setItem("cart", JSON.stringify(cart));

            // Update the cart icon in the header
            updateCartIcon();
        });
    });

    // Function to update the cart icon in the header
    function updateCartIcon() {
        const cartIcon = document.querySelector(".cart-icon");
        const cart = JSON.parse(localStorage.getItem("cart")) || {};

        // Calculate the total quantity of items in the cart
        const totalQuantity = Object.values(cart).reduce((total, quantity) => total + quantity, 0);

        // Update the cart icon text with the total quantity
        cartIcon.textContent = totalQuantity;
    }

    // Initialize the cart icon when the page loads
    updateCartIcon();
});

// Function to clear the cart data if all relevant pages are closed
function clearCartIfAllClosed() {
    // Check if the shared variable is 0, indicating all relevant pages are closed
    if (localStorage.getItem("openPages") === "0") {
        localStorage.removeItem("cart"); // Clear the cart data
    }
}

// Initialize the shared variable when this page is loaded
if (!localStorage.getItem("openPages")) {
    localStorage.setItem("openPages", "1");
} else {
    localStorage.setItem("openPages", (parseInt(localStorage.getItem("openPages")) + 1).toString());
}

// Attach the clearCartIfAllClosed function to the beforeunload event
window.addEventListener("beforeunload", function () {
    localStorage.setItem("openPages", (parseInt(localStorage.getItem("openPages")) - 1).toString());
    clearCartIfAllClosed();
});
