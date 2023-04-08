let display = document.querySelector('.container')
let i;
for (i = 1; i <= 40; i++) {

    display.innerHTML += `
    <div class="card">
    <button class="copybtn bg-success" id="dis${i}" onclick="copy(${i})">NCAAB${i}</button>
</div>
<br>`

$('button').click(function () {
    $(this).css('backgroundColor', 'red')
})

$('#dis15').css('display', 'none')
$('#dis25').css('display', 'none')
$('#dis39').css('display', 'none')
}


function copy(cid){
    let url = 'http://www.4ksoccer.tk/p/ncaab'+cid+'.html'

    if(url === 'http://www.4ksoccer.tk/p/ncaab1.html'){
        url = 'http://www.4ksoccer.tk/p/ncaab.html'
    }


    navigator.clipboard.writeText(url);
    console.log(url);
 }