const PASSWORD = "mauforever"; // change this ❤️

// 🔐 Unlock
function unlock() {
  const input = document.getElementById("password").value;
  if (input === PASSWORD) {
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

// 💌 Love letter
function openLetter() {
  document.getElementById("letter").style.display = "block";
}
function closeLetter() {
  document.getElementById("letter").style.display = "none";
}

// ⏰ Countdown to Valentine
const target = new Date("2026-02-14T00:00:00").getTime();
setInterval(() => {
  const now = new Date().getTime();
  const diff = target - now;

  if (diff <= 0) {
    document.getElementById("countdown").innerText = "❤️ It's Valentine’s Day ❤️";
    return;
  }

  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);

  document.getElementById("countdown").innerText =
    `${d} days ${h} hrs ${m} mins left 💕`;
}, 1000);

