document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const openBtn = document.getElementById('openBtn');
    const closeBtn = document.getElementById('close-btn');

    openBtn.addEventListener('click', () => {
        sidebar.classList.add('show');
        
    });

    closeBtn.addEventListener('click', () => {
        sidebar.classList.remove('show');
        
    });
});