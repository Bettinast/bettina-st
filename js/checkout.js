$(document).ready(function(){
  //menu hamburger
  $(".icon-hamburguer-menu").on("click", function() {
    $(".navegation-link-content").slideToggle();
  });

  $('#input-form').one('submit',function(){

    //reverse captcha
    var sp = $('#input-q7').val();
    if (sp == "") {
      return true;
    } else {
      console.log("reverse captcha activated");
      return false;
    }

    var inputq1 = encodeURIComponent($('#input-q1').val());
    var inputq2 = encodeURIComponent($('#input-q2').val());
    var inputq3 = encodeURIComponent($('#input-q3').val());
    var inputq4 = encodeURIComponent($('#input-q4').val());
    var inputq5 = encodeURIComponent($('#input-q5').val());
    var inputq6 = encodeURIComponent($('#input-q6').val());
    var inputq7 = encodeURIComponent($('#input-q7').val());
    var inputq8 = encodeURIComponent($('#input-q8').val());
    var q1ID = "entry.2129248737";
    var q2ID = "entry.1515862082";
    var q3ID = "entry.865173911";
    var q4ID = "entry.1517329504";
    var q5ID = "entry.1664080007";
    var q6ID = "entry.133297670";
    var q7ID = "entry.390512294";
    var q8ID = "entry.1776115297";
    var baseURL = 'https://docs.google.com/forms/d/e/1FAIpQLSffw9U9clzcP3QEP0GeWC3EL8mZyA9XhBiPgvMcGKd7kcAJSQ/formResponse?';
    var submitRef = '&submit=Submit';
    var submitURL = (baseURL + q1ID + "=" + inputq1 + "&" + q2ID + "=" + inputq2 + "&" + q3ID + "=" + inputq3 + "&" + q4ID + "=" + inputq4 + "&" + q5ID + "=" + inputq5 + "&" + q6ID + "=" + inputq6 + "&" + q7ID + "=" + inputq7 + "&" + q8ID + "=" + inputq8 + submitRef);
    console.log(submitURL);
    $(this)[0].action=submitURL;
    $('#input-feedback').text('Thank You!');
  });

});//wrapper end
