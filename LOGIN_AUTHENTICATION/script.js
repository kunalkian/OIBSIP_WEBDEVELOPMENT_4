// Registration form handling
const registerForm = document.getElementById('registerForm');
if (registerForm) {
  registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('regUsername').value.trim();
    const password = document.getElementById('regPassword').value;
    if (localStorage.getItem('user_' + username)) {
      alert('Username already exists. Please choose another.');
      return;
    }
    localStorage.setItem('user_' + username, password);
    alert('Registration successful! You can now login.');
    window.location.href = 'index.html';
  });
}

// Login form handling
const loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('loginUsername').value.trim();
    const password = document.getElementById('loginPassword').value;
    const storedPassword = localStorage.getItem('user_' + username);
    if (storedPassword && storedPassword === password) {
      localStorage.setItem('loggedInUser', username);
      window.location.href = 'secure.html';
    } else {
      alert('Invalid username or password');
    }
  });
}

// Access control on secured page
if (window.location.pathname.endsWith('secure.html')) {
  const loggedInUser = localStorage.getItem('loggedInUser');
  if (!loggedInUser) {
    alert('You must log in to access this page.');
    window.location.href = 'index.html';
  }
  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      localStorage.removeItem('loggedInUser');
      window.location.href = 'index.html';
    });
  }
}
