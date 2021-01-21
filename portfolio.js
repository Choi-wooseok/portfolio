// main page ======================================
$(document).on("click", "#menu", (e) => {
  $("#morePage").toggle("show");
});
$(document).on("click", ".bgwrap, #content", (e) => {
  $("#morePage").toggle("hide");
});
$(document).on("click", "#goMain", () => {
  location.href = "/";
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
$(document).on("click", "#todayILearning", () => {
  location.href = "T_I_L.html";
});

// site page =======================================
// Awethumb
$(document).on("click", "#awethumb", () => {
  window.open("http://awethumb.kr");
});
$(document).on("mouseover", ".siteLink", () => {
  $(".siteHover").css("display", "block");
});
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
$(document).on("click", "#bitcomu", () => {
  window.open("https://bitcomu.cf");
});
$(document).on("click", "#BitPart", () => {
  $("#BitExplain").css("display", "block");
  $("#teamResult").css("display", "none");
});
$(document).on("click", "#TeamProject", () => {
  $("#BitExplain").css("display", "none");
  $("#teamResult").css("display", "block");
});
