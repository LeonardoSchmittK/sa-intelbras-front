const dropdownMenu = document.getElementById('dropdown-menu'); // Menu suspenso
const logoutButton = document.getElementById('logout-button'); // Botão "Sair"

// Função para alternar exibição do menu
function toggleMenu() {
    const isVisible = dropdownMenu.style.display === 'block';
    dropdownMenu.style.display = isVisible ? 'none' : 'block';
}

// Abrir o modal ao clicar em "Sair"
logoutButton.addEventListener('click', () => {
    window.location.href = 'login.html'
});

