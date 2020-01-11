$(document).ready(function(){
    var topics = ["peppapig", "caillou"];

    function renderButtons(){
        $("#buttons-view").empty();

        for (var i =0; i < topics.length; i++){
            var a = $("<button>");
            a.addClass("cartoons");
            a.attr("data-name", topics[i]);
            a.text(topics[i]);
            $("#buttons-view").append(a);
        }
    }
    renderButtons();
   $(document).on("click", ".cartoons", function(){
       var list = $(this).attr("data-name");
       console.log(list);

       var APIKey = "tOHeh9c4S6r0SpoItBGtPWKCgF84HLRN";
       var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + list + "&api_key=" + APIKey;

       $.ajax({
           url: queryURL, 
           method: "GET"
       })
.then(function(response){
    var results = response.data;
    console.log(response)
    $("#gifs-appear-here").empty();
     for (var j = 0; j<results.length; j++){
         var cartoonDiv = $("<div>");
         var imageView = results[j].images.fixed_height.url;
         var still = results[j].images.fixed_height_still.url;
         //console.log(imageView);
         var cartoonImage = $("<img>").attr("src", still).attr("data-animate", imageView).attr("data-state", "still").attr("data-still", still).addClass("cartoons-image");
        cartoonDiv.append(cartoonImage);
        $("#gifs-appear-here").append(cartoonDiv);

     }

})

        
   })
   $(document).on("click", ".cartoons-image", function(){
       var state = $(this).attr("data-state");
       if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
      } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
      }

   })
      

    })
    
