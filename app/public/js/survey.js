$("#surveyForm").submit(function(event){
  console.log('hello');
    // event.preventDefault();
    // // call all values from form
    // // survey.html on armando
    // var newFriend = {
    //     name: $("#name").val().trim(),
    //     image: $("#image").val().trim(),
    //     scores: [$("#question1").val(), 
    //     $("#question2").val(), 
    //     $("#question3").val(), 
    //     $("#question4").val(), 
    //     $("#question5").val(), 
    //     $("#question6").val(), 
    //     $("#question7").val(), 
    //     $("#question8").val(), 
    //     $("#question9").val(), 
    //     $("#question10").val()
    //     ]
    //   };
    //   console.log(newFriend);
    //   $.post("/api/allfriends", newFriend).done(function(data){
    //       // display response from server side
    //       if(data){
    //         $("#modalText").text(data.name);
    //         $("#friendModal").modal("toggle");
    //       }
    //     $("#name").val(""),
    //     $("#image").val(""),
    //     $("#question1").val(""), 
    //     $("#question2").val(""), 
    //     $("#question3").val(""), 
    //     $("#question4").val(""), 
    //     $("#question5").val(""), 
    //     $("#question6").val(""), 
    //     $("#question7").val(""), 
    //     $("#question8").val(""), 
    //     $("#question9").val(""), 
    //     $("#question10").val("")
    //   });
})