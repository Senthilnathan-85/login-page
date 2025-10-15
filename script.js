document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Reset error states
        resetErrors();

        // Validate email
        if (!validateEmail(emailInput.value)) {
            showError(emailInput, 'Please enter a valid email address');
            return;
        }

        // Validate password
        if (passwordInput.value.length < 6) {
            showError(passwordInput, 'Password must be at least 6 characters long');
            return;
        }

        // If validation passes, you can submit the form
        // For demo purposes, we'll just log the values
        console.log('Login attempt:', {
            email: emailInput.value,
            password: passwordInput.value
        });

        // Clear form
        loginForm.reset();
        alert('Login submitted successfully!');
    });
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function showError(input, message) {
    const formGroup = input.parentElement;
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    formGroup.appendChild(errorDiv);
    formGroup.classList.add('error');
}

function resetErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(error => error.remove());
    document.querySelectorAll('.error').forEach(el => el.classList.remove('error'));
}