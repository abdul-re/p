let display = document.querySelector(".container-fluid");
let i;
for (i = 1; i <= 56; i++) {
    display.innerHTML += `
      <div class="card " id="dis${i}">
      <button class="copybtn bg-secondary" onclick="copy(${i})">NCAAB${i}</button>
  </div>
  <br>`;

  $('#dis3 , #dis12').hide()

    function copy(cid) {
        let url = 'http://www.cr8soccer.ml/p/ncaab' + cid + '.html'


        if (url === 'http://www.cr8soccer.ml/p/ncaab1.html') {
            url = 'http://www.cr8soccer.ml/p/ncaa-stanford-vs-pacific.html'
        }

        if (url === 'http://www.cr8soccer.ml/p/ncaab2.html') {
            url = 'http://www.cr8soccer.ml/p/ncaa-kentucky-vs-howard.html'
        }

        if (url === 'http://www.cr8soccer.ml/p/ncaab3.html') {
            url = 'http://www.cr8soccer.ml/p/ncaa-iowa-vs-bethune-cookman.html'
        }

        if (url === 'http://www.cr8soccer.ml/p/ncaab4.html') {
            url = 'http://www.cr8soccer.ml/p/ncaa-jacksonville-vs-duke.html'
        }

        if (url === 'http://www.cr8soccer.ml/p/ncaab5.html') {
            url = 'http://www.cr8soccer.ml/p/ncaa-washington-state-vs-texas-state.html'
        }

        if (url === 'http://www.cr8soccer.ml/p/ncaab6.html') {
            url = 'http://www.cr8soccer.ml/p/ncaa-oregon-vs-florida-a.html'
        }

        if (url === 'http://www.cr8soccer.ml/p/ncaab7.html') {
            url = 'http://www.cr8soccer.ml/p/ncaa-south-dakota-coyotes-vs-wisconsin.html'
        }

        if (url === 'http://www.cr8soccer.ml/p/ncaab8.html') {
            url = 'http://www.cr8soccer.ml/p/ncaa-colorado-vs-uc-riverside.html'
        }

        if (url === 'http://www.cr8soccer.ml/p/ncaab9.html') {
            url = 'http://www.cr8soccer.ml/p/ncaa-illinois-vs-eastern-illinois.html'
        }

        if (url === 'http://www.cr8soccer.ml/p/ncaab10.html') {
            url = 'http://www.cr8soccer.ml/p/ncaa-texas-vs-texas-el-paso-longhorn.html'
        }

        if (url === 'http://www.cr8soccer.ml/p/ncaab11.html') {
            url = 'http://www.cr8soccer.ml/p/ncaa-california-vs-uc-davis.html'
        }

        if (url === 'http://www.cr8soccer.ml/p/ncaab12.html') {
            url = 'http://www.cr8soccer.ml/p/ncaa-ucla-vs-sacramento-state.html'
        }

        if (url === 'http://www.cr8soccer.ml/p/ncaab13.html') {
            url = 'http://www.cr8soccer.ml/p/ncaa-oregon-state-vs-tulsa.html'
        }

        if (url === 'http://www.cr8soccer.ml/p/ncaab14.html') {
            url = 'http://www.cr8soccer.ml/p/ncaab-gonzaga-bulldogs-vs-michigan.html'
        }

        if (url === 'http://www.cr8soccer.ml/p/ncaab15.html') {
            url = 'http://www.cr8soccer.ml/p/ncaabcornell-vs-saint-francis-u.html'
        }

        if (url === 'http://www.cr8soccer.ml/p/ncaab16.html') {
            url = 'http://www.cr8soccer.ml/p/ncaabneumann-vs-wagner.html'
        }

        if (url === 'http://www.cr8soccer.ml/p/ncaab17.html') {
            url = 'http://www.cr8soccer.ml/p/ncaabmiami-oh-vs-georgia.html'
        }

        if (url === 'http://www.cr8soccer.ml/p/ncaab18.html') {
            url = 'http://www.cr8soccer.ml/p/ncaabtroy-vs-florida-state.html'
        }

        if (url === 'http://www.cr8soccer.ml/p/ncaab19.html') {
            url = 'http://www.cr8soccer.ml/p/ncaabbridgewater-vs-radford.html'
        }

        if (url === 'http://www.cr8soccer.ml/p/ncaab20.html') {
            url = 'http://www.cr8soccer.ml/p/ncaablafayette-vs-saint-josephs.html'
        }

        if (url === 'http://www.cr8soccer.ml/p/ncaab21.html') {
            url = 'http://www.cr8soccer.ml/p/ncaabnorth-carolina-central-vs-liberty.html'
        }

        if (url === 'http://www.cr8soccer.ml/p/ncaab22.html') {
            url = 'http://www.cr8soccer.ml/p/ncaabportland-vs-kent-state.html'
        }

        if (url === 'http://www.cr8soccer.ml/p/ncaab24.html') {
            url = 'http://www.cr8soccer.ml/p/ncaabmaryland-eastern-shore-vs-charlotte.html'
        }

        if (url === 'http://www.cr8soccer.ml/p/ncaab25.html') {
            url = 'http://www.cr8soccer.ml/p/ncaabvirginia-wesleyan-vs-old-dominion.html'
        }

        if (url === 'http://www.cr8soccer.ml/p/ncaab26.html') {
            url = 'http://www.cr8soccer.ml/p/ncaabtennessee-tech-vs-marshall.html'
        }

        if (url === 'http://www.cr8soccer.ml/p/ncaab27.html') {
            url = 'http://www.cr8soccer.ml/p/ncaabnorth-carolina-vs-gardner-webb.html'
        }

        if (url === 'http://www.cr8soccer.ml/p/ncaab28.html') {
            url = 'http://www.cr8soccer.ml/p/ncaabpurdue-vs-marquette.html'
        }

        if (url === 'http://www.cr8soccer.ml/p/ncaab29.html') {
            url = 'http://www.cr8soccer.ml/p/ncaaboregon-vs-montana-state.html'
        }

        if (url === 'http://www.cr8soccer.ml/p/ncaab30.html') {
            url = 'http://www.cr8soccer.ml/p/ncaabstanford-vs-san-diego-state.html'
        }

        if (url === 'http://www.cr8soccer.ml/p/ncaab31.html') {
            url = 'http://www.cr8soccer.ml/p/ncaabwisconsin-vs-wisconsin-green-bay.html'
        }

        if (url === 'http://www.cr8soccer.ml/p/ncaab32.html') {
            url = 'http://www.cr8soccer.ml/p/ncaabxavier-vs-fairfield.html'
        }

        if (url === 'http://www.cr8soccer.ml/p/ncaab33.html') {
            url = 'http://www.cr8soccer.ml/p/ncaabkansas-vs-duke.html'
        }

        if (url === 'http://www.cr8soccer.ml/p/ncaab34.html') {
            url = 'http://www.cr8soccer.ml/p/ncaabsouth-alabama-vs-alabama.html'
        }

        if (url === 'http://www.cr8soccer.ml/p/ncaab35.html') {
            url = 'http://www.cr8soccer.ml/p/ncaaboregon-state-vs-bushnell.html'
        }

        if (url === 'http://www.cr8soccer.ml/p/ncaab36.html') {
            url = 'http://www.cr8soccer.ml/p/ncaabunlv-vs-dayton.html'
        }

        if (url === 'http://www.cr8soccer.ml/p/ncaab37.html') {
            url = 'http://www.cr8soccer.ml/p/ncaabusc-vs-vermont.html'
        }

        if (url === 'http://www.cr8soccer.ml/p/ncaab38.html') {
            url = 'http://www.cr8soccer.ml/p/ncaabutah-tech-14-arizona.html'
        }

        if (url === 'http://www.cr8soccer.ml/p/ncaab39.html') {
            url = 'http://www.cr8soccer.ml/p/ncaabcentral-michigan-minnesota.html'
        }

        if (url === 'http://www.cr8soccer.ml/p/ncaab40.html') {
            url = 'http://www.cr8soccer.ml/p/ncaab-south-dakota-mississippi-state.html'
        }

        if (url === 'http://www.cr8soccer.ml/p/ncaab41.html') {
            url = 'http://www.cr8soccer.ml/p/ncaab-st-thomas-minnesota-montana.html'
        }

        if (url === 'http://www.cr8soccer.ml/p/ncaab42.html') {
            url = 'http://www.cr8soccer.ml/p/ncaabloyola-chicago-tulsa.html'
        }

        if (url === 'http://www.cr8soccer.ml/p/ncaab43.html') {
            url = 'http://www.cr8soccer.ml/p/ncaab20-michigan-arizona-state.html'
        }

        if (url === 'http://www.cr8soccer.ml/p/ncaab44.html') {
            url = 'http://www.cr8soccer.ml/p/ncaab-california-baptist-washington.html'
        }

        if (url === 'http://www.cr8soccer.ml/p/ncaab45.html') {
            url = 'http://www.cr8soccer.ml/p/ncaab50.html'+"  "
        }

        if (url === 'http://www.cr8soccer.ml/p/ncaab46.html') {
            url = 'http://www.cr8soccer.ml/p/ncaab53.html'+"   "
        }

        if (url === 'http://www.cr8soccer.ml/p/ncaab47.html') {
            url = 'http://www.cr8soccer.ml/p/ncaab51.html'+"    "
        }

        if (url === 'http://www.cr8soccer.ml/p/ncaab48.html') {
            url = 'http://www.cr8soccer.ml/p/ncaab54.html'+"    "
        }

        if (url === 'http://www.cr8soccer.ml/p/ncaab49.html') {
            url = 'http://www.cr8soccer.ml/p/ncaab55.html'+"    "
        }

        if (url === 'http://www.cr8soccer.ml/p/ncaab50.html') {
            url = 'http://www.cr8soccer.ml/p/ncaab56.html' +"   "
        }

        if (url === 'http://www.cr8soccer.ml/p/ncaab51.html') {
            url = 'http://www.cr8soccer.ml/p/ncaab57.html'+"    "
        }

        if (url === 'http://www.cr8soccer.ml/p/ncaab53.html') {
            url = 'http://www.cr8soccer.ml/p/ncaab53_26.html'
        }

        if (url === 'http://www.cr8soccer.ml/p/ncaab54.html') {
            url = 'http://www.cr8soccer.ml/p/ncaab54_26.html'
        }

        if (url === 'http://www.cr8soccer.ml/p/ncaab55.html') {
            url = 'http://www.cr8soccer.ml/p/ncaab55_26.html'
        }

        if (url === 'http://www.cr8soccer.ml/p/ncaab56.html') {
            url = 'http://www.cr8soccer.ml/p/ncaab56_26.html'
        }


        navigator.clipboard.writeText(url);
    }
}