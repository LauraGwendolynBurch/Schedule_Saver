// Get current hour of the day moment.js
$(document).ready(function(){

    $(".saveBtn").on("click", function(event){
        var textEl = $(this).siblings(".text").val()
        console.log(textEl)
        var timeId =  $(this).siblings(".text").attr("id")
        //console.log(timeId)
        localStorage.setItem(timeId, textEl)
        // console.log(this)
    })

    var time = moment().format("MMM Do YYYY"); 
    $("#currentDay").append(time);
})


// for loop over the hours of the day from 9am to i <= 17

//for loop get one place to another (aka start and stop)

//       var i = 9; in html 
//       element id add id= "#hour-" + i;
//       Current checking 9am < current hour (also check less than and equal to)
//       9am is in the past

// Option a: .is-past, .is-present, .is-future
//  select matching element $( element ID ).addClass("is-past")

// option b: select matching element $( element ID ).css("background")



// add click event on a parent EL that can listen to my save buttons clicks

// event.target
