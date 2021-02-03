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
    navigationTooltips : ['Home','Ofertas',"Categorias",'Contactanos'], //Tooltips que mostrara por cada boton
    showActiveTooltip : false, //Mostrar tooltip activa*/
    controlArrows: false,
    slidesNavigation: true,
    verticalCentered: true
})