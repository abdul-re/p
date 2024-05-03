$(document).ready(function () {
  
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
  
    for (let i = 1; i <= 20; i++) {
      $("#copyBtnDisplay").append(`
  
          <div class="card" id="nhl${i}">
          <button class="copybtn bg-secondary" onclick="copy(${i}, 'nhl-')">NHL ${i}</button>
      </div>
      <br>`);
  
      btnStyles();
    }
    $(".nav-link").on("click", function () {
      let leagueName = "";
      let totalPages = 20;
  
      if ($(this).html() === "NHL") {
        leagueName = "nhl-";
      } else if ($(this).html() === "NBA") {
        leagueName = "nba-";
      } else if ($(this).html() === "MLB") {
        leagueName = "mlb-";
      } else if ($(this).html() === "NFL") {
        leagueName = "nfl-";
        totalPages = 20;
      } else if ($(this).html() === "CFB") {
        leagueName = "cfb-";
        totalPages = 70;
      } else if ($(this).html() === "BOXING") {
        leagueName = "boxing-";
        totalPages = 10;
      } else if ($(this).html() === "MMA") {
        leagueName = "mma-";
        totalPages = 10;
      }
  
      document.title = leagueName.toUpperCase().replace("-", "");
  
      $("#copyBtnDisplay").html("");
  
      for (let i = 1; i <= totalPages; i++) {
        $("#copyBtnDisplay").append(`
    
          <div class="card" id="${leagueName+i}">
          <button class="copybtn bg-secondary" onclick="copy(${i}, '${leagueName}')">${document.title} ${i}</button>
      </div>
      <br>`);
        btnStyles();
      }
    });
  });
  
  function copy(index, league) {
    let url = `https://v1.s2watch.xyz/p/${league + index}.html`;
  
    navigator.clipboard.writeText(url);
  }