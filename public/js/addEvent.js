$(document).ready(function() {
    var eventForm = $("#eventform");
    var inputBand = $("#inputBand");
    var inputLocation = $("#inputLocation");
    var inputDescription = $("#description");
    var inputDate = $("#date");
    var inputGenre = $("#category");
    var eventArea = $("#event-list");

    eventForm.on("submit", function(event) {
        event.preventDefault();
        // Grab values from form
        var eventData = {
            band: inputBand.val().trim(),
            place: inputLocation.val().trim(),
            description: inputDescription.val().trim(),
            date: inputDate.val().trim(),
            genre: inputGenre.val().trim()
        };

        createEvent(eventData);
    });


    $.get("/api/events", function(events) {
        events.forEach(event => {
            eventArea.prepend(renderEvent(event));
        })
    });

    function createEvent(data) {
        // Deconstructed values
        let { band, place, description, date, genre } = data;
        //Post data through api route
        $.post("/api/addevent", {
            band: band,
            place: place,
            description: description,
            date: date,
            genre: genre
        }).then(function(data) {
            // Redirect to members.html
            window.location.replace("/members");
        }).catch(function(err) {
            // Thow error
            if (err) throw err;
        });
    }


    function renderEvent(data) {
        // Deconstructed values
        let { band, place, description, date, genre } = data;

        // Render html for event
        return $( /*html*/ `
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title">${band}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">${place}</h6>
                  <p class="card-text">${description}</p>
                  <p class="card-text">Date: ${date}</p>
                  <p class="card-text">Genre: ${genre}</p>
                </div>
            </div>
            <br>
        `);
    }
});