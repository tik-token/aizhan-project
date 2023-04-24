function showPreview(url) {
  const myImg = document.createElement("img");
  myImg.src = url;
  myImg.className = "my_image_preview";

  const darkBG = document.createElement("div");
  darkBG.className = "darkBG";

  const page = document.getElementById("page_content");
  page.appendChild(darkBG);
  page.appendChild(myImg);

  darkBG.onclick = close;
  myImg.onclick = close;

  function close() {
    page.removeChild(darkBG);
    page.removeChild(myImg);
  }
}

function openNav() {
  document.getElementsByClassName("nav")[0].remove();
  document.getElementById("navbar").style.display = "flex";
}

function closeNav() {
  const nav = `<div class="nav"><p class="nav_link" onclick="openNav()">More...</p></div>`;
  const container = document.getElementsByClassName("navigation");
  document.getElementById("navbar").style.display = "none";
  container[0].insertAdjacentHTML("beforeend", nav);
}

function openImage(imageUrl) {
  window.open(imageUrl, "_blank");
}

function openLink(url) {
  window.open(url);
}

function toggleNav() {
  var navbar = document.getElementById("navigation");
  if (navbar.style.display === "flex") {
    navbar.style.display = "none";
  } else {
    navbar.style.display = "flex";
  }
}
