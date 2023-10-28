// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    $(".saveBtn").on("click", function(){
        var text = $(this).siblings(".description").val();
        console.log(text);
        var time = $(this).siblings(".hour").text();
        console.log(time);
        window.localStorage.setItem(time, text);

    })
    $(".deleteBtn").click(function(){
        var text = $(this).siblings(".description").val("");
        var time = $(this).siblings(".hour").text();
        localStorage.setItem(time, JSON.stringify(text));
    })
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    function ppfColor(){
        var currentHour = dayjs().format("h");
        $(".description").each(function(){
            var scheduleTime = parseInt($(this).parent().attr("id"));

            if (currentHour > scheduleTime){
                $(this).removeClass("present");
                $(this).removeClass("future");
                $(this).addClass("past");
            }else if(currentHour < scheduleTime){
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }else{
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
        });
    }
    ppfColor();
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
   
    $("#-3 .description").val(localStorage.getItem("9AM"));
    $("#-2 .description").val(localStorage.getItem("10AM"));
    $("#-1 .description").val(localStorage.getItem("11AM"));
    $("#0 .description").val(localStorage.getItem("12PM"));
    $("#1 .description").val(localStorage.getItem("1PM"));
    $("#2 .description").val(localStorage.getItem("2PM"));
    $("#3 .description").val(localStorage.getItem("3PM"));
    $("#4 .description").val(localStorage.getItem("4PM"));
    $("#5 .description").val(localStorage.getItem("5PM"));
   

    // TODO: Add code to display the current date in the header of the page.
    var today = dayjs();
    $("#currentDay").text("It is currently " + today.format("MMM D, YYYY h:mm A"));
  });