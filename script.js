const loveButton = document.getElementById('loveButton');
const message = document.getElementById('message');

const loveMessages = [
  "Maliha, you are the light that brightens my world. Every second with you feels like a dream come true, and I can't imagine life without you by my side. Your love fills my heart with joy and makes every moment unforgettable. 💖",
  "In your eyes, I see my future. In your smile, I find my happiness. You've made my world a better place, and every moment with you is a gift I treasure deeply. Together, we'll make beautiful memories, hand in hand. I love you more than words can express. 🌹",
  "Every time I think of you, my heart skips a beat. The love we share is the most beautiful thing I've ever known, and with each passing day, I fall more in love with you. You're the one I want to build a future with, and nothing will ever change that. ❤️",
  "Maliha, when I look at you, I see my everything—my love, my joy, and my reason for being. You complete me in ways I never thought possible. I'll cherish you and love you more each and every day, for as long as I live. You are my forever. 💞",
  "You’re my heart’s greatest treasure, Maliha. You bring warmth, love, and happiness to my life in a way I never imagined possible. With you, every moment is worth living, and every day is filled with love. I'll always be here for you, no matter what. 💘",
  "My love, you are the reason I wake up with a smile, the reason my heart beats faster, and the reason I feel so complete. I want to spend every moment of my life making you as happy as you make me. Forever and always, I’ll love you. 😘",
  "From the moment we met, I knew my life had changed forever. Your presence fills me with peace and warmth, and your love fills me with strength. No matter where life takes us, I promise to always stand by you, to love you, and to cherish you endlessly. 💕",
  "Maliha, you are the piece of my heart I didn't know I was missing. Every day with you is a new adventure, filled with laughter, joy, and love. I am so grateful for you, and I’ll never take a single moment with you for granted. You’re my everything. 💝",
  "If I could, I would capture every smile, every laugh, every moment with you and keep them in my heart forever. You make the world a better place, and I’m beyond thankful that I get to call you mine. My love for you is boundless. 💖"
];

loveButton.addEventListener('click', function() {
  const randomMessage = loveMessages[Math.floor(Math.random() * loveMessages.length)];
  message.textContent = randomMessage;
});
