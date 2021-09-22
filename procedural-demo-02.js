function main() {
    $('#calculate-button').click(function() {
        var stateTax = parseFloat($('#tax').val(), 10);
        var itemPrices = getItemPricesFromUI();

        var totalWithTax = calculateTotalWithTax(itemPrices, stateTax);

        $('#total').html('$' + totalWithTax);
    });
}

function getItemPricesFromUI() {
    var i;
    var $items = $('.item');
    var price, itemPrices = [];

    for(i=0; i < $items.length; ++i) {
        price = $items.eq(i).val();
        itemPrices.push(price);
    }

    return itemPrices;
}

function calculateTotalWithTax(itemPrices, stateTax) {
    var i, sumOfPrices=0;

    for(i=0; i < itemPrices.length; ++i) {
        sumOfPrices += parseInt(itemPrices[i], 10);
    }

    var totalWithTax = sumOfPrices * (1 + parseFloat(stateTax));  

    return totalWithTax;
}

/* don't copy below right away */

function getItemPricesFromLocalStorage() {
    var itemPrices = localStorage.getItem('itemPrices');

    if(!itemPrices) { 
        return [];
    }

    return itemPrices.split(',');
}

 function getStateTaxFromLocalStorage() {
     var stateTax = localStorage.getItem('stateTax');

     if(!stateTax) {
         return 0;
     }

     return stateTax;
 }

if(typeof module === 'undefined') { 
    main();
}
else {
    module.exports = {
        calculateTotalWithTax: calculateTotalWithTax
    };
}


