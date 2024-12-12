const token = localStorage.getItem('token');

if (token) {
  fetch('http://localhost:3000/users/authenticate', {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`, 
      'Content-Type': 'application/json',
    }
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }
    return response.json();
  })
  .then(data => document.querySelector(".user").innerHTML=`Olá, ${localStorage.getItem("username")} :)`)
  .catch(error => console.error("Fetch Error:", error));
  
} else {
  console.log("Não está logado, vá logar");
  window.location.href  = "/src/html/login.html"
}
