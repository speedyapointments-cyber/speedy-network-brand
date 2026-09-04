const LOGO_LOCKUP = "https://static.wixstatic.com/media/d5cd96_19236b40475a4321b097fcf9e73b3836~mv2.png";
const LOGO_BADGES = "https://static.wixstatic.com/media/d5cd96_8541d633f2374a7786db3684c7d15624~mv2.png";

function brandHeader() {
  return `<header class="brand-bar">
    <img class="badges" src="${LOGO_BADGES}" alt="Speedy dual gold emblems" />
    <div class="word">
      <strong>Speedy Mobile Auto</strong>
      <span>and Shop Services</span>
    </div>
  </header>`;
}

function bottomNav(active) {
  const tabs = [
    ["index.html", "Home"],
    ["vendor.html", "Vendor"],
    ["rate.html", "Rate"],
    ["shop.html", "Shop"],
  ];
  return `<nav class="bottom">${tabs.map(([href, label]) =>
    `<a href="${href}" class="${label === active ? "on" : ""}">${label}</a>`
  ).join("")}</nav>`;
}

document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("header");
  const nav = document.getElementById("nav");
  if (header) header.innerHTML = brandHeader();
  if (nav) nav.outerHTML = bottomNav(nav.dataset.active || "Home");
});
