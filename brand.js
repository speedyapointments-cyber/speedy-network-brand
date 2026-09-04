function brandHeader() {
  const src = window.SPEEDY_LOCKUP || "lockup-header.jpg";
  return `<header class="brand-bar"><img class="lockup" src="${src}" alt="SPEEDY Mobile Auto Repair and Shop Services" /></header>`;
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
  const splash = document.getElementById("splash");
  const sting = document.getElementById("sting");
  if (sting && window.SPEEDY_VIDEO) {
    sting.poster = window.SPEEDY_POSTER || sting.poster;
    const src = sting.querySelector("source");
    if (src) src.src = window.SPEEDY_VIDEO;
    sting.load();
    sting.play().catch(() => {});
  }
  const skip = document.getElementById("skip");
  const hide = () => { if (splash) splash.classList.add("gone"); };
  if (skip) skip.addEventListener("click", hide);
  if (splash) splash.addEventListener("click", hide);
  if (sting) {
    sting.addEventListener("ended", hide);
    setTimeout(hide, 5200);
  } else if (splash) {
    hide();
  }
});
