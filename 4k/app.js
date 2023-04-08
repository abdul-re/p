let display = document.querySelector('#content')
    let i;
    for (i = 1; i <= 40; i++) {

        display.innerHTML += `
    <div class="block w-full rounded overflow-hidden shadow-md hover:shadow-lg mb-6 bg-white" id="dis`+ i + `">
        <div class="px-4 py-5 flex flex-row items-center color-test" id="add">
            <!-- copybutton -->
            <button class="copybtn" id="copy`+ i + `" onclick="copy(`+ i + `)" >COPY</button>
            <!-- copybutton -->
            <div class="pl-4 w-full text-center"2
    <h3 class=" text-sm sm:text-xl mb-2" > CH.`+ i + ` </h3>
            </div>
             </div>
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
