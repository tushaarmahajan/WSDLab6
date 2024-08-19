document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const dobInput = document.getElementById('dob');
    const submitBtn = document.getElementById('submitBtn');

    nameInput.addEventListener('input', () => {
        const nameValue = nameInput.value.trim();
        const nameError = document.getElementById('nameError');
        if (nameValue.length >= 3 && /^[A-Za-z\s]+$/.test(nameValue)) {
            nameInput.classList.add('valid');
            nameInput.classList.remove('invalid');
            nameError.classList.add('hidden');
        } else {
            nameInput.classList.add('invalid');
            nameInput.classList.remove('valid');
            nameError.classList.remove('hidden');
        }
    });

    emailInput.addEventListener('input', () => {
        const emailValue = emailInput.value.trim();
        const emailError = document.getElementById('emailError');
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (emailPattern.test(emailValue)) {
            emailInput.classList.add('valid');
            emailInput.classList.remove('invalid');
            emailError.classList.add('hidden');
        } else {
            emailInput.classList.add('invalid');
            emailInput.classList.remove('valid');
            emailError.classList.remove('hidden');
        }
    });

    passwordInput.addEventListener('input', () => {
        const passwordValue = passwordInput.value.trim();
        const passwordError = document.getElementById('passwordError');
        const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if (passwordPattern.test(passwordValue)) {
            passwordInput.classList.add('valid');
            passwordInput.classList.remove('invalid');
            passwordError.classList.add('hidden');
        } else {
            passwordInput.classList.add('invalid');
            passwordInput.classList.remove('valid');
            passwordError.classList.remove('hidden');
        }
    });

    confirmPasswordInput.addEventListener('input', () => {
        const confirmPasswordValue = confirmPasswordInput.value.trim();
        const confirmPasswordError = document.getElementById('confirmPasswordError');
        if (confirmPasswordValue === passwordInput.value.trim()) {
            confirmPasswordInput.classList.add('valid');
            confirmPasswordInput.classList.remove('invalid');
            confirmPasswordError.classList.add('hidden');
        } else {
            confirmPasswordInput.classList.add('invalid');
            confirmPasswordInput.classList.remove('valid');
            confirmPasswordError.classList.remove('hidden');
        }
    });

    dobInput.addEventListener('input', () => {
        const dobValue = new Date(dobInput.value);
        const dobError = document.getElementById('dobError');
        const today = new Date();
        const age = today.getFullYear() - dobValue.getFullYear();
        const m = today.getMonth() - dobValue.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < dobValue.getDate())) {
            age--;
        }

        if (age >= 18) {
            dobInput.classList.add('valid');
            dobInput.classList.remove('invalid');
            dobError.classList.add('hidden');
        } else {
            dobInput.classList.add('invalid');
            dobInput.classList.remove('valid');
            dobError.classList.remove('hidden');
        }
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault(); 
        
        const isNameValid = !nameInput.classList.contains('invalid');
        const isEmailValid = !emailInput.classList.contains('invalid');
        const isPasswordValid = !passwordInput.classList.contains('invalid');
        const isConfirmPasswordValid = !confirmPasswordInput.classList.contains('invalid');
        const isDobValid = !dobInput.classList.contains('invalid');

        if (isNameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid && isDobValid) {
            alert('Registration successful!');
            
        } else {
            alert('Please correct the errors before submitting the form.');
        }
    });
});
