var brasContact = {
    init: function(){
        brasContact.form();
    },
    form: function(){
        $('._bra-submit').on('click', function(e){
            e.preventDefault();
            let form = [];
        
            $(this).parent().find("._bra-val").each(function(i) {
                 let name = $(this).attr('name'),
                     val = $(this).val();
                     form.push(name + ' : ' + val);     
                 if($(this).is(':empty')){
                    $(this).parent().addClass('_bra-error')
                 }

             });
        
            console.log(JSON.stringify(form))
        });

        $("._bra-val").on('click', function(){
            $(this).parent().removeClass("_bra-error");
        });
    }
}

$(document).ready(function(){
    brasContact.init();
});