$(document).ready(function () {
    $.get("/api/user_data").then(function(data) {
      $(".member-name").text(data.email);
    });
  })
  

//   // The API object contains methods for each kind of request we'll make
// var API = {
//     savePost: function(post) {
//       return $.ajax({
//         headers: {
//           "Content-Type": "application/json"
//         },
//         type: "POST",
//         url: "/api/posts",
//         data: JSON.stringify(post)
//       });
//     },
//     getPosts: function() {
//       return $.ajax({
//         url: "/api/posts",
//         type: "GET"
//       });
//     },
//     deletePost: function(id) {
//       return $.ajax({
//         url: "/api/posts/" + id,
//         type: "DELETE"
//       });
//     },
//     getByCategory: function(category) {
//       console.log(category);
//       return $.ajax({
//         url: "/api/posts/category/" + category,
//         type: "GET"
//       });
//     },
//     getById: function(id) {
//       console.log(id);
//       return $.ajax({
//         url: "/api/posts/id/" + id,
//         type: "GET"
//       });
//     }
//   };
  
//   var latitude;
//   var longitude;
  
//   var getLocation = function() {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(storePosition);
//     } else {
//       throw new Error("Geolocation required.");
//     }
//   };
  
//   function storePosition(position) {
//     latitude = position.coords.latitude;
//     longitude = position.coords.longitude;
//     console.log(latitude, longitude);
//   }
  
//   var refreshCategory = function(category) {
//     console.log(category);
//     API.getByCategory(category).then(function(data) {
//       console.log(data);
//       var $posts = data.map(function(post) {
//         console.log(post);
//         var $a = $("<a>")
//           .text(post.band)
//           .attr("href", "/posts/" + post.id);
  
//         var $location = $("<h4>")
//           .text(post.location)
//           .attr("class", "event-location");
  
//         var $image = $("<img>").attr({ src: post.img, class: "event-image" });
  
//         var $description = $("<p>")
//           .text(post.description)
//           .attr("class", "event-description");
  
//         var $li = $("<li>")
//           .attr({
//             class: "list-group-item",
//             "data-id": post.id
//           })
//           .append($a)
//           .append($location)
//           .append($image)
//           .append($description);
  
//         console.log($li);
  
//         return $li;
//       });
  
//       console.log($posts);
  
//       $("#event-list").empty();
//       $("#event-list").prepend($posts);
//     });
//   };
  
//   // refreshExamples gets new examples from the db and repopulates the list
//   var refreshPosts = function() {
//     API.getPosts().then(function(data) {
//       var $posts = data.map(function(post) {
//         console.log(post);
//         var $a = $("<a>")
//           .text(post.band)
//           .attr("href", "/posts/" + post.id);
  
//         var $location = $("<h4>")
//           .text(post.location)
//           .attr("class", "event-location");
  
//         // var $image = $("<img class='event-image'>").attr("src", post.img);
  
//         var $description = $("<p>")
//           .text(post.description)
//           .attr("class", "event-description");

//         var $date = $("<p>")
//           .text(post.date)
//           .attr("class", "event-date");
  
//         var $li = $("<li>")
//           .attr({
//             class: "list-group-item",
//             "data-id": post.id
//           })
//           .append($a)
//           .append($location)
//           .append($image)
//           .append($description)
//           .append($date);
  
//         console.log($li);
  
//         return $li;
//       });
  
//       console.log($posts);
  
//       $("#event-list").empty();
//       $("#event-list").prepend($posts);
//     });
//   };
  
//   // handleFormSubmit is called whenever we submit a new example
//   // Save the new example to the db and refresh the list
  
//   $("#submit").on("click", function(event) {
//     event.preventDefault();
  
//     console.log("submitting");
  
//     var post = {
//       band: $("#inputBand")
//         .val()
//         .trim(),
//       location: $("#inputLocation")
//         .val()
//         .trim(),
//       img: $("#imageUrl")
//         .val()
//         .trim(),
//       description: $("#description")
//         .val()
//         .trim(),
//       category: $("#category")
//         .val()
//         .trim(),
//         date: $("#date")
//         .val()
//         .trim(),
//     //   latitude: latitude,
//     //   longitude: longitude
//     };
  
//     console.log(post);
  
//     API.savePost(post).then(function() {
//       console.log("posted");
//       $("#inputBand").val("");
//       $("#inputLocation").val("");
//       $("#imageUrl").val("");
//       $("#description").val("");
//       $("#category").val("");
//       $("#date").val("");
//       window.location.href = "/"; //add route here
//     });
//   });
  
//   // handleDeleteBtnClick is called when an example's delete button is clicked
//   // Remove the example from the db and refresh the list
//   var handleDeleteBtnClick = function() {
//     var idToDelete = $(this)
//       .parent()
//       .attr("data-id");
  
//     API.deletePost(idToDelete).then(function() {
//       refreshPosts();
//     });
//   };
  
//   // Add event listeners to the submit and delete buttons
//   $(".delete").on("click", handleDeleteBtnClick);
//   $(".category-select").on("click", function() {
//     console.log($(this).val());
//     newVal = $(this).val();
//     refreshCategory(newVal);
//   });
  
//   getLocation();
//   refreshPosts();