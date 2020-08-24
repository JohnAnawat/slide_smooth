$('document').ready(function() {
    const buttonRight = document.getElementById('slide-right-container');
    const buttonLeft = document.getElementById('slide-left-container');

    const buttonTop = document.getElementById('slide-top-container');
    const buttonBottom = document.getElementById('slide-bottom-container');

    buttonRight.onclick = function() {
        var container = document.getElementById('cards-container');
        scrollAmount = 0;
        var slideTimer = setInterval(function() {
            container.scrollLeft += 10;
            scrollAmount += 10;
            if (scrollAmount >= 242) {
                window.clearInterval(slideTimer);
            }
        }, 25);
    };

    buttonLeft.onclick = function() {
        var container = document.getElementById('cards-container');
        scrollAmount = 0;
        var slideTimer = setInterval(function() {
            container.scrollLeft -= 10;
            scrollAmount += 10;
            if (scrollAmount >= 242) {
                window.clearInterval(slideTimer);
            }
        }, 25);
    };

    buttonTop.onclick = function() {
        var container = document.getElementById('cards-container2');
        scrollAmount = 0;
        var slideTimer = setInterval(function() {
            container.scrollTop -= 10;
            scrollAmount += 10;
            if (scrollAmount >= 318) {
                window.clearInterval(slideTimer);
            }
        }, 25);
    };

    buttonBottom.onclick = function() {
        var container = document.getElementById('cards-container2');
        scrollAmount = 0;
        var slideTimer = setInterval(function() {
            container.scrollTop += 10;
            scrollAmount += 10;
            if (scrollAmount >= 318) {
                window.clearInterval(slideTimer);
            }
        }, 25);
    };

});