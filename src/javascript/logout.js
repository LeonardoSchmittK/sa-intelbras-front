const logOut = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("Token not found in localStorage.");
      return;
    }
  
    try {
      const response = await fetch('http://localhost:3000/users/logout', {
        method: 'POST', 
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
      });
  
      if (response.ok) {
        localStorage.removeItem("token"); 
        localStorage.removeItem("username");
        location.href="login.html" 
      } else {
        console.error("Logout failed:", await response.text());
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };
  
