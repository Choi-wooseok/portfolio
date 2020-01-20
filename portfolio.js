  // main page ======================================
$(document).on("click", "#menu", () => {
  let menu = document.getElementById("menu");
  if (menu.style.marginLeft === "14%") {
    $("#morePage").css("margin-left", "-15%");
    $("#menu").css("margin-left", "0%");
  } else {
    $("#morePage").css("margin-left", "0%");
    $("#menu").css("margin-left", "14%");
  }
});
$(document).on("click", "#goMain", () => {
  location.href = "main.html";
});
$(document).on("click", "#profile", () => {
  location.href = "profile.html";
});
$(document).on("click", "#site", () => {
  location.href = "site.html";
});
$(document).on("click", "#skill", () => {
  location.href = "skill.html";
});
$(document).on("click", "#contact", () => {
  location.href = "contact.html";
});

// site page =======================================
$(document).on("click", "#awethumb", () => {
  window.open("http://awethumb.kr");
});
