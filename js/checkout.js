$(document).ready(function(){
  //menu hamburger
  $(".icon-hamburguer-menu").on("click", function() {
    $(".navegation-link-content").slideToggle();
  });

  Iugu.setAccountID("CCE90E42AC11451EB74EA8C768FBF966");
  Iugu.setTestMode(true);

  $('#payment-form').submit(function(evt) {
    var form = $(this);
    var tokenResponseHandler = function(data) {

      if (data.errors) {
        // console.log(data.errors);
        alert("Erro salvando cartão: " + JSON.stringify(data.errors));
      } else {
        var token = data.id;
        $("#token").val( data.id );
        console.log(data);

        var post_url = "http://avelar-dashboardpitzi.rhcloud.com/orders/dd0a54c40de33ebe1baf59ca7f7eaddd/" + token
        var email = "fortunato.avelar@gmail.com"; //email do cliente
        var amount = 1000; // valor em centavos
        var qtde = 1; // quantidade de produtos
        var item = "Nome do livro"; // que produto está sendo vendido

        $.ajax({
          url: post_url,
          crossDomain: true,
          data: {email: email, amount: amount, qtd: qtde, item: item},
          dataType: 'json',
          success: function(data) {
            if(data.success) {
              // pagamento feito com sucesso, enviar para planilha
              var invoice_id = data.response.invoice_id; // id da transação no iugu "E9EFA86CC7344176B8485D237FD20817"
            } else {
              console.log("falhou a transação");
              console.log(data.response.errors);
            }
          },
          type: 'POST'
        });


      }
      // Seu código para continuar a submissão
      // Ex: form.submit();
    }
    Iugu.createPaymentToken(this, tokenResponseHandler);
    return false;
  });

});//wrapper end
