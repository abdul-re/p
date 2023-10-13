      fetch(
        "https://sportea.online/v1/api.php?key=a38088a3a9ba7c256f6580413927a274"
      )
        .then((response) => response.json())
        .then((apiData) => {
          function populateTable(league, data) {
            const leagueTable = document.querySelector(`#${league}`);
            const tbody = leagueTable.querySelector("tbody");

            if (!data || data.length === 0) {
              leagueTable.style.display = "none";
            } else {
              leagueTable.style.visibility = "visible";

              data.forEach(function (event, index) {
                var eventTime = new Date(parseInt(event.event_time) * 1000);
                var options = {
                  timeZone: "America/New_York",
                  hour: "numeric",
                  minute: "numeric",
                };
                var row = tbody.insertRow();
                row.insertCell(0).textContent = index + 1;
                row.insertCell(1).textContent =
                  eventTime.toLocaleString("en-US", options) + " ET";
                row.insertCell(2).textContent = league.toUpperCase();
                row.insertCell(3).textContent = event.teams;
                row.insertCell(4).textContent = event.channel_id;
                row.insertCell(
                  5
                ).innerHTML = `<a href='javascript:void(0)' data-link="<iframe frameborder=0 width=640 height=480 src='https://espnv2.online/live/embed.php?ch=${event.channel_id}' allowfullscreen scrolling=no allowtransparency></iframe>" class="copyToClipboard"> Copy Embed </a>`;
                row.insertCell(
                  6
                ).innerHTML = `<a href="https://espnv2.online/live/embed.php?ch=${event.channel_id}" target="_blank" > Watch </a>`;
              });

              leagueTable.style.display = "table";
            }
          }

          populateTable("nhl", apiData[0].schedule.nhl);
          populateTable("mlb", apiData[0].schedule.mlb);
          populateTable("nba", apiData[0].schedule.nba);
          populateTable("nfl", apiData[0].schedule.nfl);
          populateTable("wnba", apiData[0].schedule.wnba);
          populateTable("soccer", apiData[0].schedule.soccer);
          populateTable("fighting", apiData[0].schedule.fighting);

          $(".copyToClipboard").click(function () {
            $(this).css("color", "red");
            let str = $(this).attr("data-link");
            console.log(str);
            const el = document.createElement("textarea");
            el.value = str;
            el.setAttribute("readonly", "");
            el.style.position = "absolute";
            el.style.left = "-9999px";
            document.body.appendChild(el);
            el.select();
            document.execCommand("copy");
            document.body.removeChild(el);
            $(this).addClass("text-danger");
          });
        });
