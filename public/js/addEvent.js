$(document).ready(function() {
    var eventForm = $("#eventform");
    var inputBand = $("inputBand");
    var inputLocation = $("#inputLocation");
    var imageURL = $("#imageURL");
    var inputDescription = $("#caption");
    var inputDate = $("#date");
    var inputGenre = $("#category");
    var eventArea = $("event-list");

    eventForm.on("submit", function(event) {
        event.preventDefault();
        // Grab values from form
        var eventData = {
            band: inputBand.val().trim(),
            place: inputLocation.val().trim(),
            image: imageURL.val().trim(),
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
        let { band, place, image, description, date, genre } = data;
        //Post data through api route
        $.post("/api/addevent", {
            band: band,
            place: place,
            image: image,
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
        let { band, place, image, description, date, genre } = data;

        // Render html for event
        return $( /*html*/ `
            <div class="event">
                <img href="${image}" alt="Band Image" width="300" height="300">
                <p>Band: ${band}</p>
                <p>Location: ${place}</p>
                <p>Description of Event: ${description}</p>
                <p>Date: ${date}</p>
                <p>Genre: ${genre}</p>
            </div>
        `);
    }
});