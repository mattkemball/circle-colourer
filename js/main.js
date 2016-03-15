var $body = $('body');
var $form = $('form');
var $input = $('#color-selection');
var $color = $('.color');
var $ball = $('.ball');

$form.on('change', function () {
  $ball.css('background-color', $input.val());
});
