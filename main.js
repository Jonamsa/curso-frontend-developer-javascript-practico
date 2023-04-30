// Descktop Menu
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
// Mobile Menu
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
// carrito
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');



// Desplegar menu del desktop
menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu (){
    const isAsideClosed = aside.classList.contains('inactive');//aca preguntamos si la clasee tambien tiene la clase inactive

    if (!isAsideClosed){
    aside.classList.add('inactive');//Si aside(Clase) no contiene tambien la clase inactive se añadira la clase inactive para que pueda abrirse el menuDesktop.
    }

    desktopMenu.classList.toggle('inactive');
}

// Desplegar menu del mobile
menuHamIcon.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu(){
    const isAsideClosed = aside.classList.contains('inactive');//aca preguntamos si la clasee tambien tiene la clase inactive

    if (!isAsideClosed){
    aside.classList.add('inactive');//Si aside(Clase) no contiene tambien la clase inactive se añadira la clase inactive para que pueda abrirse el mobileDesktop.
    }

    mobileMenu.classList.toggle('inactive');
}

// Desplegar el carrtio de compras
menuCarritoIcon.addEventListener('click', toggleAside);

function toggleAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive'); //aca preguntamos si la clasee tambien tiene la clase inactive
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive'); //Si desktopMenu(Clase) no contiene tambien la clase inactive se añadira la clase inactive para que pueda abrirse el carrito.
        }

    if(!isMobileMenuClosed){
    mobileMenu.classList.add('inactive'); //Si mobileMenu(Clase) no contiene tambien la clase inactive se añadira la clase inactive para que pueda abrirse el carrito.
    }

    aside.classList.toggle('inactive');
}
