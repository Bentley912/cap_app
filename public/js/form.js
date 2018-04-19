$(document).ready(function(){ 
    $('.alert').hide();

    // finds input and saves it to local storage with same name for property

    var saveData = function(){
        data = sessionStorage;
        if (data.getItem('applicant') === null){
            console.log('Applicant Empty')
            applicant ={}
            for (var i=0;i < arguments.length; i++){
                var value = $("#" + arguments[i] + "").val(); 
                applicant[arguments[i]]= value;
            }
            sessionStorage.setItem('applicant', JSON.stringify(applicant));
            console.log(sessionStorage);
        }
        else{
            objectData = JSON.parse(data.getItem('applicant'));
            applicant ={}
            for (var i=0;i < arguments.length; i++){
                var value = $("#" + arguments[i] + "").val(); 
                applicant[arguments[i]]= value;
            }
            Object.assign(objectData, applicant);
            sessionStorage.setItem('applicant', JSON.stringify(objectData));
            console.log(sessionStorage);
        // sessionStorage.setItem('applicant', JSON.stringify(applicant));
        }
    }

    $('.demo_button').on('click', function(){
        saveData('first_name', 'last_name', 'middle', 'birth_date', 'street', 'apt', 'city', 'state', 'last4', 'phone', 'email','alt_phone', 'gender', 'ethnicity','race', 'citizen', 'work_auth', 'sel_service', 'veteran', 'source', 'marital_status', 'primary_language', 'driving', 'license');
    })

    $('.contact_button').on('click', function(){
        saveData('contact_name', 'contact_phone', 'contact_address')
    })

    $('.household_button').on('click', function(){
        saveData('household_adults', 'household_children', 'household_special_needs')
    })

    $('.income_button').on('click', function(){
        saveData('tanf_income', 'medicaid_income', 'snap_income', 'social_secuirty_income', 'other_income', 'yearly_income')
    })

    $('.employment_button').on('click', function(){
        saveData('employed', 'work_months', 'company1_name', 'company1_role', 'company1_start_date', 'company1_end_date', 'company1_hours', 'company1_pay_rate', 'company1_pay_frequency', 'company1_reason', 'company2_name', 'company2_role', 'company2_start_date', 'company2_end_date', 'company2_hours', 'company2_pay_rate', 'company2_pay_frequency', 'company2_reason', 'company3_name', 'company3_role', 'company3_start_date', 'company3_end_date', 'company3_hours', 'company3_pay_rate', 'company3_pay_frequency', 'company3_reason')
    })

    $('.db_button').on('click', function(){
        var applicant = {sessionStorage};
        console.log(applicant);
    });

    function postApplicant (applicant){
        $.ajax({
            type: "POST",
            url: '/api/applicants',
            data: applicant ,
            success: function(response){
                console.log(response)
            },
            dataType: JSON
          });   
    }  
});




// ***** SESSION STORAGE WILL AUTOMATICALLY STORE ANY VALUE AS STRINGS. MUST INCLUDE SOME LOGIC TO PARSE BACK TO 
// INTEGER IN ORDER TO DO MATH CALCULATIONS*****
// ****MAYBE USE IMPLICIT COERCION TO TURN NUMBERS BACK INTO INTEGERS BEFORE SAVING TO DB. NUMBER * 1 ??? 