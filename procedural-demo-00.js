function calc() {
    var i, s=0;
    var $items = $('.item');
    var tax = $('#tax').val();
    for(i=0; i < $items.length; ++i) {
        s += parseInt($items.eq(i).val(), 10);
    }
    var t = s * (1.0 + parseFloat(tax, 10));  
    $('#total').html('$' + t);
}
$('#calculate-button').click(calc);
