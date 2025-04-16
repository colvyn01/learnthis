document.addEventListener('DOMContentLoaded', () => {
  // Toggle password visibility
  const togglePasswordButtons = document.querySelectorAll('.toggle-password');
  togglePasswordButtons.forEach(button => {
    button.addEventListener('click', () => {
      const input = button.previousElementSibling.previousElementSibling;
      const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
      input.setAttribute('type', type);
      
      // Change eye icon appearance
      const eyeIcon = button.querySelector('.eye-icon');
      if (type === 'text') {
        eyeIcon.style.opacity = '0.8';
        eyeIcon.innerHTML = '👁️‍🗨️';
      } else {
        eyeIcon.style.opacity = '0.5';
        eyeIcon.innerHTML = '👁️';
      }
    });
  });

  // Login form validation and submission
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      // Reset error states
      const inputs = loginForm.querySelectorAll('input');
      inputs.forEach(input => {
        input.parentElement.classList.remove('error');
        const errorMessage = input.parentElement.nextElementSibling;
        if (errorMessage && errorMessage.classList.contains('error-message')) {
          errorMessage.remove();
        }
      });
      
      // Get form data
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const remember = document.getElementById('remember').checked;
      
      // Basic validation
      let isValid = true;
      
      // Email validation
      if (!validateEmail(email)) {
        showError(document.getElementById('email'), 'Please enter a valid email address');
        isValid = false;
      }
      
      // Password validation
      if (password.length < 6) {
        showError(document.getElementById('password'), 'Password must be at least 6 characters');
        isValid = false;
      }
      
      // If form is valid, simulate login
      if (isValid) {
        const button = loginForm.querySelector('.auth-button');
        const originalText = button.innerHTML;
        
        // Show loading state
        button.innerHTML = '<span class="button-text">LOGGING IN...</span>';
        button.disabled = true;
        
        try {
          // Simulate API call
          await new Promise(resolve => setTimeout(resolve, 1500));
          
          // Store login info
          if (remember) {
            localStorage.setItem('user_email', email);
            localStorage.setItem('is_logged_in', 'true');
          } else {
            sessionStorage.setItem('user_email', email);
            sessionStorage.setItem('is_logged_in', 'true');
          }
          
          // Get redirect URL from query string (if any)
          const urlParams = new URLSearchParams(window.location.search);
          const redirectUrl = urlParams.get('redirect') || 'index.html';
          
          // Redirect to destination
          window.location.href = redirectUrl;
          
        } catch (error) {
          // Reset button and show error
          button.innerHTML = originalText;
          button.disabled = false;
          
          // Show generic error at form level
          const errorDiv = document.createElement('div');
          errorDiv.className = 'error-message';
          errorDiv.textContent = 'Failed to log in. Please try again.';
          loginForm.prepend(errorDiv);
        }
      }
    });
  }
  
  // Sign up form validation with password strength meter
  const signupForm = document.getElementById('signupForm');
  if (signupForm) {
    const passwordInput = document.getElementById('newPassword');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const strengthSegments = document.querySelectorAll('.strength-segment');
    const strengthText = document.querySelector('.strength-text');
    
    // Password strength checker
    passwordInput.addEventListener('input', () => {
      const password = passwordInput.value;
      const strength = checkPasswordStrength(password);
      
      // Reset all segments
      strengthSegments.forEach(segment => {
        segment.className = 'strength-segment';
      });
      
      // Update strength meter based on score
      switch (strength.score) {
        case 0:
          strengthText.textContent = 'Weak';
          strengthSegments[0].classList.add('weak');
          break;
        case 1:
          strengthText.textContent = 'Weak';
          strengthSegments[0].classList.add('weak');
          break;
        case 2:
          strengthText.textContent = 'Fair';
          strengthSegments[0].classList.add('medium');
          strengthSegments[1].classList.add('medium');
          break;
        case 3:
          strengthText.textContent = 'Good';
          strengthSegments[0].classList.add('medium');
          strengthSegments[1].classList.add('medium');
          strengthSegments[2].classList.add('medium');
          break;
        case 4:
          strengthText.textContent = 'Strong';
          strengthSegments.forEach(segment => segment.classList.add('strong'));
          break;
      }
    });
    
    // Form submission
    signupForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      // Reset error states
      const inputs = signupForm.querySelectorAll('input');
      inputs.forEach(input => {
        input.parentElement.classList.remove('error');
        const errorMessage = input.parentElement.nextElementSibling;
        if (errorMessage && errorMessage.classList.contains('error-message')) {
          errorMessage.remove();
        }
      });
      
      // Get form data
      const username = document.getElementById('username').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('newPassword').value;
      const confirmPassword = document.getElementById('confirmPassword').value;
      const termsAccepted = document.getElementById('terms').checked;
      
      // Validate inputs
      let isValid = true;
      
      // Username validation
      if (username.length < 3 || username.length > 20) {
        showError(document.getElementById('username'), 'Username must be between 3 and 20 characters');
        isValid = false;
      }
      
      // Email validation
      if (!validateEmail(email)) {
        showError(document.getElementById('email'), 'Please enter a valid email address');
        isValid = false;
      }
      
      // Password validation
      if (password.length < 8) {
        showError(document.getElementById('newPassword'), 'Password must be at least 8 characters');
        isValid = false;
      } else if (checkPasswordStrength(password).score < 2) {
        showError(document.getElementById('newPassword'), 'Password is too weak, please use a stronger password');
        isValid = false;
      }
      
      // Confirm password validation
      if (password !== confirmPassword) {
        showError(document.getElementById('confirmPassword'), 'Passwords do not match');
        isValid = false;
      }
      
      // Terms validation
      if (!termsAccepted) {
        const termsCheckbox = document.getElementById('terms');
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = 'You must accept the terms and conditions';
        termsCheckbox.parentElement.after(errorDiv);
        isValid = false;
      }
      
      // If form is valid, simulate signup
      if (isValid) {
        const button = signupForm.querySelector('.auth-button');
        const originalText = button.innerHTML;
        
        // Show loading state
        button.innerHTML = '<span class="button-text">CREATING ACCOUNT...</span>';
        button.disabled = true;
        
        try {
          // Simulate API call
          await new Promise(resolve => setTimeout(resolve, 2000));
          
          // Store user info (simulation)
          sessionStorage.setItem('user_email', email);
          sessionStorage.setItem('username', username);
          sessionStorage.setItem('is_logged_in', 'true');
          sessionStorage.setItem('just_signed_up', 'true');
          
          // Redirect to welcome page
          window.location.href = 'welcome.html';
          
        } catch (error) {
          // Reset button and show error
          button.innerHTML = originalText;
          button.disabled = false;
          
          // Show generic error at form level
          const errorDiv = document.createElement('div');
          errorDiv.className = 'error-message';
          errorDiv.textContent = 'Failed to create account. Please try again.';
          signupForm.prepend(errorDiv);
        }
      }
    });
  }
  
  // Utility to show input errors
  function showError(input, message) {
    input.parentElement.classList.add('error');
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    
    // Add error message after the input container
    input.parentElement.after(errorDiv);
  }
  
  // Email validation function
  function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  
  // Password strength checker
  function checkPasswordStrength(password) {
    // Very basic strength calculation for demo purposes
    // In a real app, use a library like zxcvbn for better assessment
    
    let score = 0;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
    
    // Add points for length
    if (password.length >= 8) score++;
    if (password.length >= 10) score++;
    
    // Add points for character types
    if (hasUppercase) score++;
    if (hasLowercase) score++;
    if (hasNumbers) score++;
    if (hasSpecialChars) score++;
    
    // Cap the score at 4
    score = Math.min(score, 4);
    
    return {
      score,
      hasUppercase,
      hasLowercase,
      hasNumbers,
      hasSpecialChars
    };
  }
});