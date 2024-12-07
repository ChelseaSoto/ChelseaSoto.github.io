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

document.addEventListener('mousemove', (event) => {
    const cursorGif = document.getElementById('cursor-gif');
    console.log("Mouse moved to: ", event.pageX, event.pageY); // Debug

    const offsetX = -30; // Horizontal offset
    const offsetY = 25; // Vertical offset

    cursorGif.style.left = `${event.pageX + offsetX}px`;
    cursorGif.style.top = `${event.pageY + offsetY}px`;

    console.log("GIF positioned at: ", cursorGif.style.left, cursorGif.style.top); // Debug
});

document.addEventListener("DOMContentLoaded", () => {
    const devlogEntries = document.querySelectorAll(".devlog-entry");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        },
        { threshold: 0.1 }
    );

    devlogEntries.forEach((entry) => observer.observe(entry));
});

document.addEventListener("scroll", () => {
    const backToTop = document.getElementById("back-to-top");
    if (window.scrollY > 300) {
        backToTop.classList.add("visible");
    } else {
        backToTop.classList.remove("visible");
    }
});
