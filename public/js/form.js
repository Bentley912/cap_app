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
        postApplicant(applicant);
    })


    function postApplicant (reqContent){
        $.post("/api/applicants", {reqContent}).then(function(err,res){
            if(err)
            console.log(err)
            else
            console.log(res)
            $('.alert').show();
        })
    }
   
});