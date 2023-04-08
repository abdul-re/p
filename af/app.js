let display = document.querySelector('#content')
for ( let i = 1; i <= 50; i++) {
   


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

         $(document).ready(function () {
         $('#dis5').css('display', 'none')
         $('#dis19').css('display', 'none')
         $('#dis29').css('display', 'none')
         $('#dis35').css('display', 'none')
         $('#dis37').css('display', 'none')
         $('#dis39').css('display', 'none')
     })
    }

    


function copy(cid){
    let url = 'https://uhdstream.blogspot.com/p/ncaab'+cid+'.html'

    navigator.clipboard.writeText(url);
 }



