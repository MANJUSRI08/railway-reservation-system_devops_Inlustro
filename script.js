document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // prevent form submission
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Perform authentication (this is just a mock)
  if (username === 'admin' && password === 'password') {
    // Redirect to home page on successful login
    window.location.href = 'home.html';
  } else {
    alert('Invalid username or password');
  }
});
