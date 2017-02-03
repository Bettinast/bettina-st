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
        // tratar essa excecao
      } else {
        var token = data.id;
        $("#token").val( data.id );
        console.log(data);

        var post_url = "http://avelar-dashboardpitzi.rhcloud.com/orders/dd0a54c40de33ebe1baf59ca7f7eaddd/" + token;
        var email = $('#input-q8').val(); //email do cliente $("#email").val();
        var amount = $('#input-q12').val()*1000; // valor em centavos 25*100
        var qtde = 1; // quantidade de produtos
        var item = $('#input-q6').val(); // que produto está sendo vendido
        console.log(amount);
        console.log(post_url);
        console.log("Vai chamar");

        $.ajax({
          url: post_url,
          crossDomain: true,
          data: {email: email, amount: amount, qtd: qtde, item: item},
          dataType: 'json',
          success: function(data) {
            if(data.success) {
              // pagamento feito com sucesso, enviar para planilha
              var invoice_id = data.response.invoice_id; // id da transação no iugu "E9EFA86CC7344176B8485D237FD20817"
              console.log("Chamou " + invoice_id);
              //compra realizada com sucesso!
              // Send user form
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

  $.getScript("../js/jquery.validate.min.js", function(){
    $(".checkout-forms").validate({
      // Validate both google form and iugui form
      rules: {
        // simple rule, converted to {required:true}
        name: "required",
        // compound rule
        email: {
          required: true,
          email: true
        },
        address: "required",
        number: "required",
        cep: "required",
        city: "required",
        state: "required",
      },
      messages: {
        // simple rule, converted to {required:true}
        name: "Ops, queremos chamar você pelo nome :)",
        // compound rule
        email: {
          required: "Qual seu email para contato?",
          email: "Ops, verifique se o email está certinho?"
        },
        address: "Qual seu endereço?",
        number: "Qual o número do endereço?",
        cep: "Qual o cep?",
        city: "Ops, faltou a cidade?",
        state: "Ops, estado do endereço?",
      }
    });
  });
});//wrapper end
