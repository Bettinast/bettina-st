$(document).ready(function(){
  //menu hamburger
  $(".icon-hamburguer-menu").on("click", function() {
    $(".navegation-link-content").slideToggle();
  });

  // Iugu.setAccountID("COLOCAR SEU ACCOUNT ID AQUI");
  //
  // jQuery(function($) {
  //   $('#payment-form').submit(function(evt) {
  //       var form = $(this);
  //       var tokenResponseHandler = function(data) {
  //
  //           if (data.errors) {
  //               // console.log(data.errors);
  //               alert("Erro salvando cartão: " + JSON.stringify(data.errors));
  //           } else {
  //               $("#token").val( data.id );
  //               form.get(0).submit();
  //           }
  //
  //           // Seu código para continuar a submissão
  //           // Ex: form.submit();
  //       }
  //
  //       Iugu.createPaymentToken(this, tokenResponseHandler);
  //       return false;
  //   });
  // });

});//wrapper end
