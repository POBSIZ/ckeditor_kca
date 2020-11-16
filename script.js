var scriptArea = $('.cke_contents_ltr');
var isitOn = 0;

function setSource(){
    $('.cke_contents_ltr').val('hello'); 
}

$(document).ready(function(){
});
$(document).on('click', '.cke_button__source', function(){
    if(isitOn == 0){
        $('.cke_contents_ltr').val(theme_default); 
    }
});