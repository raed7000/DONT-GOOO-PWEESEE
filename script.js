/* Basic styling for the love note page */
body {
  font-family: 'Poppins', sans-serif;
  background: linear-gradient(135deg, #f9c6d4, #fdb9c8);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  overflow: hidden;
  color: #3a3a3a;
}

.container {
  text-align: center;
  padding: 40px;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  width: 90%;
  max-width: 500px;
}

.heart-container {
  position: absolute;
  top: -80px;
  left: -100px;
  z-index: -1;
}

.heart {
  width: 200px;
  height: 200px;
  background: linear-gradient(45deg, #ff577f, #ff2e53);
  clip-path: polygon(50% 0%, 0% 35%, 50% 100%, 100% 35%);
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%) rotate(-45deg);
  animation: heart-animation 4s infinite ease-in-out;
}

.header {
  font-family: 'Playfair Display', serif;
  color: #ff577f;
  font-size: 2.5rem;
  margin-bottom: 20px;
  letter-spacing: 2px;
  animation: fadeIn 2s ease-in-out;
}

.message {
  font-size: 1.4rem;
  color: #555;
  margin-bottom: 30px;
  font-weight: 300;
  line-height: 1.6;
  opacity: 0;
  animation: fadeIn 2s ease-in-out forwards;
}

.love-button {
  background-color: #ff577f;
  color: white;
  border: none;
  padding: 14px 28px;
  font-size: 1.1rem;
  cursor: pointer;
  border-radius: 50px;
  font-weight: 500;
  transition: background-color 0.3s ease, transform 0.3s ease;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  animation: buttonAnimation 1.5s ease-in-out infinite;
}

.love-button:hover {
  background-color: #ff2e53;
  transform: scale(1.1);
}

.love-button:active {
  transform: scale(1);
}

/* Floating hearts animation */
.floating-hearts {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 100;
}

.heart-floating {
  width: 30px;
  height: 30px;
  background: radial-gradient(circle, #ff577f, #ff2e53);
  clip-path: polygon(50% 0%, 0% 35%, 50% 100%, 100% 35%);
  position: absolute;
  animation: floatHearts 6s infinite;
}

.heart-floating:nth-child(1) {
  animation-delay: 0s;
  left: 20px;
}

.heart-floating:nth-child(2) {
  animation-delay: 2s;
  left: 50px;
}

.heart-floating:nth-child(3) {
  animation-delay: 4s;
  left: 80px;
}

.heart-floating:nth-child(4) {
  animation-delay: 6s;
  left: 120px;
}

@keyframes floatHearts {
  0% { transform: translateY(0) scale(1); opacity: 1; }
  50% { transform: translateY(-100px) scale(1.5); opacity: 0.5; }
  100% { transform: translateY(0) scale(1); opacity: 1; }
}

@keyframes heart-animation {
  0% { transform: translateX(-50%) rotate(-45deg); }
  50% { transform: translateX(-50%) rotate(0deg); }
  100% { transform: translateX(-50%) rotate(-45deg); }
}

@keyframes buttonAnimation {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}

@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
