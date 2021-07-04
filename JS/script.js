$(document).ready(function(){
    //ponemos codigos JS que utiliza JQuery
    
    configurarInicio();
    
    $('.myIcono').click(function(e){
        $('#navbar ul').toggleClass('lista-sm');
    })

    function configurarInicio(){
        let urlPath = window.location.pathname;
        //console.log(urlPath);
        $('nav a ').each(function(){
            let href = $(this).attr('href');
            //console.log(href);
            let indice = urlPath.length - href.length;
            if (urlPath.substring(indice) === href){
                $(this).closest('li').addClass('active');
            }
        })
    }
})