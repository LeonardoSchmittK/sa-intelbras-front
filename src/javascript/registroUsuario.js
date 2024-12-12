const signUpUser = async (e) => {
    e.preventDefault(); 
    const checkbox = document.getElementById('reg-log');
    const userData = {
      username: document.querySelector("#form-username").value,
      phone: document.querySelector("#form-phone").value,
      email: document.querySelector("#form-email").value,
      password: document.querySelector("#form-password").value,
    };
  
    try {
      const response = await fetch('http://localhost:3000/users/signUp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        console.log('User signed up successfully:', data);
        alert('User signed up successfully!');
        checkbox.checked = false;  
      } else {
        console.error('Sign-up error:', data.error);
        alert(data.error);
      }
    } catch (error) {
      console.error('Error during sign-up request:', error);
      alert('An error occurred during sign-up.');
    }
  };
  

  const loginUser = async (e) => {
    e.preventDefault(); 
    try {
       const email = document.querySelector("#form-login-email").value
       const password = document.querySelector("#form-login-password").value
       const response = await fetch('http://localhost:3000/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
            email,
            password
            }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        console.log('Login successful:', data);
        localStorage.setItem('token', data.token);
        window.location.replace("http://127.0.0.1:5500/src/html/index.html");
      } else {
        console.error('Login failed:', data.error);
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };
  

  document.getElementById('signUpForm').addEventListener('submit', signUpUser);
  document.getElementById('loginForm').addEventListener('submit', loginUser);
  