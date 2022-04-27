$(document).ready(function() {

    $('.inp').on('click', function() {
        req = $.ajax({
            //url : '/speak',
            type : 'POST'
            contentType:"application/json"
            data : {texinp : text }
        });

        req.done(function(data) {

            //#$('#memberSection'+member_id).fadeOut(1000).fadeIn(1000);
            $('#usrInput').fadeOut(1000).fadeIn(1000);
            $('#usrInput').text(data.textinp);

        });
    

    });

});
