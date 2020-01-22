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
  $(".explain").css("display", "none");
  $(".codeImg").css("display", "none");
  // $("#mainExp").css("display", "none");
  $("#awethumbExplain").css("display", "block");
});
$(document).on("click", "#MainPage", () => {
  $(".explain").css("display", "none");
  $(".codeImg").css("display", "none");
  $("#mainResult").css("display", "block");
  $("#mainExp").css("display", "block");
});
$(document).on("click", "#Search", () => {
  $(".explain").css("display", "none");
  $(".codeImg").css("display", "none");
  $("#searchResult").css("display", "block");
  $("#searchExp").css("display", "block");
});
$(document).on("click", "#Hashtag", () => {
  $(".explain").css("display", "none");
  $(".codeImg").css("display", "none");
  $("#hashtagResult").css("display", "block");
  $("#hashExp").css("display", "block");
});
$(document).on("click", "#Comment", () => {
  $(".explain").css("display", "none");
  $(".codeImg").css("display", "none");
  $("#commentResult").css("display", "block");
  $("#cmtExp").css("display", "block");
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

