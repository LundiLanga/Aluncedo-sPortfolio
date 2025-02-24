//contant variables for chat window(chat icon, and chat messages(chat body))
function toggleChat() {
    const chatWindow = document.getElementById("chat-window");
    const chatMessages = document.getElementById("messages");

    // Toggle chat window visibility
    if (chatWindow.style.display === "none" || chatWindow.style.display === "") {
        chatWindow.style.display = "flex"; // Open chat window
    } else {
        chatWindow.style.display = "none"; // Close chat window
        chatMessages.innerHTML = ""; // Clear only the chat messages
    }
}

// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    const sendBtn = document.getElementById('sendBtn');
    const userInput = document.getElementById('userInput');
    const messages = document.getElementById('messages');

    // Send a user message to the chatbot
    sendBtn.addEventListener('click', () => handleUserMessage());

    // Pressing Enter triggers message sending
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleUserMessage();
    });

    function handleUserMessage() {
        const userText = userInput.value.trim();
        if (userText) {
            addMessage(userText, 'user-message');
            userInput.value = '';
            respondToUser(userText.toLowerCase());
        }
    }
    
    function addMessage(text, className) {
        const messageElement = document.createElement('div');
        messageElement.className = `message ${className}`;
        messageElement.textContent = text;
        messages.appendChild(messageElement);
        messages.scrollTop = messages.scrollHeight; // Auto-scroll
    
    }

    function respondToUser(userText) {
        let botResponse;
        
        switch (true) {
            case /hello|hi|hey/.test(userText):
                botResponse = "Hello! How can I assist you today?";
                break;
            case /portfolio|about you/.test(userText):
                botResponse = "I’m Aluncedo Langa, a passionate software developer. Check out my skills and projects!";
                break;
            case /cloud|virtualisation/.test(userText):
                botResponse = "I have experience with Microsoft Azure, AWS, and virtualization solutions!";
                break;
            case /contact/.test(userText):
                botResponse = "You can reach me at alulundilanga@gmail.com or connect with me on LinkedIn.";
                break;
            default:
                botResponse = "Sorry, I didn't understand that. Could you please rephrase?";
        }
        setTimeout(() => {
         addMessage(botResponse, 'bot-message');  
        },2000);
        
    }
});
