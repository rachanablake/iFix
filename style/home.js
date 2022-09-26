window.onscroll = function (e) {
    if (window.pageYOffset > 300) {
        document.querySelector('#top').classList.add('gotop');
    }
    else {
        document.querySelector('#top').classList.remove('gotop');
    }
}