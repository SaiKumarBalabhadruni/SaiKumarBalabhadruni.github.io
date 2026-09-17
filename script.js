const typed = document.getElementById("typed");
const help = document.getElementById("help");
const close = document.querySelector(".close");

const text = "echo \"build systems. automate everything. learn continuously.\"";
let i = 0;
function type() {
  if (i <= text.length) {
    typed.textContent = text.slice(0, i++);
    setTimeout(type, 32);
  }
}
type();

document.addEventListener("keydown", (e) => {
  const k = e.key.toLowerCase();
  if (k === "h") help.showModal();
  if (k === "g") window.open("https://github.com/", "_blank");
  if (k === "l") window.open("https://www.linkedin.com/", "_blank");
  if (k === "e") window.location.href = "mailto:your-email@example.com";
  if (e.key === "Escape") help.close();
});
close.addEventListener("click", () => help.close());
