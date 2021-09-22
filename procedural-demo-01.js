function calculateTotalWithTax() {
    var i, sumOfPrices=0;

    var $itemPrices = $('.item');
    var stateTax = $('#tax').val();

    for(i=0; i < $itemPrices.length; ++i) {
        sumOfPrices += parseInt($itemPrices.eq(i).val(), 10);
    }

    var totalWithTax = sumOfPrices * (1 + parseFloat(stateTax, 10));  

    $('#total').html('$' + totalWithTax);
}

$('#calculate-button').click(calculateTotalWithTax);
