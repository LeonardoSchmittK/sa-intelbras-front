const dropdownMenu = document.getElementById('dropdown-menu'); 
const logoutButton = document.getElementById('logout-button'); 

function toggleMenu() {
    const isVisible = dropdownMenu.style.display === 'block';
    dropdownMenu.style.display = isVisible ? 'none' : 'block';
}



