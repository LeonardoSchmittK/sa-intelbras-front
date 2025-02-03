const token = localStorage.getItem('token');

if (token) {
  fetch('https://sa-intelbras-back-3.onrender.com/users/authenticate', {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`, 
      'Content-Type': 'application/json', 
    },
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }
      return response.json(); 
    })
    .then(data => {
      document.querySelector(".user").innerHTML = `
      Olá ${localStorage.getItem("username")}, seja bem-vindo :)
      <img src="../img/usuarioDefault.png" alt="usuário" onclick="toggleMenu()" style="cursor: pointer">
      `;
      document.querySelector(".username").innerHTML = `${localStorage.getItem("username")}`
      if(data.user.isAdmin){
        document.querySelector(".sobreNos").style.display="none"
        document.querySelector(".cadastrarProduto").style.display="block"
        
      }else {
          document.querySelector(".sobreNos").style.display="block"
        document.querySelector(".cadastrarProduto").style.display="none"

      }
    })
    .catch(error => {
      console.error("Fetch Error:", error);
      
      localStorage.removeItem('token'); 
      localStorage.removeItem('username'); 
      localStorage.removeItem('role'); 
      window.location.href = "/src/html/login.html"; 
    });
} else {
  console.log("Não está logado, vá logar");
  localStorage.removeItem('token'); 
      localStorage.removeItem('role'); 
      localStorage.removeItem('username'); 
  window.location.href = "/src/html/login.html";
}
