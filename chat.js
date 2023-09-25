// Get DOM elements
const userInput = document.getElementById("user-input");
const chatLog = document.getElementById("chat-log");
const sendButton = document.getElementById("send-button");
const chatCircle = document.getElementById("chat-circle");
const chatContainer = document.getElementById("chat-container");
const closeButton = document.getElementById("close-button");

// Event listener for showing/hiding the chat container
chatCircle.addEventListener("click", () => {
    if (chatContainer.style.display === "none" || chatContainer.style.display === "") {
        chatContainer.style.display = "block";
    } else {
        chatContainer.style.display = "none";
    }
});

// Event listener for closing the chatbox
closeButton.addEventListener("click", () => {
    chatContainer.style.display = "none"; // Hide the chatbox when the close button is clicked
});

// Event listener for sending messages
sendButton.addEventListener("click", () => {
    const userMessage = userInput.value.trim();
    if (userMessage !== "") {
        displayMessage("You", userMessage);
        userInput.value = "";

        // Simulate bot response
        simulateBotResponse(userMessage);
    }
});

// Simulate a bot response
function simulateBotResponse(userMessage) {
    // Simulate a delayed response to make it feel more natural
    setTimeout(() => {
        const botMessage = generateBotResponse(userMessage);
        displayMessage("Bot", botMessage);
    }, 1000);
}

// Generate a bot response based on user input
function generateBotResponse(userMessage) {
    // Define some sample responses based on user input
    const responses = {
        "hello": "Hello! How can I assist you today?😃",
        "hi": "HI ! How can I assist you today?😁",   
        "how are you": "I'm just a bot, but thanks for asking! How can I help?",
        "product recommendation": "Sure, I can help you with product recommendations. What type of product are you looking for?",
        "promotion": "If you want further information for promotion, you can select the promotion at the header.We are now having great value promotion",
        "store name": "Our store name is called Paper Bliss❤️. You can follow our social media for more information you need.",
        "pencil": "If you want to find further information about the pencils, you can select the categories at the header or jump to this link  : http://127.0.0.1:5500/pencils.html",
        "bye":"Bye !! Have a nice day !",
    };

    // Check if the user's message matches any predefined responses
    const lowerCaseUserMessage = userMessage.toLowerCase();
    for (const key in responses) {
        if (lowerCaseUserMessage.includes(key)) {
            return responses[key];
        }
    }

    // If no predefined response matches, provide a default response
    return "I'm sorry, I couldn't understand that. Please try asking in a different way.";
}

// Function to display messages in the chat log
function displayMessage(sender, message) {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add(sender === "You" ? "user-message" : "bot-message");
    messageDiv.textContent = `${sender}: ${message}`;
    chatLog.appendChild(messageDiv);
}
