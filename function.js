$(document).ready(() => {
    
    const title = document.title
    //console.log(title)
        
    // Titulo por defecto
    $(window).focus(() => {
        document.title = title
    })    
    
    // Titulo cambiado al entrar en otra tab
    $(window).blur(() => {
        document.title = 'EY, volvé a leer el artículo'
    })
    
})