$('a').mouseenter(function(){
    $(this).css('color', 'rgb(186, 186, 186)')
})

$('a').mouseleave(function(){
    $(this).css('color', 'white')
})

$('button').click(function(){
    $(this).addClass('bg-danger')
})