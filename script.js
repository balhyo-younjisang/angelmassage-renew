const logo = document.getElementById('logo');
const mainBanner = document.getElementById('main-banner');

window.onresize = function (event) {
    let innerWidth = window.innerWidth;
    innerWidth >= 1000 ? logo.src = "./img/Logo2.png" : logo.src = "./img/Logo4.png";
    innerWidth >= 1000 ? mainBanner.src = "./img/mainBanner.png" : mainBanner.src = "./img/mainBanner2.png"
}

$(document).ready(function ($) {
    $(".scroll_move").click(function (event) {
        event.preventDefault();
        $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 500);
    });
});