// =====================
// NO BUTTON (runs away)
// =====================
const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mousemove", (e) => {
  const buttonRect = noBtn.getBoundingClientRect();

  // Mouse position
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  // Button center
  const btnX = buttonRect.left + buttonRect.width / 2;
  const btnY = buttonRect.top + buttonRect.height / 2;

  // Distance between mouse and button
  const distanceX = mouseX - btnX;
  const distanceY = mouseY - btnY;

  // Move opposite direction
  const moveX = -distanceX * 1.6;
  const moveY = -distanceY * 1.6;

  const maxX = window.innerWidth - buttonRect.width;
const maxY = window.innerHeight - buttonRect.height;

let finalX = Math.min(Math.max(moveX, -maxX), maxX);
let finalY = Math.min(Math.max(moveY, -maxY), maxY);
noBtn.style.transform = `translate(${finalX}px, ${finalY}px)`;
});

noBtn.addEventListener("click", () => {
  alert("HEY 😿 that was not an option!");
});


// =====================
// YES BUTTON (grows + stops on click)
// =====================
const yesBtn = document.getElementById("yesBtn");

let scale = 1;

// Start growing immediately
const growInterval = setInterval(() => {
  scale += 0.05; // growth per second
  yesBtn.style.transform = `scale(${scale})`;
}, 1000);

// Stop growing + celebrate when clicked
yesBtn.addEventListener("click", () => {
  clearInterval(growInterval); // stop growing
  createConfetti();
  
   setTimeout(() => {
    window.location.href = "yes.html"; // change to your next page filename
  }, 1200); // wait 1.2s so confetti shows first
});


// =====================
// CONFETTI FUNCTION
// =====================
function createConfetti() {
  const confettiContainer = document.createElement("div");
  confettiContainer.classList.add("confetti");
  document.body.appendChild(confettiContainer);

  for (let i = 0; i < 30; i++) {
    const confetti = document.createElement("div");
    confetti.textContent = "💖";
    confetti.style.position = "absolute";
    confetti.style.left = Math.random() * window.innerWidth + "px";
    confetti.style.top = Math.random() * window.innerHeight + "px";
    confetti.style.fontSize = Math.random() * 30 + 15 + "px";
    confetti.style.animation = `floatConfetti ${Math.random() * 2 + 1}s ease-out forwards`;
    confettiContainer.appendChild(confetti);

    setTimeout(() => confetti.remove(), 2000);
  }

  setTimeout(() => confettiContainer.remove(), 2500);
}
