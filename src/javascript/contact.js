var brasContact = {
    init: function(){
        brasContact.form();
    },
    form: function(){
        $('._bra-submit').on('click', function(e){
            e.preventDefault();
            $(this).parent().find("._bra-val").each(function(i) {
                 let name = $(this).attr('name'),
                     val = $(this).val();
         
                 console.log( 'name ' + name + ' val ' + val );
             });
         });
    }
}

$(document).ready(function(){
    brasContact.init();
});