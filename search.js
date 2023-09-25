document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.querySelector(".searchbar");
  const searchButton = document.querySelector(".search_button");

  searchButton.addEventListener("click", function () {
    performSearch();
  });

  searchInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      performSearch();
    }
  });

  function performSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    const productNames = document.querySelectorAll(".product-name");

    productNames.forEach(function (product) {
      const productName = product.textContent.toLowerCase();
      const productContainer = product.closest(".stationary");

      if (productName.includes(searchTerm)) {
        productContainer.style.display = "block";
      } else {
        productContainer.style.display = "none";
      }
    });

    // Search within other HTML pages
    searchOtherPages(searchTerm);
  }

  async function searchOtherPages(searchTerm) {
    const pagesToSearch = ["Aboutus.html", "Promotion.html", "pen.html","whiteboardandnoticeboard.html", "marker.html"]; // Add other page URLs here

    for (const page of pagesToSearch) {
      const response = await fetch(page);
      if (response.ok) {
        const pageContent = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(pageContent, "text/html");

        const productNames = doc.querySelectorAll(".product-name");
        productNames.forEach(function (product) {
          const productName = product.textContent.toLowerCase();
          const productContainer = product.closest(".stationary");

          if (productName.includes(searchTerm)) {
            productContainer.style.display = "block";
          }
        });
      }
    }
  }

   // Function to perform the search
   function performSearch() {
    const searchTerm = searchInput.value.toLowerCase();

    // Check if the search term matches a keyword for a specific page
    if (searchTerm === "marker") {
      window.location.href = "marker.html";
    }
    if (searchTerm === "marker pen") {
      window.location.href = "marker.html";
    }
    else if(searchTerm === "pen"){
      window.location.href = "pen.html";
    } 
    else if(searchTerm === "pencils"){
      window.location.href = "pencils.html";
    } 
    else if(searchTerm === "highlighter"){
      window.location.href = "highlighter.html";
    } 
    else if(searchTerm === "files"){
      window.location.href = "files.html";
    } 
    else if(searchTerm === "label and stickers"){
      window.location.href = "LabelsAndStickers.html";
    } 
    else if(searchTerm === "label"){
      window.location.href = "LabelsAndStickers.html";
    } 
    else if(searchTerm === "stickers"){
      window.location.href = "LabelsAndStickers.html";
    } 
    else if(searchTerm === "papers"){
      window.location.href = "CopierPaper.html";
    } 
    else if(searchTerm === "copier paper"){
      window.location.href = "CopierPaper.html";
    } 
    else if(searchTerm === "whiteboard"){
      window.location.href = "whiteboardandnoticeboard.html";
    } 
    else if(searchTerm === "whiteboard and noticeboard"){
      window.location.href = "whiteboardandnoticeboard.html";
    } 
    else if(searchTerm === "notice board"){
      window.location.href = "whiteboardandnoticeboard.html";
    } 
    else if(searchTerm === "stationary set"){
      window.location.href = "stationarySets.html";
    } 
    else if(searchTerm === "Mathematical instruments"){
      window.location.href = "MathematicalInstruments.html";
    } 
    else if(searchTerm === "hole puncher"){
      window.location.href = "holePuncher.html";
    } 
    else {
      alert("No results found for: " + searchTerm);
    }
  }
});
