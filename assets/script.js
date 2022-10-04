var saveBtn = $(".saveBtn")

// Sets date and time in the header 
$("#currentDay").text(moment().format('MMM, Do YYYY'));

// Timeblock functions and properties
function timeBlock() {
    var hour = moment().hours();

    $(".time-block").each(function () {
        var currentHour = parseInt($(this).attr("id"));

        if (currentHour > hour) {
            $(this).addClass("future");
        }
        else if (currentHour === hour) {
            $(this).addClass("present");
        }
        else {
            $(this).addClass("past");
        }
    })
};

//Save button for that timeblock

saveBtn.on("click", function () {

    // console log save button
    var time = $(this).siblings(".hour").text();
    var plan = $(this).siblings(".plan").val();

    // save to the local stoarge
    localStorage.setItem(time, plan);

});

// Saved items stay when page is refreshed

function useDay() {

    $(".hour").each(function () {
        var currHour = $(this).text();
        var currPlan = localStorage.getItem(currHour);


        if (currPlan !== null) {
            $(this).siblings(".plan").val(currPlan);
        }
    });
}


timeBlock();
useDay();