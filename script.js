const logo = document.getElementById('logo');
const mainbanner = document.getElementById('main-banner');

window.onresize = function (event) {
    let innerWidth = window.innerWidth;
    innerWidth >= 1000 ? logo.src = "./img/Logo2.png" : logo.src = "./img/Logo1.png";
    innerWidth >= 600 ? mainbanner.src = "./img/mainBanner.png" : mainbanner.src = "./img/mainBanner2.png";
}

$(document).ready(function ($) {
    $(".scroll_move").click(function (event) {
        event.preventDefault();
        $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 500);
    });
});