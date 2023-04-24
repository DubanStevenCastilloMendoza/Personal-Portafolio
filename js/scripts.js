//mostrar menu hamburguesa cuando la ventana se haga mas pequeña (761px)

let menuIcon = document.querySelector('#menu-icono');
let navbar = document.querySelector('.navbar');


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); //agrega la clase bx-x y esta sirve para cambiar la apariencia del menu
    navbar.classList.toggle('active'); //muestra o oculta el menu 
}

//mostrar las etiquetas (a) activas dependiendo de la que se escoja y que tambien se activen cuando se le hace un scroll
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => { //llamma la función cada vez que el usuario se desplazza por la pagina
    sections.forEach(sec =>{ //hace una iteración sobre cada sección de la pagina
        
        //defienen las variables que se utilizan para determinar en que sección de la pagina estamos
        let top = window.scrollY;//es la posición de desplazamiento vertical de la ventana
        let offset = sec.offsetTop - 150; //es la distancia entre la parte superior y la sección actual de la pagina
        let height = sec.offsetHeight;// es la altura de la sección actual
        let id = sec.getAttribute('id');
        

        if (top >= offset && top < offset + height) {  //comprueba si la posición de desplazamieno esta dentro del rango de altura y desplazamiento de la sección actual
            navLinks.forEach(links =>{ //hace una iteración sobre los enlaces de navegación, este elimina de cada enlace la clase activa, y agrega la clase activa al enlace de navegación activo
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+ id +']').classList.add('active');
            })
        }
    });
    ///barra pegajosa border en top añadiendo la clase sticky:

let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100);

//remover el menu movil cuando se haga click en una sección del menu
menuIcon.classList.remove('bx-x'); 
navbar.classList.remove('active');

}

ScrollReveal({
    //  reset: true,
     distance: '80px',
     duration: 2000,
     delay: 200
 });

 ScrollReveal().reveal('.home-contenido, .heading', {origin: 'top'});
 ScrollReveal().reveal('.home-img, .servicios-contenedor, .portafolio-caja, .Contacto form', {origin: 'bottom'});
 ScrollReveal().reveal('.home-contenido h1 , .about-img', {origin: 'left'});
 ScrollReveal().reveal('.home-contenido p , .about-contenido', {origin: 'right'});








