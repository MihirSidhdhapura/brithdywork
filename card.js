// // Array of surprise messages
// const messages = [
//     "🎉 You are the star of the day! Shine bright! ✨",
//     "🎂 May your birthday be filled with cake and laughter! 🎈",
//     "🎁 A day as special as you deserves an amazing celebration!",
//     "🎊 Wishing you happiness and health for the year ahead! ❤️",
//     "🎈 It's your day to sparkle and shine. Happy Birthday! 🌟",
//     "🍰 Let’s eat cake and make magical memories today! 🎂",
//     "🥳 Another year of awesomeness begins today! Happy Birthday! 🎉"
// ];

// // Function to display a random message in the surprise box
// function showSurprise() {
//     const surpriseBox = document.getElementById('surpriseBox');
//     const randomIndex = Math.floor(Math.random() * messages.length); // Get a random message
//     surpriseBox.innerText = messages[randomIndex]; // Update content
//     surpriseBox.style.display = 'block'; // Show the box

//     // Add a quick flash effect
//     surpriseBox.classList.add('flash');
//     setTimeout(() => {
//         surpriseBox.classList.remove('flash');
//     }, 100); // Remove flash effect after 300ms
// }



// // Array of surprise messages
// const meage = [
//     "🎉 You are the star of the day! Shine bright! ✨",
//     "🎂 May your birthday be filled with cake and laughter! 🎈",
//     "🎁 A day as special as you deserves an amazing celebration!",
//     "🎊 Wishing you happiness and health for the year ahead! ❤️",
//     "🎈 It's your day to sparkle and shine. Happy Birthday! 🌟",
//     "🍰 Let’s eat cake and make magical memories today! 🎂",
//     "🥳 Another year of awesomeness begins today! Happy Birthday! 🎉"
// ];

// // Function to display a random message and play music
// function showSurprise() {
//     const surpriseBox = document.getElementById('surpriseBox');
//     const music = document.getElementById('birthdayMusic');
    
//     // Get a random message
//     const randomIndex = Math.floor(Math.random() * messages.length);
//     surpriseBox.innerText = messages[randomIndex];
//     surpriseBox.style.display = 'block';

//     // Add a quick flash effect
//     surpriseBox.classList.add('flash');
//     setTimeout(() => {
//         surpriseBox.classList.remove('flash');
//     }, 300);

//     // Play the background music
//     if (music) {
//         music.play();
//     } else {
//         music.currentTime = 0; // Restart music if already playing
//     }
// }



// Array of messages to display
const messages = [

    "🎉 You are the star of the day! Shine bright! ✨",
    "🎂 May your birthday be filled with cake and laughter! 🎈",
    "🎁 A day as special as you deserves an amazing celebration!",
    "🎊 Wishing you happiness and health for the year ahead! ❤️",
    "🎈 It's your day to sparkle and shine. Happy Birthday! 🌟",
    "🍰 Let’s eat cake and make magical memories today! 🎂",
    "🥳 Another year of awesomeness begins today! Happy Birthday! 🎉"
];

function showMessages() {
    const surpriseBox = document.getElementById('surpriseBox');
    const music = document.getElementById('birthdayMusic');
    let currentIndex = 0;



    // Function to display the next message
    const displayNextMessage = () => {
        // Show the current message
        surpriseBox.innerText = messages[currentIndex];
        surpriseBox.style.display = 'block';

        // Add a quick flash effect
        surpriseBox.classList.add('flash');
        setTimeout(() => {
            surpriseBox.classList.remove('flash');
        }, 2900);

        // Move to the next message or stop if we've shown all messages
        currentIndex++;
        if (currentIndex < messages.length) {
            setTimeout(displayNextMessage, 2990); // Show the next message after 3 seconds
        } else {
            // Stop after the last message
            setTimeout(() => {
                surpriseBox.style.display = 'none';
            }, 2800);
        }
    };

    // Start displaying messages
    displayNextMessage();
}

// Start the process as soon as the page loads
window.onload = showMessages;
