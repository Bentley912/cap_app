$(document).ready(function(){
    $('.alert').hide();
    $('.myform').submit(function(){
        var applicant = {};
        applicant.emer_first = $('#first_name').val();
        applicant.emer_last  = $('#street').val();
        applicant.phone = $('#phone').val();
    })

    var saveData = function()
    {
        for (var i = 0; i < arguments.length; i++)
        {
            var value = $("#" + arguments[i] + "").val();
            sessionStorage.setItem( arguments[i], value)          
        }
        console.log(sessionStorage);
    }

    $('.demo_button').on('click', function(){
        saveData('first_name', 'street', 'phone');
    })
    
    function postApplicant (applicant)
    {
        $.post("/api/applicants", {applicant}).then(function(err,res)
        {
            if(err)
                console.log(err)
            else
                console.log(res)
            $('.alert').show();
        })
    }      
});