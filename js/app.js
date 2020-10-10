//Prevents from IMG download

$(document).ready(function()
{
    $('img').bind('contextmenu', function(e){
        return false;
    }); 
});

