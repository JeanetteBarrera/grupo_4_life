const seccionesPagina = new fullpage("#fullpage", {
    /*===================================================
     Configuracion fullpage, que se utiliza en el home
    ======================================================*/
    autoScrolling : true, // Se activa el scroll(por defecto activado)
    scrollingSpeed : 700, //Velocidad del scroll. Valores: en milisegundos
    css3 : true, // Si se usara CSS3 o Javascript (si esta en false, trabaja con javascript y tendriamos que incorporar una libreria)
    easingcss3 : 'ease-out', // Curva de velocidad del efecto
    loopBotton : false, // si esta activado al llegar al section-3 si queresmos seguir bajando te lleva a la section-1
    /*=======================================
    Opciones para Barras de Navegacion
    =========================================*/
    navigation: true, //Muestra la barra de navegacion
    /*menu: "#menu", // Menu de navegacion*/
    anchors: ['section1', 'section2','section3',"section4"], //Anclas, los usamos para identificar cada seccion y poder acceder a ella
    navigationTooltips : ['Home','Women',"Men",'About Life'], //Tooltips que mostrara por cada boton
    showActiveTooltip : false, //Mostrar tooltip activa*/
    controlArrows: false,
    slidesNavigation: false,
    verticalCentered: true
})

/* evento click para menu version movil*/
/*function menuMobile (){
    document.getElementById("menu-extendido").classList.toggle("hidden");
}
document.getElementById("boton").onclick = function() {
    menuMobile();
}

function menuSearch (){
    document.getElementById("search-extendido").classList.toggle("hidden");
}
document.getElementById("search").onclick = function() {
    menuSearch();
}

function menuUser (){
    document.getElementById("user-extendido").classList.toggle("hidden");
}
document.getElementById("user").onclick = function() {
    menuUser();
}

function menuCart (){
    document.getElementById("cart-extendido").classList.toggle("hidden");
}
document.getElementById("cart").onclick = function() {
    menuCart();
}*/