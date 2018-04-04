$(document).ready(function(){ 
    $('.alert').hide();
    $('.myForm').submit(function(){
        var applicant ={};
        applicant.first_name = $('#first_name_input').val();
        applicant.last_name = $('#last_name_input').val();
        applicant.middle = $('#middle_input').val();
        applicant.birth_date = $('#birth_date_input').val();
        applicant.street_address = $('#street_input').val();
        applicant.apt = $('#apt_input').val();
        applicant.city= $('#city_input').val();
        applicant.state = $('#state_input').val();
        applicant.last4 = $('#last4_input').val();
        console.log(applicant);
        // postApplicant(applicant);                
    })
    

    // finds input and saves it to local storage with same name for property
    var saveData = function(){
        for (var i=0;i < arguments.length; i++){
            var value = $("#" + arguments[i] + "").val();
            sessionStorage.setItem( arguments[i], value)          
        }
        console.log(sessionStorage);
    }

    $('.demo_button').on('click', function(){
        saveData('first_name', 'last_name', 'middle', 'birth_date', 'street', 'apt', 'city', 'state', 'last4', 'phone', 'email','alt_phone', 'gender', 'ethnicity','race', 'citizen', 'work_auth', 'sel_service', 'veteran', 'source', 'marital_status', 'primary_language', 'driving', 'license');
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
});




// ***** SESSION STORAGE WILL AUTOMATICALLY STORE ANY VALUE AS STRINGS. MUST INCLUDE SOME LOGIC TO PARSE BACK TO 
// INTEGER IN ORDER TO DO MATH CALCULATIONS*****
// ****MAYBE USE IMPLICIT COERCION TO TURN NUMBERS BACK INTO INTEGERS BEFORE SAVING TO DB. NUMBER * 1 ??? 