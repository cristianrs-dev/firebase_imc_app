document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const openBtn = document.getElementById('open-btn');
    const closeBtn = document.getElementById('close-btn');
    const content = document.querySelector('.content');

    openBtn.addEventListener('click', () => {
        sidebar.classList.add('show');
        content.classList.add('open');
    });

    closeBtn.addEventListener('click', () => {
        sidebar.classList.remove('show');
        content.classList.remove('open');
    });
});