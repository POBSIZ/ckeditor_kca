var scriptArea = $('.cke_contents_ltr');
var isitOn = 0;

function setSource(){
    $('.cke_contents_ltr').val('hello'); 
}

$(document).ready(function(){
    if(isitOn == 0){
        $('.ckeditor').val(theme_default); 
    }
});
$(document).on('click', '.cke_button__source', function(){});