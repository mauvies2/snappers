function openNav() {
  document.getElementById("nav-menuu").classList.add("open");
}
function closeNav() {
  document.getElementById("nav-menuu").classList.remove("open");
}

function Lang() {
  const element = document.getElementById("drop-list");
  if (element.classList != "dropdown-list openLangu") {
    element.classList.add("openLangu");
  } else {
    element.classList.remove("openLangu");
  }
}

// function closeLang() {
//   const newLocal = "dropdown-list openLangu";
//   if (document.getElementById("drop-list").classList[1] === openLangu) {
//     document.getElementById("drop-list");
//   }
// }
