document.addEventListener("DOMContentLoaded", function () {
    var moveUpButton = document.querySelector('.move-up-button');

    window.addEventListener('scroll', function () {
        // Show the button when scrolling down and reaching the bottom
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            moveUpButton.style.display = 'block';
        } else {
            moveUpButton.style.display = 'none';
        }
    });

    moveUpButton.addEventListener('click', function () {
        // Smooth scroll to the top of the page
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
