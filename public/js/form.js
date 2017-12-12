$(document).ready(function(){ 

    $('.alert').hide();
    $('button').click(function(){
        event.preventDefault();
        var first_name = $('#first_name_input').val();
        var last_name = $('#last_name_input').val();
        var middle = $('#middle_input').val();
        var birth_date = $('#birth_date_input').val();
        var street = $('#street_input').val();
        var apt = $('#apt_input').val();
        var city= $('#city_input').val();
        var state = $('#state_input').val();
        var last4 = $('#last4_input').val();
        $.post("/api/applicants", {
            first_name:first_name,
            last_name:last_name,
            middle:middle,
            birth_date:birth_date,
            street_address:street,
            apt:apt
        }).then(function(err,res){
            if(err)
            console.log(err)
            else
            console.log(res)
            $('.alert').show();
        })
    })
});
