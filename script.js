const logo = document.getElementById('logo');
const mainbanner = document.getElementById('main-banner');

window.onresize = function (event) {
    let innerWidth = window.innerWidth;
    if (innerWidth >= 800) {
        mainbanner.src = "./img/mainBanner1.png";
        logo.src = "./img/Logo2.png"
    } else if (innerWidth >= 600) {
        mainbanner.src = "./img/mainBanner2.png";
        logo.src = "./img/Logo1.png";
    } else {
        mainbanner.src = "./img/mainBanner3.png";
        logo.src = "./img/Logo1.png";
    }
}

$(document).ready(function ($) {
    $(".scroll_move").click(function (event) {
        event.preventDefault();
        $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 500);
    });
});