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
  location.href = "index.html";
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
// Awethumb
$(document).on("click", "#awethumb", () => {
  window.open("http://awethumb.kr");
});
$(document).on("mouseover", ".siteLink", () => {
    $(".siteHover").css("display", "block");
})
$(document).on("mouseout", ".siteLink", () => {
  $(".siteHover").css("display", "none");
});
$(document).on("click", "#AwethumbPart", () => {
  $("#awethumbExplain").css("display", "block");
  $("#mainResult").css("display", "none");
  $("#searchResult").css("display", "none");
  $("#hashtagResult").css("display", "none");
  $("#commentResult").css("display", "none");
});
$(document).on("click", "#MainPage", () => {
  $("#awethumbExplain").css("display", "none");
  $("#mainResult").css("display", "block");
  $("#searchResult").css("display", "none");
  $("#hashtagResult").css("display", "none");
  $("#commentResult").css("display", "none");
});
$(document).on("click", "#Search", () => {
  $("#awethumbExplain").css("display", "none");
  $("#mainResult").css("display", "none");
  $("#searchResult").css("display", "block");
  $("#hashtagResult").css("display", "none");
  $("#commentResult").css("display", "none");
});
$(document).on("click", "#Hashtag", () => {
  $("#awethumbExplain").css("display", "none");
  $("#mainResult").css("display", "none");
  $("#searchResult").css("display", "none");
  $("#hashtagResult").css("display", "block");
  $("#commentResult").css("display", "none");
});
$(document).on("click", "#Comment", () => {
  $("#awethumbExplain").css("display", "none");
  $("#mainResult").css("display", "none");
  $("#searchResult").css("display", "none");
  $("#hashtagResult").css("display", "none");
  $("#commentResult").css("display", "block");
});
// bitcomu
$(document).on("click", "#BitPart", () => {
  $("#BitExplain").css("display", "block");
  $("#teamResult").css("display", "none");
});
$(document).on("click", "#TeamProject", () => {
  $("#BitExplain").css("display", "none");
  $("#teamResult").css("display", "block");
});

