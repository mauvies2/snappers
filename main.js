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

function typeButton() {
  const inputValue = document.getElementById("close-search").value;
  if (inputValue.length > 1) {
    return true;
  } else if (inputValue[0] != null) {
    document.getElementById("close-icon-search").classList.add("show");
  }
}

function typeButton2() {
  const inputValue = document.getElementById("close-search-location").value;
  if (inputValue.length > 1) {
    return true;
  } else if (inputValue[0] != null) {
    document.getElementById("close-icon-location").classList.add("show");
  }
}

// Interacción del boton de búsqueda en el Banner
const closeIcon = document.getElementById("close-icon-search");
closeIcon.addEventListener("click", function () {
  let element = document.getElementById("close-search");
  element.value = null;
  closeIcon.classList.remove("show");
});

// Interacción del boton de ubicación en el Banner
const closeIconUbic = document.getElementById("close-icon-location");
closeIconUbic.addEventListener("click", function () {
  let element = document.getElementById("close-search-location");
  element.value = null;
  closeIconUbic.classList.remove("show");
});
