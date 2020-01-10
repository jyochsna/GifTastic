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
       var list = $(this).html();
       console.log(list);

       var APIKey = "4HrdLBrV2OKr2A8OuTf2IN66oKppBvNS";
       var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + list + APIKey;

       $.ajax({
           url: queryURL, 
           method: "GET"
       })
.done(function(response){
    var results = response.data;
    $("#gifs-appear-here").empty();
     for (var j = 0; j<results.length; j++){
         var imageDiv = $("<div>");
         var imageView = results[j].images.fixed_height.url;
         var still = results[j].images.fixed_height_still.url;
         //console.log(imageView);
         var  = $("<img>").attr("src", still).attr('data-animate', imageView).attr('data-still', still);

     }
})
        
   })
      

    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .then(function(response){
        console.log(response.data);
        var results = response.data;
         for (var i=0; i<results.length; i++);
         var gifImage = $()

    })
    }
