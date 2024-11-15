document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.querySelector('.start-button');
    const offscreenMenus = document.querySelectorAll('.offscreen-menu'); // Select all elements with 'offscreen-burger'
    const logoutButton = document.querySelector('.logout');

    startButton.addEventListener('click', () => {
        // Loop through all elements with the 'offscreen-burger' class and toggle it
        offscreenMenus.forEach((menu) => {
            menu.classList.toggle('active');
        });
    });
    logoutButton.addEventListener('click', function () {
        window.location.href = 'index.html';
    });
});
