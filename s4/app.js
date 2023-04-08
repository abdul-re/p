let display = document.querySelector('#content')
for ( let i = 1; i <= 35; i++) {
   


        display.innerHTML += `
    <div class="block w-full rounded overflow-hidden shadow-md hover:shadow-lg mb-6 bg-white" id="dis`+ i + `">
        <div class="px-4 py-5 flex flex-row items-center color-test" id="add">
            <!-- copybutton -->
            <button class="copybtn" id="copy`+ i + `" onclick="copy(`+ i + `)" style="outline:none;" >COPY</button>
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

    }
function copy(cid){

    let url = 'http://www.streamer4u.tk/p/ncaab'+cid+'.html'
    navigator.clipboard.writeText(url);
 }


