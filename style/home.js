window.onscroll = function (e) {
    if (window.pageYOffset > 300) {
        document.querySelector('#top').classList.add('gotop');
    }
    else {
        document.querySelector('#top').classList.remove('gotop');
    }
  }
  
  // Scroll Hide Navigation-----------------------------------------------------------------------
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("scrolled").style.top = "0";
    } else {
      document.getElementById("scrolled").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
  }
  