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

// Define a mapping of product details
const productDetails = {
    /*Color papers and card product details*/
    "A4 Color Papers": {
        image: "product_photo/img_ColorPaperA4.jpg", 
        alt: "A4 Color Papers", 
        description: "A4 color papers that comes in multiple color choices.",
        price: 0.20
    },
    "A3 Color Papers": {
        image: "product_photo/img_ColorPaperA3.jpg", 
        alt: "A3 Color Papers", 
        description: "A3 color papers that comes in multiple color choices.",
        price: 0.25
    },
    "Vintage Stationary Papers": {
        image: "product_photo/img_VintagePaper.jpg", 
        alt: "Vintage Stationary Papers", 
        description: "Contains 8 sheets per pack. Perfect for cursive writing!",
        price: 1.70
    },
    "Birthday Cards": {
        image: "product_photo/img_BirthdayCards.jpg", 
        alt: "Birthday Cards", 
        description: "A gift for a special someone on a special day!",
        price: 1.50
    },
    "Greeting Cards": {
        image: "product_photo/img_GreetingCards.jpg", 
        alt: "Greeting Cards", 
        description: "Customizable greeting cards used for special occasions!",
        price: 1.50
    },

    /*Copier paper product details*/
    "A4 papers x 10": {
        image: "product_photo/img_A4(2).jpg", 
        alt: "A4 papers x 10", 
        description: "A pack containing 10 sheets of A4 papers.",
        price: 0.50
    },
    "A3 papers x 200": {
        image: "product_photo/img_A3.jpg", 
        alt: "A3 papers x 200", 
        description: "A pack containing 200 sheets of A3 papers.",
        price: 10.00
    },
    "A4 papers x 500": {
        image: "product_photo/img_A4.jpg", 
        alt: "A4 papers x 500", 
        description: "A pack containing 500 sheets of A4 papers.",
        price: 15.00
    },

    /*Label and Stickers product details*/
    "Stickers": {
        image: "product_photo/img_Stickers.jpg", 
        alt: "Stickers", 
        description: "Cute stickers to make something look unique",
        price: 0.50
    },
    "Warning Signs": {
        image: "product_photo/img_WarningSigns.jpg", 
        alt: "Warning Signs", 
        description: "Bright warning signs that'll catch anyone's attention.",
        price: 8.00
    },
    "Sticky Notepads": {
        image: "product_photo/img_StickyNotepad.jpg", 
        alt: "Sticky Notepads", 
        description: "Each pad contains 60 sheets. Comes with different colors!",
        price: 1.50
    },
    "Notepads": {
        image: "product_photo/img_Notepad.jpg", 
        alt: "Notepads", 
        description: "Your trusty go-to notepad. Contains 60 sheets.",
        price: 1.60
    },

    /*Pens product details*/
    "PILOT Gel Pen": {
        image: "product_photo/Pen1.jpg", 
        alt: "PILOT Gel Pen", 
        description: "Retractable long lasting gel ink, Refillable.",
        price: 4.30
    },
    "FABER-CASTELL 1.0MM Ball Pen": {
        image: "product_photo/Pen2.jpg", 
        alt: "FABER-CASTELL 1.0MM Ball Pen", 
        description: "Retractable pen, Super smooth.",
        price: 1.15
    },
    "Fisher Space Pen": {
        image: "product_photo/Pen3.webp", 
        alt: "Fisher Space Pen", 
        description: "Medium tip, Weight 20 g.",
        price: 300.00
    },
    "Uni-Ball Signo Um-151 Gel Ink Pen": {
        image: "product_photo/Pen4.jpg", 
        alt: "Uni-Ball Signo Um-151 Gel Ink Pen", 
        description: "Smooth and easy to write .",
        price: 18.00
    },
    "Pilot BP-1 -RT Ball Pen": {
        image: "product_photo/Pen5.webp", 
        alt: "Pilot BP-1 -RT Ball Pen", 
        description: "Fine Tip, Size: 0.7mm.",
        price: 5.60
    },
    "PB Pen": {
        image: "product_photo/Pen6.jpg", 
        alt: "PB Pen", 
        description: "Three inks in one pen.",
        price: 5.00
    },
    "DELI THINK Black Ball Pen": {
        image: "product_photo/Pen7.avif", 
        alt: "DELI THINK Black Ball Pen", 
        description: "Best for students uses.",
        price: 2.50
    },
    "Candy Color Press Gel Pen": {
        image: "product_photo/Pen8.webp", 
        alt: "Candy Color Press Gel Pen", 
        description: "For learning , office use.",
        price: 5.40
    },
    "Vigorous Fruit Silicone Gel Pen": {
        image: "product_photo/Pen9.avif", 
        alt: "Vigorous Fruit Silicone Gel Pen", 
        description: "Fruit cartoon on top.",
        price: 6.00
    },

    /*Pencils product details*/
    "Lala Pencils": {
        image: "product_photo/Pencils1.avif", 
        alt: "Lala Pencils", 
        description: "#",
        price: 3.00
    },
    "HPY Pencils": {
        image: "product_photo/Pencils2.avif", 
        alt: "HPY Pencils", 
        description: "#",
        price: 2.50
    },
    "DIXON Ticonderoga Pencils": {
        image: "product_photo/Pencils3.webp", 
        alt: "DIXON Ticonderoga Pencils", 
        description: "#",
        price: 2.99
    },
    "P Pencils": {
        image: "product_photo/Pencils4.jpg", 
        alt: "P Pencils", 
        description: "#",
        price: 1.50
    },
    "Staedtler Noris 120 2B Pencils": {
        image: "product_photo/Pencils5.jpg", 
        alt: "Staedtler Noris 120 2B Pencils", 
        description: "#",
        price: 1.30
    },
    "Natraj Pencil": {
        image: "product_photo/Pencils6.jpg", 
        alt: "Natraj Pencil", 
        description: "#",
        price: 0.60
    },

    /*Marker product details*/
    "ARTLINE 700 Permanent Marker Pen": {
        image: "product_photo/mp1.jpg", 
        alt: "ARTLINE 700 Permanent Marker Pen", 
        description: "Width of 0.7mm.",
        price: 6.50
    },
    "ARTLINE 500A Whiteboard Marker Pen": {
        image: "product_photo/mp2.jpg", 
        alt: "ARTLINE 500A Whiteboard Marker Pen", 
        description: "Line Width : 2.0mm, Nib Type : Bullet.",
        price: 3.40
    },
    "NISO 500 Whiteboard Marker Pen": {
        image: "product_photo/mp3.webp", 
        alt: "NISO 500 Whiteboard Marker Pen", 
        description: "Smooth and easy to be rub.",
        price: 3.50
    },
    "Jingxin Whiteboard Marker Pen": {
        image: "product_photo/mp4.jpg", 
        alt: "Jingxin Whiteboard Marker Pen", 
        description: "Made in China.o7",
        price: 6.50
    },
    "M&G White Board Marker Pen": {
        image: "product_photo/mp5.jpg", 
        alt: "M&G White Board Marker Pen", 
        description: "Thick, smooth, whiteboard use.",
        price: 5.00
    },
    "Camlin Whiteboard Marker Pen": {
        image: "product_photo/mp6.jpg", 
        alt: "Camlin Whiteboard Marker Pen", 
        description: "Thick ink.",
        price: 6.30
    },

    /*Files product details*/
    "A4 Clipboard Folder Clip File": {
        image: "product_photo/file1.jpg", 
        alt: "A4 Clipboard Folder Clip File", 
        description: "Folder Clipboard Office Document Organizer Horizontal Vertical Paper Folder.",
        price: 3.99
    },
    "SSD A4 Management File": {
        image: "product_photo/file2.jpg", 
        alt: "SSD A4 Management File", 
        description: "Extra Thick.",
        price: 0.90
    },
    "Lion File Lever Arch File": {
        image: "product_photo/file3.jpg", 
        alt: "Lion File Lever Arch File", 
        description: "Suitable for office use.",
        price: 4.50
    },
    "A5 Clear Book 20": {
        image: "product_photo/file4.jpg", 
        alt: "A5 Clear Book 20", 
        description: "Clear Holder/Plastic File.",
        price: 4.60
    },
    "Astar A3 Clear Holder File": {
        image: "product_photo/file5.jpg", 
        alt: "Astar A3 Clear Holder File", 
        description: "Big Space and Size.",
        price: 13.25
    },
    "A4 Paper File favorites Folder": {
        image: "product_photo/file6.jpg", 
        alt: "A4 Paper File favorites Folder.", 
        description: "Toughness.",
        price: 0.90
    },
    "ABBA FILE 2D 25MM": {
        image: "product_photo/file7.jpg", 
        alt: "ABBA FILE 2D 25MM", 
        description: "More Durable.",
        price: 5.00
    },
    "A6 12 Pockets Expanding Accordion Clip File Folder": {
        image: "product_photo/file8.jpg", 
        alt: "A6 12 Pockets Expanding Accordion Clip File Folder", 
        description: "Can Arrange Documents In Order And Clearly.",
        price: 6.84
    },
    "Morandi A4 Double Clip Multi-Functional Plastic File Folder": {
        image: "product_photo/file9.jpg", 
        alt: "Morandi A4 Double Clip Multi-Functional Plastic File Folder.", 
        description: "Multi-Functionality",
        price: 6.60
    },

    /*Highlighter product details*/
    "Pastel Highlighter Classic Troika Lator": {
        image: "product_photo/highlighter1.jpg", 
        alt: "Pastel Highlighter Classic Troika Lator", 
        description: "Visual Aesthetics.",
        price: 1.00
    },
    "Box High-Value Color Half-Sugar Highlighter": {
        image: "product_photo/highlighter2.jpg", 
        alt: "Box High-Value Color Half-Sugar Highlighter", 
        description: "Reduced Eye Strain.",
        price: 8.90
    },
    "Imoda Morandi Colored Fluorescent Pen Marker Highlighter": {
        image: "product_photo/highlighter3.jpg", 
        alt: "Imoda Morandi Colored Fluorescent Pen Marker Highlighter", 
        description: "Suitable for student use.",
        price: 4.60
    },
    "Pilot Spotliter Highlighter Chisel Point": {
        image: "product_photo/highlighter4.jpg", 
        alt: "Pilot Spotliter Highlighter Chisel Point", 
        description: "Efficient Highlighting.",
        price: 2.90
    },
    "Faber-Castell Textliner 38 Highlighter": {
        image: "product_photo/highlighter5.jpg", 
        alt: "Faber-Castell Textliner 38 Highlighter ", 
        description: "Smudge-Proof and Quick Drying.",
        price: 2.40
    },
    "Stabilo Boss Original Highlighter": {
        image: "product_photo/highlighter6.jpg", 
        alt: "Stabilo Boss Original Highlighter", 
        description: "High-Quality Ink.",
        price: 3.60
    },

    /*Whiteboard and noticeboard product details*/
    "Frambie Memo Board A2 Notice Cork Board For Notice": {
        image: "product_photo/w1.jpg", 
        alt: "Frambie Memo Board A2 Notice Cork Board For Notice", 
        description: "Reusable and Eco-Friendly.",
        price: 75.90
    },
    "Single Sided Magnetic Whiteboard (60cmx45cm)": {
        image: "product_photo/w2.jpg", 
        alt: "Single Sided Magnetic Whiteboard (60cmx45cm)", 
        description: "Magnetic Surface.",
        price: 39.00
    },
    "Aluminium Frame Soft Notice Board (1.5'x2')": {
        image: "product_photo/w3.jpg", 
        alt: "Aluminium Frame Soft Notice Board (1.5'x2')", 
        description: "Durable and Sturdy.",
        price: 36.00
    },
    "Velcro Notice Board (1.5'x2')": {
        image: "product_photo/w4.jpg", 
        alt: "Velcro Notice Board (1.5'x2')",
        description: "Easy Attachment and Removal.",
        price: 54.00
    },
    "Nordic Style rectangular Felt Letter Board": {
        image: "product_photo/w5.jpg", 
        alt: "Nordic Style rectangular Felt Letter Board", 
        description: "Instagrammable.",
        price: 4.58
    },
    "Whiteboard A3 With Wood Frame": {
        image: "product_photo/w6.jpg", 
        alt: "Whiteboard A3 With Wood Frame", 
        description: "Writing and Erasability.",
        price: 12.90
    },

    /*Mathematics Instrument product details*/
    "Mathematical Instruments": {
        image: "product_photo/instrument1.jpg", 
        alt: "Mathematical Instruments", 
        description: "Great eddiciency, great result.",
        price: 8.00
    },
    "Pencil Sharpener": {
        image: "product_photo/instrument2.jpg", 
        alt: "Pencil Sharpener", 
        description: "Goodbye to frustration and hello to sharp, smooth lines.",
        price: 2.00
    },
    "Drawing Compass": {
        image: "product_photo/instrument3.jpg", 
        alt: "Drawing Compass", 
        description: "Ultimate tool for crafting precise circles and arcs effortlessly",
        price: 3.00
    },
    "15cm Ruler": {
        image: "product_photo/instrument4.jpg", 
        alt: "15cm Ruler", 
        description: "Reliable partner for accurate measurements.",
        price: 1.30
    },
    "180° Protractor": {
        image: "product_photo/instrument5.jpg", 
        alt: "180° Protractor", 
        description: "Essential tool for students, engineers, and professionals alike",
        price: 2.90
    },
    "Square Ruler": {
        image: "product_photo/instrument6.jpg", 
        alt: "Square Ruler", 
        description: "Cornerstone of precise measurements!",
        price: 7.00
    },

    /*Hole puncher product details*/
    "Single Hole Puncher": {
        image: "product_photo/puncher1.jpg", 
        alt: "Single Hole Puncher", 
        description: "Compact and efficient.",
        price: 8.60
    },
    "Mini Single Hole Puncher": {
        image: "product_photo/puncher2.jpg", 
        alt: "Mini Single Hole Puncher", 
        description: "Light and useful.",
        price: 4.98
    },
    "30 Holes Loose-leaf Puncher": {
        image: "product_photo/puncher3.jpg", 
        alt: "30 Holes Loose-leaf Puncher", 
        description: "Designed for efficiency and versatility",
        price: 69.99
    },
    "6 Holes Loose-leaf Puncher": {
        image: "product_photo/puncher4.jpeg", 
        alt: "6 Holes Loose-leaf Puncher", 
        description: "Effortlessly prepare your sheets for binding.",
        price: 33.90
    },
    "Double Hole Puncher": {
        image: "product_photo/puncher5.jpg", 
        alt: "Double Hole Puncher", 
        description: "Double holes, double efficient.",
        price: 4.99
    },
    "Eyelet Puncher": {
        image: "product_photo/puncher6.jpg", 
        alt: "Eyelet Puncher", 
        description: "Adding durability and a professional finish.",
        price: 6.90
    },

    /*Stationary sets product details*/
    "Exam stationary set": {
        image: "product_photo/stationarySet1.jpg", 
        alt: "Exam stationary set", 
        description: "Designed to cater to all your exam needs.",
        price: 2.30
    },
    "Architect multifuntions stationary set": {
        image: "product_photo/stationarySet2.jpg", 
        alt: "Architect multifuntions stationary set", 
        description: "Unlock your design potential today!",
        price: 6.99
    },
    "Erasable pen stationary set": {
        image: "product_photo/stationarySet3.jpg", 
        alt: "Erasable pen stationary set", 
        description: "Hello to clean, flawless documents.",
        price: 6.60
    },
    "2B pencil stationary set": {
        image: "product_photo/stationarySet4.jpg", 
        alt: "2B pencil stationary set", 
        description: "Perfect balance of darkness and smoothness.",
        price: 3.50
    },
    "Colour pencil stationary set": {
        image: "product_photo/stationarySet5.jpg", 
        alt: "Colour pencil stationary set", 
        description: "Ignite your imagination with our vibrant color.",
        price: 4.99
    },
    "Drawing stationary set": {
        image: "product_photo/stationarySet6.png", 
        alt: "Drawing stationary set", 
        description: "high-quality pencils offers a range of grades.",
        price: 24.99
    },

    /*
    Product details template:
    "": {
        image: "", 
        alt: "", 
        description: "",
        price: 
    },
    */
    //(add more product here)
};

// Retrieve cart data from localStorage and display it on the cart page
document.addEventListener("DOMContentLoaded", function () {
    const cartItemsList = document.getElementById("cart-items");
    let cart = JSON.parse(localStorage.getItem("cart")) || {};

    let totalSum = 0; // Initialize a variable to store the total sum

    for (const productName in cart) {
        const cartItemRow = document.createElement("tr");

        const productNameCell = document.createElement("td");
        productNameCell.textContent = productName;
        cartItemRow.appendChild(productNameCell);

        // Retrieve product details based on productName
        const product = productDetails[productName] || {};
        const productImage = product.image || ""; // Provide a default image URL
        const productAlt = product.alt || ""; // Provide an alt for the image
        const productDescription = product.description || ""; // Provide a default description
        const productPrice = product.price ? `$${product.price.toFixed(2)}` : "";
        const productQuantity = cart[productName] || 1; // Use user input or default to 1

        const productImageCell = document.createElement("td");
        const imageElement = document.createElement("img");
        imageElement.src = productImage;
        imageElement.alt = productAlt; // Set the alt attribute to the product name
        productImageCell.appendChild(imageElement);
        cartItemRow.appendChild(productImageCell);

        const productDescriptionCell = document.createElement("td");
        productDescriptionCell.textContent = productDescription;
        cartItemRow.appendChild(productDescriptionCell);

        const productPriceCell = document.createElement("td");
        productPriceCell.textContent = productPrice;
        cartItemRow.appendChild(productPriceCell);

        // Add a new column for the quantity
        const quantityInputCell = document.createElement("td");
        const quantityInput = document.createElement("input");
        quantityInput.type = "number";
        quantityInput.value = productQuantity;
        quantityInput.min = "1";

        // Attach an event listener to update the quantity in localStorage and total price when the input changes
        quantityInput.addEventListener("change", function () {
            const newQuantity = parseInt(quantityInput.value);
            cart[productName] = newQuantity;
            localStorage.setItem("cart", JSON.stringify(cart));

            // Update the total price when the quantity changes
            const total = (product.price || 0) * newQuantity;
            totalPriceCell.textContent = `$${total.toFixed(2)}`;

            // Recalculate the total sum when quantity changes
            recalculateTotalSum();
        });

        quantityInputCell.appendChild(quantityInput);
        cartItemRow.appendChild(quantityInputCell);

        // Add a new column for the total price
        const totalPriceCell = document.createElement("td");
        const total = (product.price || 0) * cart[productName];
        totalPriceCell.textContent = `$${total.toFixed(2)}`;
        cartItemRow.appendChild(totalPriceCell);

        cartItemsList.appendChild(cartItemRow);

        // Calculate the total sum as products are added
        totalSum += total;
    }

    // Create a new row for displaying the total sum
    const totalSumRow = document.createElement("tr");
    const totalSumLabelCell = document.createElement("td");
    totalSumLabelCell.textContent = "Total Sum:";
    totalSumLabelCell.colSpan = 5; // Span the label cell across 5 columns
    totalSumRow.appendChild(totalSumLabelCell);

    const totalSumValueCell = document.createElement("td");
    totalSumValueCell.textContent = `$${totalSum.toFixed(2)}`;
    totalSumRow.appendChild(totalSumValueCell);

    cartItemsList.appendChild(totalSumRow);

    // Function to recalculate the total sum
    function recalculateTotalSum() {
        totalSum = 0;
        for (const productName in cart) {
            const product = productDetails[productName] || {};
            const newQuantity = cart[productName] || 1;
            const total = (product.price || 0) * newQuantity;
            totalSum += total;
        }
        totalSumValueCell.textContent = `$${totalSum.toFixed(2)}`;
    }

    // Initial total sum calculation
    recalculateTotalSum();
});

window.onload = init;
function init() {
    document.getElementById("delivery").onclick = turnOnDelivery;
    document.getElementById("pickup").onclick= turnOffDelivery;
 }

function turnOnDelivery() {
    document.getElementById("custInfo").disabled=false;
 }

 function turnOffDelivery() {
    document.getElementById("custInfo").disabled=true;
 }
