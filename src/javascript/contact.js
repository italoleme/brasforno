var brasContact = {
    init: function(){
        //brasContact.sendGrid();
    },
    sendGrid: function(){
        $('._bra-submit').on('click', function(e){
            e.preventDefault();
            var form = {};
        
            $(this).parent().find("._bra-val").each(function(i) {
                form[this.name] = $(this).val();        
            });
        
            var obj = {form: form};
            console.log(obj)

            // $.post("https://brasforno.herokuapp.com/sendmail", {
            //     obj
            // })
        });

        $("._bra-val").on('click', function(){
            $(this).parent().removeClass("_bra-error");
        });
    }
}

$(document).ready(function(){
    brasContact.init();
});