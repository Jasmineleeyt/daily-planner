// Get and display current date at the top
var currentDate = dayjs().format('dddd, MMMM DD')
$('#currentDay').text(currentDate);

$(function () {

  // Save user's input/schedule into local storage
  $(".saveBtn").on("click",function saveSchedule() {
    var hour = $(this).parent().attr("id");
    var event = $(this).siblings(".description").val();
  
    localStorage.setItem(hour,event);
  });

  //Going through the time blocks and change background colors based on the current hour.
  function refreshColors(currentTime) {

    $(".time-block").each(function(index, element) {
        var rowHour = element.id; 
        rowHour = rowHour.split("-")[1] 

        if (parseInt(rowHour) === parseInt(currentTime)) {
            $(element).addClass("present");
        } else if (parseInt(rowHour) > parseInt(currentTime)) {
            $(element).addClass("future");
        } else {
            $(element).addClass("past");
        }
      })
    };

  // Get current time(hour) 
  var currentHour = dayjs().format('H');
  refreshColors(currentHour);
  
  // Retrieve user's input saved in local storage.
  function getEvent(){
    $('.time-block').each( function (){
      var hour = $(this).attr("id");
      var event = localStorage.getItem(hour);
      $(this).children(".description").val(event);
    })
  };
  getEvent();
});