var brasContact = {
    init: function(){
        brasContact.sendGrid();
    },
    sendGrid: function(){
        $('._bra-submit').on('click', function(e){
            e.preventDefault();
            var form = [];
        
            $(this).parent().find("._bra-val").each(function(i) {
                 var name = $(this).attr('name'),
                     val = $(this).val();
                     form.push(name + ' : ' + val),  
                     formObj = JSON.parse(form)

             });

            $.post("https://brasforno.herokuapp.com/sendmail", {
                name:'Italo Leme',
                email:'slemeitalo@gmail.com',
                tel:'36020524',
                know:'SP',
                subject:'Message'
            })
            
        });

        $("._bra-val").on('click', function(){
            $(this).parent().removeClass("_bra-error");
        });
    }
}

$(document).ready(function(){
    brasContact.init();
});