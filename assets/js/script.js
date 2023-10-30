// All code is wrapped in this function so it doesn't run until the browser is finished rendering the html.
$(function () {

    // Save button click event listener. It saves both the input text and the hour slot.
    $(".saveBtn").on("click", function(){
        var text = $(this).siblings(".description").val();
        console.log(text);
        var time = $(this).siblings(".hour").text();
        console.log(time);
        window.localStorage.setItem(time, text);

    })
   
    // Adds a past, present, or future class to each time block, based on the current time and the schedule time slots. 
    function ppfColor(){
        var currentHour = dayjs().format("hh");
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

    // Retrieves any input saved in the individual time slot input fields, so they will be there on reload. 
    $("#9 .description").val(localStorage.getItem("9AM"));
    $("#10 .description").val(localStorage.getItem("10AM"));
    $("#11 .description").val(localStorage.getItem("11AM"));
    $("#12 .description").val(localStorage.getItem("12PM"));
    $("#13 .description").val(localStorage.getItem("1PM"));
    $("#14 .description").val(localStorage.getItem("2PM"));
    $("#15 .description").val(localStorage.getItem("3PM"));
    $("#16 .description").val(localStorage.getItem("4PM"));
    $("#17 .description").val(localStorage.getItem("5PM"));
   

    // Diplays the current date and time in the header of the page. 
    var today = dayjs();
    $("#currentDay").text("It is currently " + today.format("MMM D, YYYY h:mm A"));
  });