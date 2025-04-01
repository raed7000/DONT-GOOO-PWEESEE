const loveButton = document.getElementById('loveButton');
const message = document.getElementById('message');

const loveMessages = [
  "Maliha, you are my sunshine on the darkest days. You make everything better.",
  "Every moment with you is a precious memory I hold close to my heart. 💖",
  "I’ll always cherish you, no matter where life takes us. You’re my everything.",
  "You’ve made my world brighter, and I can’t imagine it without you. 💕",
  "Love is a beautiful thing, and I found it when I found you, Maliha.",
  "Maliha, every day with you feels like a dream come true. I’m so grateful for you.",
  "Even in silence, my heart speaks your name. You are the love of my life. 💞",
  "Your smile is the reason I smile. Your happiness means everything to me.",
  "If I could give you the world, I would, but instead, I’ll give you my heart forever."
];

loveButton.addEventListener('click', function() {
  const randomMessage = loveMessages[Math.floor(Math.random() * loveMessages.length)];
  message.textContent = randomMessage;
});
