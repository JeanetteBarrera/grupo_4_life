const seccionesPagina = new fullpage("#fullpage", {
    /*=======================================
            Opciones Basicas
    =======================================*/
    autoScrolling : true, // Se activa el scroll(por defecto activado)
    fitToSection :false, // Acomoda el scroll automaticamente para que la section se muestre en pantalla(se utiliza con autoscrolling desactivado)
    fitToSectionDelay : 300, // Delay antes de acomodar la section automaticamente(se utiliza con autoscrolling desactivado)
    easing : 'easeInOutCubic', // Funcion del tiempo de la animacion
    scrollingSpeed : 700, // Velocidad del scroll. Valores: en milisegundos
    css3 : true, // Si se usara CSS3 o Javascript (si esta en false, trabaja con javascript y tendriamos que incorporar una libreria)
    easingcss3 : 'ease-out', // Curva de velocidad del efecto
    loopBotton : false, // si esta activado al llegar al section-3 si queresmos seguir bajando te lleva a la section-1
    /*=======================================
            Opciones para Barras de Navegacion
    =======================================*/
    navigation: true, //Muestra la barra de navegacion
    /*menu: "#menu", // Menu de navegacion
    anchors: ['Inicio', 'Productos','Contacto'], //Anclas, los usamos para identificar cada seccion y poder acceder a ella
    navigationTooltips : ['Inicio','Productos','Contacto'], //Tooltips que mostrara por cada boton
    showActiveTooltip : false, //Mostrar tooltip activa*/
});
