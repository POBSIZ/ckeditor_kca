$(document).ready(function(){
    $('.ckeditor').val(theme_test); 
});

var txtA = document.querySelector('#load_page');
$(document).on('click', '.tab', function(){
    while ( txtA.hasChildNodes() ) { 
        txtA.removeChild( txtA.firstChild ); 
    }

    txtA.removeChild('textarea');
    $('.ckeditor').val(theme_default); 
});
