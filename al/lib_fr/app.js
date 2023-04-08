$('a').mouseenter(function(){
    $(this).css('color', 'rgb(186, 186, 186)')
})

$('a').mouseleave(function(){
    $(this).css('color', 'white')
})

$('button').click(function(){
    $(this).addClass('bg-danger')
})


$('button').mouseenter(function(){
    $(this).removeClass('bg-secondary')
    $(this).addClass('bg-primary')
})

$('button').mouseleave(function(){
    $(this).addClass('bg-secondary')
    $(this).removeClass('bg-primary')
})