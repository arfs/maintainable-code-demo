function calc() {
  var i1 = parseInt($('#i1').val(), 10);
  var i2 = parseInt($('#i2').val(), 10);
  var i3 = parseInt($('#i3').val(), 10);
  var tax = $('#tax').val();  
  var t = (i1 + i2 + i3) * (1 + tax);  
  var total = $('#total').html('$' + t);
}

$('#calculate-button').click(calc);

-------

