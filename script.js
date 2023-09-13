const userForm = document.getElementById('userForm');
const userNameInput = document.getElementById('userName');
const userTypeInput = document.getElementById('userType');
const userList = document.getElementById('userList');
const searchInput = document.getElementById('search');
//Zgjodha elementet ne DOM
userForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const name = userNameInput.value;
  const type = userTypeInput.value;
  if (name.length >= 2) {
    addUser(name, type);
    userNameInput.value = '';
  } else {
    alert('Emri duhet te kete me shume se 1 karakter.');
  }
});

userList.addEventListener('click', function (e) {
  if (e.target.classList.contains('delete-button')) {
    e.target.parentElement.remove(); //Ketu kur kryhet kushti qe elementi ne userListen tone ka klasen delete-button atehere perdorim metoden remove qe ta heqim kete element.
  }
});
//Kur i bejme submit form kam shtuar rreshtin e.preventDefault() e cila eshte shume e rendesishme sepse parandalon qe te kthehet ne gjendjen fillestare formi pasi ne kemi shtuar nje student/mesues. Pastaj merr input dhe ben check ne qofte se emri ka 2 ose me shume shkronja dhe ne qofte se ka atehere therrasim funksionin addUser qe te shtoj user(student/mesues) ne liste.
function addUser(name, type) {
  const listItem = document.createElement('li');
  listItem.classList.add('user-item');
  const avatar = document.createElement('div');
  avatar.classList.add('user-avatar');
  listItem.appendChild(avatar);
  const userInfo = document.createElement('div');
  userInfo.textContent = `Name: ${name}, Type: ${type}`;
  listItem.appendChild(userInfo);
  const deleteButton = document.createElement('div');
  deleteButton.textContent = '×';
  deleteButton.classList.add('delete-button');
  listItem.appendChild(deleteButton);
  userList.appendChild(listItem);
}
//Ketu ne funksionin addUser thjesht krijova listen li qe te perfshij user, brenda listes krijova div me klasen user-avatar+ informacionin e userit(emer dhe tipin) dhe ne fund perseri nje div ku kemi delete-button.
searchInput.addEventListener('input', function () {
  const searchText = searchInput.value.toLowerCase();
  const items = document.querySelectorAll('.user-item');
  items.forEach((item) => {
    const userInfo = item
      .querySelector('div:nth-child(2)')
      .textContent.toLowerCase();
    if (userInfo.includes(searchText)) {
      item.style.display = 'flex';
    } else {
      item.style.display = 'none';
    }
  });
});
//Ketu kur perdoruesi(user) kerkon nje emer,ate emer e kthej ne lowercases qe mos te hasim probleme kur ta krahasojme me vone. Pastaj zgjedh gjith users(li) duker perdor querySelectorAll dhe per cdo cdo item marim informacionin e userit. Ne fund kam shkruar kushtin qe ne qofte se informacioni userit persfhin tekstin qe perdoruesi ka kerkuar atehere tregon userin(display = 'flex')/
