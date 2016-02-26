//the code below is going to get the name of the appointment we need to get the json of when we click on that appointment

$(".apptThumbnail").on("click", function(){
  var clickedApptName = $(this).children().children().filter($(".apptTitle")).text();
  console.log("clickedApptName is " + clickedApptName);
  console.log(clickedApptName);

  

// looking for <div class="apptTitle">Meet w/Ash</div>pt(".Apptname")

});

// var clickedApptName = $(this).children().filter(".appt(".Apptname")
//
// for (i)
//
//  if (superObject[i].name === clickedApptName) {
//      JSON.parse(localStorage.getItem(superObject[i].name));
//         // set a new item
//
//         //get it on the appointment detail page
//  }
