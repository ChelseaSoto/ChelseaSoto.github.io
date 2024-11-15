// Check for dark mode preference in localStorage on page load
window.addEventListener('DOMContentLoaded', (event) => {
    const body = document.body;
    const themeToggle = document.getElementById('theme-toggle');

    // Check if dark mode was previously enabled
    if (localStorage.getItem('dark-mode') === 'enabled') {
        body.classList.add('dark-mode');
    }

    // Toggle dark mode when the button is clicked
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');

        // Store the preference in localStorage
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('dark-mode', 'enabled');
        } else {
            localStorage.removeItem('dark-mode');
        }
    });
});
