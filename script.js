const PASSWORD = "Mau";
let attempts = 0;

function unlock() {
  const input = document.getElementById("pass").value;
  attempts++;

  if (input === PASSWORD) {
    document.getElementById("lock").style.display = "none";
    document.getElementById("content").style.display = "block";
  } else {
    if (attempts === 1) {
      alert("Hint 💡: The password is what I call you when I smile ❤️");
    } else if (attempts === 2) {
      alert("Hint 💡: It’s just your name… from my heart 😘");
    } else {
      alert("Come on Mau 😏 you already know it ❤️");
    }
  }
}
