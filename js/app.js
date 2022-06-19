/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */
window.onload = function() {
    /**
     * Define Global Variables
     * 
     */
    const navbarlist = document.getElementById("navbar__list");
    const allsections = document.querySelectorAll('section');
    const goTop = document.getElementById('goTop');
    const mobilemenu = document.getElementById("morebtn");
    /**
     * End Global Variables
     * Start Helper Functions
     * 
     */


    /**
     * End Helper Functions
     * Begin Main Functions
     * 
     */

    // build the nav
    // Scroll to section on link click
    allsections.forEach(element => {
        const dataNav = element.getAttribute('data-nav');
        const links = document.createElement('li');
        links.innerText = dataNav;
        links.id = "click" + dataNav.replace(" ", "").toLowerCase();
        navbarlist.appendChild(links);
    });

    // Add class 'active' to section when near top of viewport
    // Scroll to anchor ID using scrollTO event
    // Set sections as active

    window.addEventListener("scroll", event => {
        let fromTop = window.scrollY;
        allsections.forEach(element => {
            var naveselectsname = document.getElementById("click" + element.id);
            if (element.offsetTop <= fromTop + 20 && element.offsetTop + element.offsetHeight >= fromTop + 20) {
                element.classList.add("active");
                // set activenav
                naveselectsname.classList.add("activenav");
            } else {
                element.classList.remove("active");
                naveselectsname.classList.remove("activenav");
            }
        });
    });
    // scroll by scrollIntoView() function 
    allsections.forEach(element => {
        var gotoclick = document.getElementById("click" + element.id);
        var viewsection = document.getElementById(element.id);
        gotoclick.onclick = function() {
            viewsection.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        }
    });

    /**
     * End Main Functions
     * Begin Events
     * 
     */

    // Build menu 
    mobilemenu.onclick = function() {
        if (navbarlist.style.display === 'block') {
            navbarlist.style.display = "none";
        } else {
            navbarlist.style.display = "block";
        }
    }



    // goto top 
    window.onscroll = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            goTop.style.display = "block";
            goTop.innerText = "Top";
        } else {
            goTop.style.display = "block";
            goTop.innerText = "bottom";
        }
    };
    goTop.onclick = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        } else {
            document.body.scrollTop = document.body.scrollHeight;
            document.documentElement.scrollTop = document.body.scrollHeight;
        }

    }

}