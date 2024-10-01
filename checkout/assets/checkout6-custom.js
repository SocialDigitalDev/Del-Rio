// NÃO REMOVER ESSE SCRIPT
// LÓGICA PARA A FORMA DE PAGAMENTO "PAGAMENTO INSTANT NEO" (SPINPAY)
setInterval(function () {
    if (0 === $("#banner-spin").length) {
        const n = '<img id="banner-spin" src="https://spinp.vteximg.com.br/arquivos/spinpay_vtex_pix.png"/>';
        0 !== $(".box-payment-spinpay").length && $(".box-payment-spinpay").html(n), 0 !== $(".SpinPayPaymentGroup").length && $(".SpinPayPaymentGroup").html(n), $("#payment-group-SpinPayPaymentGroup").children().css({
            "background-image": "url('https://spinp.vteximg.com.br/arquivos/spinpay_vtex_icon2.png'",
            "background-size": "40px 25px"
        }), $("#payment-group-SpinPayPaymentGroup").children().html("Pagamento Instantâneo")
    }
}, 100);
// FIM LÓGICA "PAGAMENTO INSTANT NEO"

var $win = $(window);
var $doc = $(document);

$("link[href*='checkout-custom.css']").remove();

var checkoutDelRio = {

    init: function () {

        setTimeout(() => {
            this.orderFormStep();
            this.emptyCart();
        }, 2000);

        setTimeout(() => {
            this.openLinks();
        }, 5000);

    },
    openLinks: function () {

        $('.summary-template-holder .cart-more-options button#shipping-calculate-link').trigger('click');
        $('.summary-template-holder .cart-totalizers #cart-link-coupon-add').trigger('click');

    },
    orderFormStep: function () {

        if (window.location.hash == "#/cart") {

            $('.progressive-bar').siblings().removeClass('active');
            $('.progressive-bar_bag').addClass('active');

        }

        if (window.location.hash == "#/email") {

            $('.progressive-bar').siblings().removeClass('active');
            $('.progressive-bar_identification').addClass('active');

        }

        if (window.location.hash == "#/profile" || window.location.hash == "#/shipping") {

            $('.progressive-bar').siblings().removeClass('active');
            $('.progressive-bar_identification').addClass('active');

        }

        if (window.location.hash == "#/payment") {
            $('.progressive-bar').siblings().removeClass('active');
            $('.progressive-bar_payment').addClass('active');
        }

    },
    sizeImg: function () {

        setTimeout(() => {
            $('.cart .table tbody .product-item').each(function () {

                var $this = $(this);

                if ($win.width() >= 768) {

                    var src = $this.find('.product-image img').attr('src');
                    src = src.replace('-55-55', '-90-90');
                    $this.find('.product-image img').attr('src', src);

                    var wdth = $this.find('.product-image img').attr('width');
                    wdth = wdth.replace('45', '90');
                    $this.find('.product-image img').attr('width', wdth);

                    var hgth = $this.find('.product-image img').attr('height');
                    hgth = hgth.replace('45', '90');
                    $this.find('.product-image img').attr('height', hgth);

                } else if ($win.width() <= 767) {

                    var src = $this.find('.product-image img').attr('src');
                    src = src.replace('-55-55', '-124-124');
                    $this.find('.product-image img').attr('src', src);

                    var wdth = $this.find('.product-image img').attr('width');
                    wdth = wdth.replace('45', '124');
                    $this.find('.product-image img').attr('width', wdth);

                    var hgth = $this.find('.product-image img').attr('height');
                    hgth = hgth.replace('45', '124');
                    $this.find('.product-image img').attr('height', hgth);

                }

            });
        }, 1000);

    },
    emptyCart: function () {

        if ($('.empty-cart-content').is(':visible')) {
            $('.cart-template.full-cart').css('display', 'block');
        }

    },
    openSelectShipping: function () {
        var elm = $(".srp-delivery-select")
        var len = $(".srp-delivery-select option").length

        elm.css({
            appearance: "menulist-button",
            opacity: 1,
            position: "relative",
            overflow: "auto",
            height: "auto",
            borderLeft: 0,
            borderRight: 0,
            borderRadius: 0,
            borderBottom: 0,
            padding: "14px"
        }).attr("size", len + len)
    },
    waitForElement: function(target, callback, interval = 500) {
        var tries = 0;
        var checkExist = setInterval(function () {
            if ($(target).length) {
                clearInterval(checkExist);
                callback && callback();
            } else {
                tries++;
                if (tries > 50) {
                    clearInterval(checkExist);
                    console.log('cansou de esperar e desistiu');
                }
            }
        }, interval);
    }
}


$doc.ready(function () {
    checkoutDelRio.init();
    checkoutDelRio.waitForElement(".srp-delivery-select", function () {
        checkoutDelRio.openSelectShipping()
    });
});

$win.on('hashchange', function (e) {
    checkoutDelRio.orderFormStep();
});

$(window).on('orderFormUpdated.vtex', function (evt, orderForm) {
    checkoutDelRio.sizeImg();
    checkoutDelRio.waitForElement(".srp-delivery-select", function () {
        checkoutDelRio.openSelectShipping()
    });
});
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
function appendFields() {
    $('.box-client-info').append(`
        <div class="whatsapp" style="margin-top: 8px;">
            
            <label for="birthDate">
                Data de nascimento
            </label>

            <input 
                type="date" 
                required
                name="birthDate" 
                id="opt-in-birthDate"

                style="height: 32px;
                    padding: 6px 5px 6px 18px;
                    border: 0.5px solid #B2B2B2;
                    border-radius: 0;
                    box-shadow: none;
                    text-shadow: none;
                    background: #fff;
                    font-family: 'Akrobat', sans-serif;
                    font-weight: 500;
                    font-size: 16px;
                    color: #989898;
                    line-height: 20px;"
            /> 
            <span class="help error birth-error" style="display: none;">
				Campo obrigatório.			
			</span>
                                 
          
        </div>
    `);
}

document.addEventListener('DOMContentLoaded', (e) => {
    appendFields()

    $("#go-to-shipping").click(function() {
  		
    	birth = $('#opt-in-birthDate').val()
        if( birth.length == 0){
            $(".birth-error").css("display", "block")
        } else{
            $(".birth-error").css("display", "none")
            saveMasterData()
        }
  
    });
}) 

function saveMasterData() {

    const orderId = vtexjs.checkout.orderFormId
    let birth = $('#opt-in-birthDate').val();
    let email = $('#client-email').val();
    let name = $('#client-first-name').val();

    var data = {
        birthDate: birth,
        email: email,
        name: name,
    };

    $.ajax({
        async: true,
        url: `/safedata/CL/documents?_orderFormId=${orderId}`,
        type: 'PATCH',
        contentType: 'application/json',
        data: JSON.stringify(data),
        success: function (success) {console.log("success", success)},
        error: function (error) {console.log("error", error)},
  });
}