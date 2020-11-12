// Get current hour of the day moment.js, get current time, append day to page
var time = moment().format("MMM Do YYYY"); 
var hour = moment().format("h");
$("#currentDay").append(time);

//function to wait for page to load to start
$(document).ready(function(){

    // make an if statement to mark the color of the box based on the hour of the day
    // var i = 9; in html 
    // element id add id= "#hour-" + i;
    // Current checking 9am < current hour (also check less than and equal to)
    // 9am is in the past
    // Option a: .is-past, .is-present, .is-future
    // select matching element $( element ID ).addClass("is-past")
    // option b: select matching element $( element ID ).css("background")

    if ()

    // click event to save and store text 
    $(".saveBtn").on("click", function(event){
        var textBox = $(this).siblings(".textEl").val()
        // console.log(textEl)
        var timeId =  $(this).siblings(".textEl").attr("id")
        //console.log(timeId)
        localStorage.setItem(timeId, textBox);
    })
    
    //appending the text to assigned row once browser page is refreshed 
    $("#input9").append(localStorage.getItem("input9"));
    $("#input10").append(localStorage.getItem("input10"));
    $("#input11").append(localStorage.getItem("input11"));
    $("#input12").append(localStorage.getItem("input12"));
    $("#input1").append(localStorage.getItem("input1"));
    $("#input2").append(localStorage.getItem("input2"));
    $("#input3").append(localStorage.getItem("input3"));
    $("#input4").append(localStorage.getItem("input4"));
    $("#input5").append(localStorage.getItem("input5"));
    // console.log(localStorage.getItem("input5"))

// button made to clear all local storage and text content 
var clearButton = $("#button")

function buttonClear(){
    localStorage.clear();
    location.reload();
}

//create button event to call the clearing of local storage 
$(clearButton).on("click",buttonClear)
})













