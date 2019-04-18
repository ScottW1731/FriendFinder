//submit event submit all form

$("#surveyForm").on("submit",function(event){
    event.preventDefault();
    // call all values from form
    // survey.html on armando
    var newFriend = {
        name: $("#name").val().trim(),
        image: $("#image").val().trim(),
        scores: [$("#question1").val(), 
        $("#question2").val(), 
        $("#question3").val(), 
        $("#question4").val(), 
        $("#question5").val(), 
        $("#question6").val(), 
        $("#question7").val(), 
        $("#question8").val(), 
        $("#question9").val(), 
        $("#question10").val()
        ]
      };
      $.post("/api/allfriends", newFriend).done(function(data){
          // display response from server side
          if(data){
            $("#modalText").text(data.name);
            $("#friendModal").modal("toggle");
          }
        $("#name").val(""),
        $("#image").val(""),
        $("#question1").val(""), 
        $("#question2").val(""), 
        $("#question3").val(""), 
        $("#question4").val(""), 
        $("#question5").val(""), 
        $("#question6").val(""), 
        $("#question7").val(""), 
        $("#question8").val(""), 
        $("#question9").val(""), 
        $("#question10").val("")
      })

/*
          //2.1 We validate the user input and send it to the backend if there is enough content
          if ($("#name").val() == '') {
            alert('Name Required');
            $('#name').focus(); //The focus function will move the cursor to "name" field
          } else if ($("#photo").val() == '') {
            alert('Photo Required');
            $('#photo').focus(); //The focus function will move the cursor to "photo" field
          }
    
          //3. We collect our incomming data and storage in the next object
          else {
            var newFriend = {
              name: $("#name").val().trim(),
              photo: $("#photo").val().trim(),
              scores: [$("#question1").val(), 
              $("#question2").val(), 
              $("#question3").val(), 
              $("#question4").val(), 
              $("#question5").val(), 
              $("#question6").val(), 
              $("#question7").val(), 
              $("#question8").val(), 
              $("#question9").val(), 
              $("#question10").val()]
            };
    
    
            //4. We call our post (ajax) method to send our object to the back-end
            $.post('/api/friends', newFriend).done(function (data) {
    
              //After our back-end receive the object and proccess its logic, send back the data to display to the user
              if (data) {
    
                //If our logic was correct, the next info is gonna be displayed to the user through the hidden Boostrap modal
                $("#modalBody").text("Name: " + data.name)
                $("#myModal").modal("toggle");
              }
    
              //After our function display the info to the user we clear the inputs
              $("#name").val(''), 
              $("#photo").val(''), 
              $("#question1").val(''), 
              $("#question2").val(''), 
              $("#question3").val(''), 
              $("#question4").val(''), 
              $("#question5").val(''), 
              $("#question6").val(''), 
              $("#question7").val(''), 
              $("#question8").val(''), 
              $("#question9").val(''), 
              $("#question10").val('')
            });
          }

          */

})