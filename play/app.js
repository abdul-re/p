$(document).ready(function () {
  $("#navShow").html(`
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
    <div class="container-fluid">
      <a href="" class="navbar-brand"></a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-link active line" href="javascript:void(0)">NHL</a>
          <a class="nav-link" href="javascript:void(0)">NBA</a>
          <a class="nav-link" href="javascript:void(0)">MLB</a>
          <a class="nav-link" href="javascript:void(0)">NCAAB</a>
          <a class="nav-link" href="javascript:void(0)">NFL</a>
          <a class="nav-link" href="javascript:void(0)">CFB</a>
          <a class="nav-link" href="javascript:void(0)">BOXING</a>
          <a class="nav-link" href="javascript:void(0)">MMA</a>
        </div>
      </div>
    </div>
    </nav>
      `);

  $(".nav-link").click(function () {
    $(this).addClass("active line").siblings().removeClass("active line");
  });

  function btnStyles() {
    $(".copybtn").click(function () {
      $(this).addClass("bg-danger");
    });

    $(".copybtn").mouseenter(function () {
      $(this).removeClass("bg-secondary");
      $(this).addClass("bg-primary");
    });

    $(".copybtn").mouseleave(function () {
      $(this).addClass("bg-secondary");
      $(this).removeClass("bg-primary");
    });
  }

  for (let i = 1; i <= 15; i++) {
    $("#copyBtnDisplay").append(`
  
          <div class="card ">
          <button class="copybtn bg-secondary" onclick="copy(${i}, 'nhl')">NHL ${i}</button>
      </div>
      <br>`);

    btnStyles();
  }
  $(".nav-link").on("click", function () {
    let leagueName = "";
    let totalPages = 20;

    if ($(this).html() === "NHL") {
      leagueName = "nhl";
    } else if ($(this).html() === "NBA") {
      leagueName = "nba";
    } else if ($(this).html() === "MLB") {
      leagueName = "mlb";
    } else if ($(this).html() === "NFL") {
      leagueName = "nfl";
      totalPages = 20;
    } else if ($(this).html() === "CFB") {
      leagueName = "cfb";
      totalPages = 100;
    } else if ($(this).html() === "BOXING") {
      leagueName = "boxing";
      totalPages = 5;
    } else if ($(this).html() === "MMA") {
      leagueName = "mma";
      totalPages = 5;
    } else if ($(this).html() === "NCAAB") {
      leagueName = "ncaab";
      totalPages = 200;
    }

    document.title = leagueName.toUpperCase().replace("-", "");

    $("#copyBtnDisplay").html("");

    for (let i = 1; i <= totalPages; i++) {
      $("#copyBtnDisplay").append(`
    
          <div class="card ">
          <button class="copybtn bg-secondary" onclick="copy(${i}, '${leagueName}')">${document.title} ${i}</button>
      </div>
      <br>`);
      btnStyles();
    }
  });
});

function copy(index, league) {
  let url = `http://play.btsports.online/p/${league + index}.html`;

  navigator.clipboard.writeText(url);
}
