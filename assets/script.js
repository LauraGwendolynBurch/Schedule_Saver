// Get current hour of the day moment.js
var time = moment().format("MMM Do YYYY"); 
$("#currentDay").append(time);
    
$(document).ready(function(){

    $(".saveBtn").on("click", function(event){
        var textBox = $(this).siblings(".textEl").val()
        // console.log(textEl)
        var timeId =  $(this).siblings(".textEl").attr("id")
        //console.log(timeId)
        localStorage.setItem(timeId, textBox);
    })
    
    localStorage.getItem(timeId);
    console.log(timeId)
    console.log(localStorage.getItem(timeId))


var clearButton = $("#button")

function buttonClear(){
    localStorage.clear();
    location.reload();
}

//create button event to call the clearing of local storage 
$(clearButton).on("click",buttonClear)
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

