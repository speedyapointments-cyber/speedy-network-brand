const BADGES = `
  <div class="badges" aria-hidden="true">
    <span class="badge">
      <svg viewBox="0 0 64 64" fill="none"><circle cx="32" cy="32" r="30" stroke="#D4AF37" stroke-width="3"/><path fill="#D4AF37" d="M30 10c-5 0-9 4-9 9 0 2.4 1 4.6 2.5 6.2L12 37.7 20 46l11.7-12.2c1.6 1.4 3.7 2.2 6 2.2 5 0 9-4 9-9 0-1.6-.4-3.1-1.1-4.4L39 29l-5-5 6.4-6.4C39.1 16.4 34.8 10 30 10z"/><path fill="#F0C94A" d="M12 42l7-9c2-2.5 5-4 8.2-4.4L34 28l3.2-6.2C38.4 19.5 41 18 44 18h10c3 0 5.7 1.6 7.2 4.2L64 28l-2 3c-8 2-16 3-24 3H20c-3.4 0-6.2-1.6-8-4z"/><circle cx="22" cy="48" r="5" fill="#D4AF37"/><circle cx="44" cy="48" r="5" fill="#D4AF37"/></svg>
    </span>
    <span class="badge">
      <svg viewBox="0 0 64 64" fill="none"><circle cx="32" cy="32" r="30" stroke="#D4AF37" stroke-width="3"/><path fill="#D4AF37" d="M14 38l8-12 10-2 4-8h16l5 8 9 3-3 11H14z"/><circle cx="23" cy="47" r="5" fill="#F0C94A"/><circle cx="45" cy="47" r="5" fill="#F0C94A"/><path fill="#F0C94A" d="M40 14l10 10-6 6-10-10 6-6z"/></svg>
    </span>
  </div>
`;
function brandHeader(extra = "Mobile Auto Repair and Shop Services") {
  return `<header class="brand-bar">${BADGES}<div class="kicker">Speedy Network</div><div class="word">SPEEDY</div><div class="sub">${extra}</div></header>`;
}
function bottomNav(active) {
  const tabs = [["index.html","Home"],["vendor.html","Vendor"],["rate.html","Rate"],["shop.html","Shop"]];
  return `<nav class="bottom">${tabs.map(([href,label]) => `<a href="${href}" class="${label===active?"on":""}">${label}</a>`).join("")}</nav>`;
}
document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("header");
  const nav = document.getElementById("nav");
  if (header) header.innerHTML = brandHeader(header.dataset.sub || "Mobile Auto Repair and Shop Services");
  if (nav) nav.outerHTML = bottomNav(nav.dataset.active || "Home");
});
