// Function to toggle the Register form
function showRegister() {
  document.getElementById('login-form').parentElement.style.display = 'none';
  document.getElementById('register-section').style.display = 'block';
}

// Function to toggle the Log In form
function showLogin() {
  document.getElementById('register-section').style.display = 'none';
  document.getElementById('login-form').parentElement.style.display = 'block';
}

// Sample form submission handling
document.getElementById('login-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Logging in...');
});

document.getElementById('register-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Registering...');
});

// Simulate redirection to dashboard
function redirectToDashboard() {
  alert('Redirecting to dashboard...');
  // In a real implementation, this would navigate to the dashboard page
}
