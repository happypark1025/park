document.addEventListener('DOMContentLoaded', function() {
    const upArrows = document.querySelectorAll('.up-arrow');
    const downArrows = document.querySelectorAll('.down-arrow');

    upArrows.forEach(arrow => {
        arrow.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#page1') {
                document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
            } else {
                document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    downArrows.forEach(arrow => {
        arrow.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
        });
    });
});
