//Uptading pages

const webItems = document.getElementById("web-items");
const desktopItems = document.getElementById("desktop-items");
const btnWebItem = document.getElementById("btn-web-items");
const btnDesktopItem = document.getElementById("btn-desktop-items");

const changeBtnStatus = (btn1, btn2) => {
  const class1 = 'btn-primary';
  const class2 = 'btn-outline-primary';
  
  btn1.classList.add(class1);
  btn1.classList.remove(class2);
  btn2.classList.add(class2);
  btn2.classList.remove(class1);
}

const changeSkillsStatus = (skill1, skill2) => {
  skill1.classList.remove('d-none');
  skill2.classList.add('d-none');
}

btnWebItem.addEventListener("click", () => {
  changeBtnStatus(btnWebItem, btnDesktopItem);
  changeSkillsStatus(webItems, desktopItems);
});

btnDesktopItem.addEventListener('click', () => {;
  changeBtnStatus(btnDesktopItem, btnWebItem);
  changeSkillsStatus(desktopItems, webItems);
});
