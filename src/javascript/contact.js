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
             });
        
            console.log(JSON.stringify(form))
         });
    }
}

$(document).ready(function(){
    brasContact.init();
});