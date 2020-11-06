$(document).ready(function () {

  var eventArea = $("#event-list");
  let userId;

  $.get("/api/user_data").then(function (data) {
    $.post("/api/mail", { email: data.email })
  });
  $.get("/api/user_data").then(function (data) {
    $(".member-name").text(data.email);
    userId = data.id;
  }).then(function () {
    $.get("/api/events/user/" + userId, function (events) {
      events.forEach(event => {
        eventArea.prepend(renderEvent(event));
      })
    })
  })


  function renderEvent(data) {
    // Deconstructed values
    let { id, band, place, description, date, genre } = data;

    // Render html for event
    return $( /*html*/ `
  <div class="card">
      <div class="card-body">
        <h5 class="card-title">${band}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${place}</h6>
        <p class="card-text">${description}</p>
        <p class="card-text">Date: ${date}</p>
        <p class="card-text">Genre: ${genre}</p>
        <button type="button" id=${id} class="delete btn btn-danger">Delete</button>
      </div>
  </div>
  <br>
`);
  }

})