(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

    // saving current date globally
    var currentDate = new Date();

    var currentHour = currentDate.getHours();
    var dateString = currentDate.toLocaleDateString();
    var timeString = currentDate.toLocaleTimeString();

    // current date  in string form

    // var currentDayNum = currentDate.getDay();

    // var currentDay = "";
    // if (currentDayNum == 0){
    //     currentDay = "Sunday";
    // } else if (currentDayNum == 1){
    //     currentDay = "Monday";
    // } else if (currentDayNum == 2){
    //     currentDay = "Tuesday";
    // } else if (currentDayNum == 3){
    //     currentDay = "Wednesday";
    // } else if (currentDayNum == 4){
    //     currentDay = "Thursday";
    // } else if (currentDayNum == 5){
    //     currentDay = "Friday";
    // } else if (currentDayNum == 6){
    //     currentDay = "Saturday";
    // }

    var haveANiceDayStr = ""
    if (currentHour > 4 && currentHour <= 10) {
        haveANiceDayStr = "Good morning!^5000";
    } else if (currentHour == 12) {
        haveANiceDayStr = "Good day!^5000";
    } else if (currentHour <= 16) {
        haveANiceDayStr = "Good afternoon!^5000";
    } else{
        haveANiceDayStr = "Good evening!^5000";
    }

    // Set background to current time

    function setCurrentBackground(){

        if (currentHour == 0) {
            currentHour = 24;
        }
        currentHour = currentHour - (currentHour % 3)
        var imgString = "images/" + Math.floor(currentHour) + "_md.png"
        $('#bg1').attr("src", imgString);
    }
    setCurrentBackground();

    function getBGTime(){
        if ($('#bg1').attr("src")[8] == "_"){
            return parseInt($('#bg1').attr("src")[7]);
        }
        else{
            return parseInt($('#bg1').attr("src")[7]+$('#bg1').attr("src")[8]);
        }
    }

    function nextBackground(){
        var hour = getBGTime();
        $('#bg1').fadeOut(2500, function(){
            hour += 3;
            if (hour == 27) {
                hour = 3;
            };
            var imgString = "images/" + hour + "_md.png"
            $('#bg1').attr("src", imgString);
            $('#bg1').fadeIn(2500);
        })
    }

    // Update background in regular intervals
    function updateBackground(){
        nextBackground();
        setTimeout(updateBackground, 20000);
    }

    setTimeout(updateBackground, 20000);

	$(".questionheader").typed({
		strings: ["^250",haveANiceDayStr,"I am Jim Ho, ^1000000"],
        typeSpeed: 100,
		startDelay: 0,
		backSpeed: 33,
        contentType: 'html',
		backDelay: 0,
        showCursor:false,
	});
    $(".answerheader").typed({
		strings: [":^500D^3000","^4400A Full Stack Web Developer<br>(RESTful Apps)^3000","A Data Enthusiast With Strong Focus On UI/UX^3000","A Service-oriented Entrepreneur^3000","A Trilingual Language Specialist<br>(8 yrs Int'l Experience)^3000","A Forward-thinking Power Learner^3000","A Python, Radiohead, And Sushi Lover^3000"],
        typeSpeed: 33,
        startDelay: 3000,
        backSpeed: 0,
        loop:true,
        showCursor:true,
        contentType: 'html',
        backDelay: 0,
	});

  }); // end of document ready
})(jQuery); // end of jQuery name space
