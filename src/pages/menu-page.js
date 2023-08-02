export default function loadMenuPage() {

  const contentDiv = document.getElementById('content');
  contentDiv.innerHTML = ''; 
  {
    const menuTitlePlace = document.createElement('div');
    menuTitlePlace.id = 'menu-title-place';
    {
      const menuTitle = document.createElement('h1');
      menuTitle.id = 'menu-title';
      menuTitle.textContent = 'Discover Our Menu!';
      menuTitlePlace.appendChild(menuTitle);

      const menuTitleText = document.createElement('p');
      menuTitleText.id = 'menu-title-text';
      menuTitleText.textContent = 'There is a wide selection of choices approved by top chefs, prepared using best quality ingredients.';
      menuTitlePlace.appendChild(menuTitleText);
    }
    contentDiv.appendChild(menuTitlePlace);

    const menuItemsPlace = document.createElement('div');
    menuItemsPlace.id = 'menu-items-place';
    {
      menuItemsPlace.appendChild(createMenuItem('Pizza', 'pizza'));
      menuItemsPlace.appendChild(createMenuItem('Tacos', 'tacos'));
      menuItemsPlace.appendChild(createMenuItem('Hamburger', 'hamburger'));
      menuItemsPlace.appendChild(createMenuItem('Subs', 'sub'));
      menuItemsPlace.appendChild(createMenuItem('Burrito', 'burrito'));
      menuItemsPlace.appendChild(createMenuItem('Fried Chicken', 'fried-chicken'));
      menuItemsPlace.appendChild(createMenuItem('French Fries', 'french-fries'));
      menuItemsPlace.appendChild(createMenuItem('Milk Shakes', 'milk-shake'));
    }
    contentDiv.appendChild(menuItemsPlace);
  }

}

function createMenuItem(itemName, itemId) {
  const menuItem = document.createElement('div');
  menuItem.classList.add('menu-item');
  {
    const menuItemPhoto = document.createElement('div');
    menuItemPhoto.id = itemId;
    menuItemPhoto.classList.add('menu-item-photo');
    menuItem.appendChild(menuItemPhoto);

    const menuItemName = document.createElement('div');
    menuItemName.classList.add('menu-item-name');
    menuItemName.textContent = itemName
    menuItem.appendChild(menuItemName)
  }

  return menuItem
}