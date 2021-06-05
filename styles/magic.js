$(document).ready(function(){

$surface=$('.surface');
$bus = $('.bus');

$(document).on('keypress',function(e){
    if(e.which == 13){
        $($surface).toggleClass('moveRight');
        $($bus).toggleClass('suspension');
           }
})





});