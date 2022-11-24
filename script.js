

const menuBtn = document.getElementById('menuBtn')
const sideNav = document.getElementById('sideNav')
const menu = document.getElementById('menu')

sideNav.style.right = "-250px";

menuBtn.onclick = function() {
    if(sideNav.style.right == "-250px") {
        sideNav.style.right = "0";
        menu.src = "images/close.png"
    }
    else{
        sideNav.style.right = "-250px";
        menu.src = "images/menu.png"
    }
}



const sideScrollTop = 0;
    navbar = document.getElementById("sideNav");
    window.addEventListener("scroll", function(){
        const scrollTop = window.pageYOffset || this.document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            sideNav.style.right="-250px";
        } else {
            sideNav.style.right="-250px"
        }
        lastScrollTop = scrollTop;
    })

const onScrollTop = 0;
    navbar = document.getElementById("menuBtn");
    window.addEventListener("scroll", function(){
        const scrollTop = window.pageXOffset || this.document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            menuBtn.style.top="-50px";
        } else {
            menuBtn.style.top="20px"
        }
        lastScrollTop = scrollTop;
    })



const lastScrollTop = 0;
    navbar = document.getElementById("navbar");
    window.addEventListener("scroll", function(){
        const scrollTop = window.pageYOffset || this.document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            navbar.style.top="-80px";
        } else {
            navbar.style.top="0"
        }
        lastScrollTop = scrollTop;
    })