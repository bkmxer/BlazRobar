$(function() {



});
$(".menu-toggle").on('click', function() {
    $(this).toggleClass("on");
    $('.menu-section').toggleClass("on");
    $("nav ul").toggleClass('hidden');
});

$('.wrapper').on('click', function(){

    $(this).toggleClass('checked');

})