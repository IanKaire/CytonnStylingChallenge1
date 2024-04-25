const searchIcon = document.querySelector('.search-icon');
const searchBar = document.getElementById('search-bar');

searchIcon.addEventListener('click', () => {
  searchBar.style.display = searchBar.style.display === 'none' ? 'block' : 'none';
});
