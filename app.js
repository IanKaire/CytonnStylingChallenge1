const searchIcon = document.querySelector('.search-icon');
const searchBar = document.getElementById('search-bar');

searchIcon.addEventListener('click', () => {
  searchBar.style.display = searchBar.style.display === 'none' ? 'block' : 'none';
});

const dropdownItems = document.querySelectorAll('.dropdown-item');
const lightFittingsItem = document.getElementById('light-fit'); // Select the Light Fittings item
const lightFittingsList = document.getElementById('drop-down');// Select the next sibling element (the dropdown list)
dropdownItems.forEach(item => {
  item.addEventListener('click', function() {
    // Clear any previous selection styles
    dropdownItems.forEach(otherItem => otherItem.classList.remove('active'));
    
    // Toggle active class and icon rotation for the clicked item
    this.classList.toggle('active');
    const icon = this.querySelector('i'); // Select the icon within the item
    icon.classList.toggle('fa-rotate-180'); // Toggle rotation class for the icon

  });
});

lightFittingsItem.addEventListener('click', () => {  
    // Toggle visibility of the Light Fittings list
    lightFittingsList.style.display = lightFittingsList.style.display === 'block' ? 'none' : 'block';
});
