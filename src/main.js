const webItems = document.getElementById("web-items");
const desktopItems = document.getElementById("desktop-items");

const btnWebItem = document.getElementById("btn-web-items");
const btnDesktopItem = document.getElementById("btn-desktop-items");

const checkbox = document.getElementById("skills-checkbox");
const checkTrue = document.getElementById("check-true");
const checkFalse = document.getElementById("check-false");

const cardText = document.querySelectorAll('.card-text');

//Change Skills
btnWebItem.addEventListener("click", () => {
  btnWebItem.classList.add('btn-primary');
  btnWebItem.classList.remove('btn-outline-primary');
  btnDesktopItem.classList.add('btn-outline-primary');
  btnDesktopItem.classList.remove('btn-primary');

  webItems.classList.remove('d-none')
  desktopItems.classList.add('d-none');
});

btnDesktopItem.addEventListener('click', () => {
  btnDesktopItem.classList.add('btn-primary');
  btnDesktopItem.classList.remove('btn-outline-primary');
  btnWebItem.classList.add('btn-outline-primary');
  btnWebItem.classList.remove('btn-primary');

  desktopItems.classList.remove('d-none');
  webItems.classList.add('d-none')
})
