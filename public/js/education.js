$(document).ready(function(){
    $('.alert').hide();
    $('.eduForm').submit(function(){
        var applicant ={};
        applicant.diploma = $('#hsdiploma').val();
        applicant.hs_name = $('#hs_name').val();
        applicant.earn_year = $('#earn_year').val();

        applicant.ged = $('#gotGED').val();
        applicant.highest_grade = $('#highest_grade').val();
        
        applicant.extra_edu_a = $('#extra_a').val();
        applicant.extra_year_a = $('#extra_year_a').val();

        applicant.extra_edu_b = $('#extra_b').val();
        applicant.extra_year_b = $('#extra_year_b').val();

        console.log(applicant);
        // postApplicant(applicant);                
    })

    // finds input and saves it to local storage with same name for property
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
        saveData('hsdiploma', 'hs_name', 'earn_year', 'gotGED', 'highest_grade', 'extra_a', 'extra_year_a', 'extra_b', 'extra_year_b');
    })

    function postApplicant (applicant){
        $.post("/api/applicants", {applicant}).then(function(err,res)
        {
            if(err)
                console.log(err)
            else
                console.log(res)
            $('.alert').show();
        })
    }     
})