// Descktop Menu
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
// Mobile Menu
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
// carrito
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

const cardsContainer = document.querySelector('.cards-container');




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

const productList = [];

productList.push({
    name: 'Bike',
    price: 120,
    img:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Computadora',
    price: 680,
    img:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Television',
    price: 900,
    img:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

function rederProducts (arr){
    for(product of productList){
        //con esto declaramos las etiquetas de cada uno de nuestro html y le ponemos las classes que tienen asi como sus atributos
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.img);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productInfoPrice = document.createElement('p');
        productInfoPrice.innerText = '$'+ product.price;
        const productInfoName = document.createElement('p');
        productInfoName.innerText = product.name;
    
        productInfoDiv.appendChild(productInfoPrice, productInfoName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
    
        //Aca empezamos a vincular las etiquetas con las etiquetas que las contienen
        productInfoFigure.appendChild(productImgCart);
    
        productInfoDiv.appendChild(productInfoPrice);
        productInfoDiv.appendChild(productInfoName);
    
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

rederProducts(productList);