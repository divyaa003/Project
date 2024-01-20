// show-hide password
function togglePassword(inputId) {
    const passwordInput = document.getElementById(inputId);
    const toggleIcon = document.getElementById(`toggle${inputId.charAt(0).toUpperCase()}${inputId.slice(1)}`);

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleIcon.className = "fa-solid fa-eye";
    } else {
        passwordInput.type = "password";
        toggleIcon.className = "fa-solid fa-eye-slash";
    }
}


//password validation
function validatePassword() {
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('cnfmpassword').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return false;
    }

    if (password.length < 8) {
        alert('Password must be at least 8 characters long.');
        return false;
    }

    return true;
}


// Email validation
function validateEmail() {
    const emailInput = document.getElementById('emailInput');
    const emailErrorMessage = document.getElementById('emailErrorMessage');
    const emailValue = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(emailValue)) {
        emailErrorMessage.textContent = '';
        emailErrorMessage.style.visibility = 'hidden'; // Hide the error message
    } else {
        emailErrorMessage.textContent = 'Enter a valid email';
        emailErrorMessage.style.visibility = 'visible'; // Show the error message
    }
}
