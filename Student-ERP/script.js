// Toggle password visibility functionality
document.addEventListener('DOMContentLoaded', () => {
    const togglePassword = document.getElementById('togglePassword');
    const passwordField = document.getElementById('password');
  
    togglePassword.addEventListener('click', () => {
      // Toggle the type attribute using ternary operator
      const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
      passwordField.setAttribute('type', type);
  
      // Toggle the icon based on password type
      togglePassword.textContent = type === 'password' ? 'visibility_off' : 'visibility';
    });
  
    // Optional: Add simple client-side validation feedback on submit
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      // For demonstration, simply log form inputs. Replace with AJAX/fetch for real login.
      const username = document.getElementById('username').value;
      const password = passwordField.value;
      console.log('Login attempt:', { username, password });
      
      // Animate button on submit for feedback
      const loginBtn = document.querySelector('.login-btn');
      loginBtn.style.backgroundColor = "#0288d1";
      setTimeout(() => {
        loginBtn.style.backgroundColor = "#4fc3f7";
      }, 500);
      
      // Here, you might add your login API integration and redirect logic.
    });
  });