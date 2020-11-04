$(document).ready(function() {
    var eventForm = $("#eventform");
    var inputBand = $("inputBand");
    var inputLocation = $("#inputLocation");
    var imageURL = $("#imageURL");
    var inputDescription = $("#caption");
    var inputGenre = $("#category");

    eventForm.on("submit", function(event) {
        event.preventDefault();
        var eventData = {
            band: inputBand.val().trim(),
            location: inputLocation.val().trim(),
            image: imageURL.val().trim(),
            description: inputDescription.val().trim(),
            genre: inputGenre.val().trim()
        };

        createEvent(eventData);
    });

    function createEvent(data) {
        let { band, location, image, description, genre } = data;

        $.post("/api/addevent", {
            band: band,
            location: location,

        })

    }
});