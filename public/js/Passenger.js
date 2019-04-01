/* global moment */

// When the page loads, grab and display all customers
$.get("/api/all", function(data) {

    if (data.length !== 0) {
  
      for (var i = 0; i < data.length; i++) {
  
        var row = $("<div>");
        row.addClass("passenger")
        row.append("<p>" + data[i].p_email)
        row.append("<p>" + data[i].p_password)
        row.append("<p>" + data[i].p_name)
        row.append("<p>" + data[i].p_address1)
        row.append("<p>" + data[i].p_address2)
        row.append("<p>" + data[i].p_city)
        row.append("<p>" + data[i].p_state)
        row.append("<p>" + data[i].p_zip)
        row.append("<p>" + data[i].p + "</p> Passenger.. ");
        row.append("<p>At " + moment(data[i].created_at).format("h:mma on dddd") + "</p>");

        // Timestamp
  
        $("#passenger-area").prepend(row);
  
      }
  
    }
  
  });
  
  // When user becomes a customer (clicks addBtn)
  $("#user-submit").on("click", function(event) {
    event.preventDefault();
  
    // Make a customer object
    let newCustomer = {
      author: $("#author").val().trim(),
      body: $("#chirp-box").val().trim(),
      created_at: moment().format("YYYY-MM-DD HH:mm:ss")
    };
  
    console.log(newCustomer);
 });