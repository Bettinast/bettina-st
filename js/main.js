$(document).ready(function(){
  //microinteraction landing headline
  $(".header-content").hide();
  $(".header-content").fadeIn(1000);
  //menu hamburger
  $(".icon-hamburguer-menu").on("click", function() {
    $(".navegation-link-content").slideToggle();
  });
  //scroll to top show
  $(document).scroll(function(){
    if ($(this).scrollTop() > 400) {
        $('.go-top').fadeIn();
    } else {
        $('.go-top').fadeOut();
    }
  });
  //scroll to top action
  $('.go-top').each(function(){
      $(this).click(function(){
          $('html,body').animate({ scrollTop: 0 }, 'slow');
          return false;
      });
  });

  $('.icon-arrow-down').each(function(){
      $(this).click(function(){
          $('html,body').animate({ scrollTop: 800 }, 'slow');
          return false;
      });
  });

  $.getScript("../js/jquery-ui.min.js", function(){
    $(".book-scrool-content img").draggable({
      axis: "x"
    });
  });


  // Iugu.setAccountID("COLOCAR SEU ACCOUNT ID AQUI");
  // Iugu.setTestMode(true); // Retirar esta linha para produção

  jQuery(function ($) {
      $('#payment-form').submit(function (evt) {
          if ($('#credit-card-checkbox').attr('checked')) {
              var form = $(this);
              var tokenResponseHandler = function (data) {

                  if (data.errors) {
                      alert("Erro salvando cartão: " + JSON.stringify(data.errors));
                  } else {
                      $("#token").val(data.id);
                      form.get(0).submit();
                  }
              }

              Iugu.createPaymentToken(this, tokenResponseHandler);
              return false;
          } else {
              form.get(0).submit();
          }
      });

      cc_checkbox = $('#credit-card-checkbox')
      cc_checkbox_label = $('#credit-card-checkbox-label')
      bs_checkbox = $('#bank-slip-checkbox')
      bs_checkbox_label = $('#bank-slip-checkbox-label')
      credit_card_form = $('.usable-creditcard-form')

      cc_checkbox.click(function () {
          bs_checkbox_label.removeClass("active");
          cc_checkbox_label.addClass("active");
          bs_checkbox.removeAttr("checked");
          cc_checkbox.attr("checked", "checked");
          credit_card_form.show();
      });

      bs_checkbox.click(function () {
          cc_checkbox_label.removeClass("active");
          bs_checkbox_label.addClass("active");
          cc_checkbox.removeAttr("checked");
          bs_checkbox.attr("checked", "checked");
          credit_card_form.hide();
      });
  });

});//wrapper end
