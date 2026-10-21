// Menu mobile
const burger = document.getElementById("burger");
const menu = document.getElementById("menu");
burger.addEventListener("click", () => menu.classList.toggle("open"));
menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => menu.classList.remove("open")));

// Compte à rebours (date d'exemple : à modifier)
const matchDate = new Date("2026-10-25T18:00:00");
const cd = document.getElementById("countdown");
function tick() {
  const diff = matchDate - new Date();
  if (diff <= 0) { cd.textContent = "Match en cours ou terminé"; return; }
  const d = Math.floor(diff / 86400000);
  const h = Math.floor(diff / 3600000) % 24;
  const m = Math.floor(diff / 60000) % 60;
  const s = Math.floor(diff / 1000) % 60;
  cd.textContent = `${d} j ${String(h).padStart(2, "0")} h ${String(m).padStart(2, "0")} min ${String(s).padStart(2, "0")} s`;
}
tick();
setInterval(tick, 1000);

// Filtre de l'effectif par poste
const chips = document.querySelectorAll(".chip");
const players = document.querySelectorAll(".player");
chips.forEach((chip) =>
  chip.addEventListener("click", () => {
    chips.forEach((c) => c.classList.remove("active"));
    chip.classList.add("active");
    const pos = chip.dataset.pos;
    players.forEach((p) => p.classList.toggle("hide", pos !== "all" && p.dataset.pos !== pos));
  })
);

// Newsletter (démo, aucun envoi réel)
const form = document.getElementById("newsForm");
const msg = document.getElementById("newsMsg");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("newsEmail").value.trim();
  const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  msg.className = "msg " + (ok ? "ok" : "err");
  msg.textContent = ok ? "Merci ! Inscription enregistrée (démo)." : "Adresse e-mail invalide.";
  if (ok) form.reset();
});

document.getElementById("year").textContent = new Date().getFullYear();
