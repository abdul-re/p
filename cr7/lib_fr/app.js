
$('.copybtn').click(function(){
    $(this).addClass('bg-danger')
})


$('.copybtn').mouseenter(function(){
    $(this).removeClass('bg-secondary')
    $(this).addClass('bg-primary')
})

$('.copybtn').mouseleave(function(){
    $(this).addClass('bg-secondary')
    $(this).removeClass('bg-primary')
})