// Handle modal open/close
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('login-modal');
    const closeBtn = document.querySelector('.close');
    const loginForm = document.querySelector('.login-form');

    // Close modal on outside click
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Close modal on X click
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Dummy login form submit
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (email && password) {
            alert(`Welcome, ${email}!`);
            modal.style.display = 'none';
            loginForm.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });
});
