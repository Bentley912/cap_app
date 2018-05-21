$(document).ready(function(){ 
    $('.alert').hide();
    // finds input and saves it to local storage with same name for property
    var saveData = function(){
        var data = sessionStorage;
        //Checks to see if Applicant exists in Local storage
        if (data.getItem('applicant') === null){
    //IF NOT CREATE NEW OBJECT AND ASSIGN IT TO SESSIONSTORAGE
            var applicant ={}
            for (var i=0;i < arguments.length; i++){
                var value = $("#" + arguments[i] + "").val(); 
                applicant[arguments[i]]= value;
            }
            data.setItem('applicant', JSON.stringify(applicant));
            console.log(sessionStorage);
        }

    //IF APPLICANT EXISTS, PARSE FROM STORAGE AND ADD NEW PROPS THEN RETURN TO LOCAL STORAGE
        else{
            objectData = JSON.parse(data.getItem('applicant'));
            var applicant ={}
            for (var i=0;i < arguments.length; i++){
                var value = $("#" + arguments[i] + "").val(); 
                applicant[arguments[i]]= value;
            }
            //MERGES OBJECTS 
            Object.assign(objectData, applicant);
            sessionStorage.setItem('applicant', JSON.stringify(objectData));
            console.log(sessionStorage); 
        }
    }

    var formCheck = function(){
        var missing = [];
        var argNames ={};
        var fields = $('input,textarea,select').filter('[required]:visible');
        for (var i=0; i < arguments.length; i++){
            argNames[arguments[i]] = arguments[i];
        }
        for (var i = 0; i<fields.length;i++){
            if (fields[i].value === ""){
                missing.push(fields[i].name);
            }
        }
        
        if (missing.length > 0){
            alert('The following fields are required:' + missing);
        }
        else 
        var titles= (Object.keys(argNames));
        for (var i=0; i<titles.length; i++){
            saveData(titles[i]);
        }
    }

    var saveCheckData = function(argName){
        var dataSet = [];
        var skills = $('.form-check-input:checked'); 
        for (var i=0; i<skills.length; i++){  
            dataSet.push(skills[i].value);
        }
        var newSkillSet =  dataSet.join();
        var data = sessionStorage;
        var applicant = {};
        objectData = JSON.parse(data.getItem('applicant'));
        applicant[argName] = newSkillSet;
        Object.assign(objectData, applicant);
        sessionStorage.setItem('applicant', JSON.stringify(objectData));
        console.log(sessionStorage);
    }


    $('.demo_button').on('click', function(){
        formCheck('first_name', 'last_name', 'middle', 'birth_date', 'street_address', 'apt', 'city', 'state', 'last4', 'phone', 'email','alt_phone', 'gender', 'ethnicity','race', 'citizen', 'work_auth', 'sel_service', 'veteran', 'source', 'marital_status', 'primary_language', 'driving', 'license');
        $('.alert').show();
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
        var data = sessionStorage;
        var applicant = JSON.parse(data.getItem('applicant'));
        $.ajax({
            type: "POST",
            url: '/api/applicants',
            data: applicant ,
            success: function(response){
                console.log(response)
            },
            dataType: JSON
          });   
    });

    $('.skills_button').on('click', function(){
        saveCheckData('job_skills');
    });

    $('.goals_button').on('click', function(){
        saveData('job_interest', 'goals' );
    })

    $('.barriers_button').on('click', function(){
        saveCheckData('barriers');
        saveData('crime_convictions', 'crime_details', 'felony_convictions', 'felony_details', 'pending_convictions', 'pending_details', 'sex_offender', 'probation_parole')
    })

    $('.agree_button').on('click', function(){
        var applicant= {};
        var data = sessionStorage;
        applicant.agreed = 'yes';
        objectData = JSON.parse(data.getItem('applicant'));
        Object.assign(objectData, applicant);
        sessionStorage.setItem('applicant', JSON.stringify(objectData));
        console.log(sessionStorage);
    })

    $('.skills_survey_button').on('click', function(){
        saveData('have_resume', 'I_can_create_resume', 'I_possess_interview_skills', 'support_system','networking_skills', 'job_search_skills', 'workplace_conflict_resolution_skill','teamwork_skills', 'job_maintenance_skills','have_career_goals')
        }
       
        
    )

    $('.computer_survey_button').on('click', function(){
        saveData('power_computer','operate_computer', 'typing_skills','use_word', 'open_internet_browser', 'have_email', 'google_something', 'improve_computer_skills');
        var data = sessionStorage;
        var applicant = JSON.parse(data.getItem('applicant'));
        $.ajax({
            type: "POST",
            url: '/api/applicants',
            data: applicant ,
            success: function(response){
                console.log(response)
            },
            dataType: JSON
          });   
        
    })

    function postApplicant (applicant){
        $.ajax({
            type: "POST",
            url: '/api/applicants',
            data: applicant ,
            success: function(response) {
                console.log(response)
            },
            dataType: JSON
          });   
    }  
});




// ***** SESSION STORAGE WILL AUTOMATICALLY STORE ANY VALUE AS STRINGS. MUST INCLUDE SOME LOGIC TO PARSE BACK TO 
// INTEGER IN ORDER TO DO MATH CALCULATIONS*****
// ****MAYBE USE IMPLICIT COERCION TO TURN NUMBERS BACK INTO INTEGERS BEFORE SAVING TO DB. NUMBER * 1 ??? 