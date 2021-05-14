/*
Template Name: Appvilla - Creative Landing Page HTML Template.
Author: GrayGrids
*/

(function () {
    //===== Prealoder

    // window.onload = function () {
    //     window.setTimeout(fadeout, 500);
    // }

    // function fadeout() {
    //     document.querySelector('.preloader').style.opacity = '0';
    //     document.querySelector('.preloader').style.display = 'none';
    // }


    /*=====================================
    Sticky
    ======================================= */
    window.onscroll = function () {
        var header_navbar = document.querySelector(".navbar-area");
        var sticky = header_navbar.offsetTop;

        var logo = document.querySelector('.navbar-brand img')
        if (window.pageYOffset > sticky) {
          header_navbar.classList.add("sticky");
          logo.src = 'assets/images/logo/logo.svg';
        } else {
          header_navbar.classList.remove("sticky");
          logo.src = 'assets/images/logo/white-logo.svg';
        }

        
    };


    

    // for menu scroll 
    var pageLink = document.querySelectorAll('.page-scroll');

    pageLink.forEach(elem => {
        elem.addEventListener('click', e => {
            e.preventDefault();
            document.querySelector(elem.getAttribute('href')).scrollIntoView({
                behavior: 'smooth',
                offsetTop: 1 - 60,
            });
        });
    });

    // WOW active
    new WOW().init();

    let filterButtons = document.querySelectorAll('.portfolio-btn-wrapper button');
    filterButtons.forEach(e =>
        e.addEventListener('click', () => {

            let filterValue = event.target.getAttribute('data-filter');
            iso.arrange({
                filter: filterValue
            });
        })
    );

    var elements = document.getElementsByClassName("portfolio-btn");
    for (var i = 0; i < elements.length; i++) {
        elements[i].onclick = function () {
            var el = elements[0];
            while (el) {
                if (el.tagName === "BUTTON") {
                    el.classList.remove("active");
                }
                el = el.nextSibling;
            }
            this.classList.add("active");
        };
    };

    //===== mobile-menu-btn
    // let navbarToggler = document.querySelector(".mobile-menu-btn");
    // navbarToggler.addEventListener('click', function () {
    //     navbarToggler.classList.toggle("active");
    // });


})();