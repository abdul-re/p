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
    let totalPages = 15;

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
      totalPages = 70;
    } else if ($(this).html() === "BOXING") {
      leagueName = "boxing";
      totalPages = 5;
    } else if ($(this).html() === "MMA") {
      leagueName = "mma";
      totalPages = 5;
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
  let url = `https://espnonline.cf/p/${league + index}.html`;

  if (url === "https://espnonline.cf/p/cfb57.html") {
    url = "http://p2.espnonline.cf/p/cfb.html";
  } else if (url === "https://espnonline.cf/p/cfb58.html") {
    url = "http://p2.espnonline.cf/p/cfb_25.html";
  } else if (url === "https://espnonline.cf/p/cfb59.html") {
    url = "http://p2.espnonline.cf/p/cfb_1.html";
  } else if (url === "https://espnonline.cf/p/cfb60.html") {
    url = "http://p2.espnonline.cf/p/cfb_69.html";
  } else if (url === "https://espnonline.cf/p/cfb61.html") {
    url = "http://p2.espnonline.cf/p/cfb_17.html";
  } else if (url === "https://espnonline.cf/p/cfb62.html") {
    url = "http://p2.espnonline.cf/p/cfb_6.html";
  } else if (url === "https://espnonline.cf/p/cfb63.html") {
    url = "http://p2.espnonline.cf/p/cfb_52.html";
  } else if (url === "https://espnonline.cf/p/cfb64.html") {
    url = "http://p2.espnonline.cf/p/cfb_41.html";
  } else if (url === "https://espnonline.cf/p/cfb65.html") {
    url = "http://p2.espnonline.cf/p/cfb_39.html";
  } else if (url === "https://espnonline.cf/p/cfb66.html") {
    url = "http://p2.espnonline.cf/p/cfb_3.html";
  } else if (url === "https://espnonline.cf/p/cfb67.html") {
    url = "http://p2.espnonline.cf/p/cfb_20.html";
  } else if (url === "https://espnonline.cf/p/cfb68.html") {
    url = "http://p2.espnonline.cf/p/cfb_0.html";
  } else if (url === "https://espnonline.cf/p/cfb69.html") {
    url = "http://p2.espnonline.cf/p/cfb_61.html";
  } else if (url === "https://espnonline.cf/p/cfb70.html") {
    url = "http://p2.espnonline.cf/p/cfb_77.html";
  }

  navigator.clipboard.writeText(url);
}
