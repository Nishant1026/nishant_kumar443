/******************************************************
 * FOR MY ANJALI ❤️
 * Valentine Surprise – Pure Vanilla JavaScript
 * Written with love, patience, and intention
 ******************************************************/

/* ====================================================
   GLOBAL SELECTORS & VARIABLES
==================================================== */

const startButton = document.querySelector(".start-btn");
const questionBox = document.getElementById("questionBox");
const questionText = document.getElementById("questionText");
const yesButton = document.querySelector(".yes-btn");
const noButton = document.getElementById("noBtn");
const gallery = document.getElementById("gallery");
const heartsContainer = document.querySelector(".hearts");
const song = document.getElementById("loveSong");

let currentQuestionIndex = 0;
let heartsInterval = null;
let typingInterval = null;

/* ====================================================
   ROMANTIC QUESTIONS (CORE EMOTION)
==================================================== */

const questions = [
  "Anjali… do you know how special you are to me? 💖",
  "Do you realize you make my normal days feel magical? ✨",
  "When you smile, does the world pause a little for you too? 😊",
  "Can I be the reason behind that smile, every single day? 💕",
  "Will you hold my hand, not just today, but always? 🤍",
  "Can I choose you… today, tomorrow, and forever? 💍"
];

/* ====================================================
   START SURPRISE
==================================================== */

function startSurprise() {
  fadeOutButton();
  playMusic();
  showQuestionBox();
  typeQuestion(questions[currentQuestionIndex]);
  startFloatingHearts();
}

/* ====================================================
   MUSIC CONTROL
==================================================== */

function playMusic() {
  try {
    song.volume = 0.7;
    song.play();
  } catch (error) {
    console.log("Autoplay blocked. User interaction needed.");
  }
}

/* ====================================================
   BUTTON ANIMATIONS
==================================================== */

function fadeOutButton() {
  startButton.style.transition = "all 0.6s ease";
  startButton.style.opacity = "0";
  startButton.style.transform = "scale(0.8)";
  setTimeout(() => {
    startButton.style.display = "none";
  }, 600);
}

/* ====================================================
   QUESTION BOX HANDLING
==================================================== */

function showQuestionBox() {
  setTimeout(() => {
    questionBox.classList.remove("hidden");
  }, 800);
}

/* ====================================================
   TYPEWRITER EFFECT (ROMANTIC FEEL)
==================================================== */

function typeQuestion(text) {
  questionText.innerHTML = "";
  let index = 0;

  clearInterval(typingInterval);

  typingInterval = setInterval(() => {
    if (index < text.length) {
      questionText.innerHTML += text.charAt(index);
      index++;
    } else {
      clearInterval(typingInterval);
    }
  }, 50);
}

/* ====================================================
   YES BUTTON LOGIC
==================================================== */

function yesAnswer() {
  createHeartBurst();

  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    typeQuestion(questions[currentQuestionIndex]);
  } else {
    endQuestions();
  }
}

/* ====================================================
   NO BUTTON (PLAYFUL ESCAPE)
==================================================== */

noButton.addEventListener("mouseover", moveNoButton);
noButton.addEventListener("click", moveNoButton);

function moveNoButton() {
  const randomX = Math.random() * (window.innerWidth - 120);
  const randomY = Math.random() * (window.innerHeight - 120);

  noButton.style.left = randomX + "px";
  noButton.style.top = randomY + "px";
}

/* ====================================================
   END QUESTIONS – SHOW GALLERY
==================================================== */

function endQuestions() {
  questionBox.classList.add("hidden");

  setTimeout(() => {
    gallery.classList.remove("hidden");
    showFinalMessage();
  }, 800);
}

/* ====================================================
   FINAL MESSAGE ANIMATION
==================================================== */

function showFinalMessage() {
  const message = document.createElement("p");
  message.innerText =
    "Anjali, loving you feels more beautiful than writing perfect code ❤️";
  message.style.marginTop = "20px";
  message.style.opacity = "0";
  message.style.transition = "opacity 2s ease";

  gallery.appendChild(message);

  setTimeout(() => {
    message.style.opacity = "1";
  }, 500);
}

/* ====================================================
   FLOATING HEARTS SYSTEM
==================================================== */

function startFloatingHearts() {
  heartsInterval = setInterval(createFloatingHeart, 300);
}

function createFloatingHeart() {
  const heart = document.createElement("span");
  heart.innerHTML = "❤️";

  const size = Math.random() * 20 + 15;
  heart.style.fontSize = size + "px";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 3 + 4 + "s";

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 7000);
}

/* ====================================================
   HEART BURST (ON YES)
==================================================== */

function createHeartBurst() {
  for (let i = 0; i < 12; i++) {
    const heart = document.createElement("span");
    heart.innerHTML = "💖";
    heart.style.position = "absolute";
    heart.style.left = "50%";
    heart.style.top = "50%";
    heart.style.fontSize = "20px";
    heart.style.transition = "all 1s ease";

    document.body.appendChild(heart);

    const angle = Math.random() * 360;
    const distance = Math.random() * 120 + 50;

    setTimeout(() => {
      heart.style.transform = `
        translate(
          ${Math.cos(angle) * distance}px,
          ${Math.sin(angle) * distance}px
        )
      `;
      heart.style.opacity = "0";
    }, 50);

    setTimeout(() => {
      heart.remove();
    }, 1000);
  }
}

/* ====================================================
   IMAGE INTERACTION (EXTRA LOVE)
==================================================== */

const galleryImages = document.querySelectorAll(".gallery img");

galleryImages.forEach((img) => {
  img.addEventListener("click", () => {
    showImageMessage();
  });
});

function showImageMessage() {
  const msg = document.createElement("div");
  msg.innerText = "Every memory with you is my favorite ❤️";
  msg.style.position = "fixed";
  msg.style.bottom = "30px";
  msg.style.left = "50%";
  msg.style.transform = "translateX(-50%)";
  msg.style.background = "rgba(0,0,0,0.6)";
  msg.style.color = "#fff";
  msg.style.padding = "15px 30px";
  msg.style.borderRadius = "30px";
  msg.style.opacity = "0";
  msg.style.transition = "opacity 0.5s ease";

  document.body.appendChild(msg);

  setTimeout(() => {
    msg.style.opacity = "1";
  }, 100);

  setTimeout(() => {
    msg.style.opacity = "0";
    setTimeout(() => msg.remove(), 500);
  }, 3000);
}

/* ====================================================
   PAGE LOAD EFFECT
==================================================== */

window.addEventListener("load", () => {
  document.body.style.opacity = "0";
  document.body.style.transition = "opacity 1.5s ease";

  setTimeout(() => {
    document.body.style.opacity = "1";
  }, 200);
});

/* ====================================================
   SAFETY CLEANUP
==================================================== */

window.addEventListener("beforeunload", () => {
  clearInterval(heartsInterval);
  clearInterval(typingInterval);
});

function startSurprise() {
    const song = document.getElementById("loveSong");
  
    song.volume = 0.7;
    song.play().catch(() => {
      console.log("Autoplay blocked, waiting for user interaction");
    });
  
    fadeOutButton();
    showQuestionBox();
    typeQuestion(questions[currentQuestionIndex]);
    startFloatingHearts();
  }

  
  
