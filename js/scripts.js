$(document).ready(function() {
  $("form#celeb").submit(function(event) {
    event.preventDefault();
    var age = $("#age").val();
    var sex = $("#sex").val();
    if (age === 'Under 18' && sex === 'Male') {
    $('#trump').show();
    $('#pauly').hide();
    $('#duster').hide();
    $('#darksided').hide();
    } else if (age === '18-25' && sex == 'Female') {
    $('#pauly').show();
    $('#trump').hide();
    $('#duster').hide();
    $('#darksided').hide();
    } else if (age === '26-35' && sex == 'Female') {
    $('#duster').show();
    $('#trump').hide();
    $('#pauly').hide();
    $('#darksided').hide();
    } else {
    $('#darksided').show();
    $('#trump').hide();
    $('#duster').hide();
    $('#pauly').hide();
    }
  })
});
