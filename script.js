const PASSWORD = "mauforever";

// 🔐 Unlock
function unlock() {
  if (document.getElementById("password").value === PASSWORD) {
    document.getElementById("lockScreen").style.display = "none";
    document.getElementById("content").classList.remove("hidden");
  } else {
    document.getElementById("error").innerText = "Wrong password 💔";
  }
}

// 🌙 Night mode
function toggleMode() {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
}

// 🎵 Music
let playing = false;
function toggleMusic() {
  const music = document.getElementById("music");
  playing ? music.pause() : music.play();
  playing = !playing;
}

// 💌 Letter
function openLetter() {
  document.getElementById("letter").style.display = "block";
}
function closeLetter() {
  document.getElementById("letter").style.display = "none";
}

// ⏰ Countdown
const target = new Date("2026-02-14T00:00:00").getTime();
setInterval(() => {
  const now = new Date().getTime();
  const diff = target - now;
  if (diff <= 0) {
    document.getElementById("countdown").innerText = "❤️ Happy Valentine’s Day ❤️";
    startFireworks();
    return;
  }
  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);
  document.getElementById("countdown").innerText =
    `${d} days ${h} hrs ${m} mins left 💕`;
}, 1000);

// 💝 Valentine Week Unlock
const today = new Date().setHours(0,0,0,0);
document.querySelectorAll(".vday").forEach(day => {
  const date = new Date(day.dataset.date).setHours(0,0,0,0);
  if (today < date) {
    day.classList.add("locked");
    day.innerHTML = "⏳ Coming Soon";
  }
});

// 🎆 Fireworks
function startFireworks() {
  const canvas = document.getElementById("fireworks");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  setInterval(() => {
    ctx.fillStyle = `hsl(${Math.random()*360},100%,60%)`;
    ctx.beginPath();
    ctx.arc(Math.random()*canvas.width, Math.random()*canvas.height, 3, 0, Math.PI*2);
    ctx.fill();
  }, 50);
}
