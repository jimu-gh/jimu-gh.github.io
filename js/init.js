(function($){
  $(function(){

    if (navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)) {
        $('.topicon').hide();
        $('#dropdown1').html("");
        $('#slideoutmenu').show();
    } else {
        $('.topicon').show();
        $('#slideoutmenu').hide();
    }

    $(".jumper").on("click", function( e ) {
        e.preventDefault();
        $("html, body").animate({
            scrollTop: $( $(this).attr('href') ).offset().top
        }, 600);
    });

    // CURRENT TIME
    var currentDate = new Date();
    var currentHour = currentDate.getHours();
    if (currentHour < 3) {
        currentHour = 24;
    }

    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var currentDay = currentDate.getDate();
    var currentMonthIndex = currentDate.getMonth();
    var currentYear = currentDate.getFullYear();

    var today = monthNames[currentMonthIndex] + " " + currentYear
    $("#today").text(today);

    // SET BACKGROUND TO CURRENT TIME
    function setCurrentBackground(){
        if (currentHour >= 21 || currentHour < 6) {
            TextToWhite()
        }
        // LUMP IN 3'S
        currentHour = currentHour - (currentHour % 3)
        var imgString = "images/" + Math.floor(currentHour) + "_lg.jpg"
        $('#bg1').attr("src", imgString);
    }
    setCurrentBackground();

    // Initialize collapse button
    $(".button-collapse").sideNav();
    // Initialize collapsible (uncomment the line below if you use the dropdown variation)
    //$('.collapsible').collapsible();
    $('.parallax').parallax();

    // SET CUSTOM GREETING
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

    // GET CURRENT TIME FROM BG
    function getBGTime(){
        if ($('#bg1').attr("src")[8] == "_"){
            return parseInt($('#bg1').attr("src")[7]);
        }
        else{
            return parseInt($('#bg1').attr("src")[7]+$('#bg1').attr("src")[8]);
        }
    }

    function TextToWhite(){
        $('#parallaxbg').removeClass('white');
        $('#parallaxbg').addClass('black');
        $('#topmsg').removeClass('black-text');
        $('#topmsg').addClass('white-text');
        $('#submsg').removeClass('black-text');
        $('#submsg').addClass('white-text');
        $('#cursorobj').removeClass('black-text');
        $('#cursorobj').addClass('white-text');
    }

    function TextToBlack(){
        $('#parallaxbg').removeClass('black');
        $('#parallaxbg').addClass('white');
        $('#topmsg').removeClass('white-text');
        $('#topmsg').addClass('black-text');
        $('#submsg').removeClass('white-text');
        $('#submsg').addClass('black-text');
        $('#cursorobj').removeClass('white-text');
        $('#cursorobj').addClass('black-text');
    }

    function nextBackground(){
        var hour = getBGTime();
        hour += 3;
        if (hour == 27) {
            hour = 3;
        };
        $('#bg1').fadeOut(1750, function(){
            var imgString = "images/" + hour + "_lg.jpg"
            $('#bg1').attr("src", function(){
                return imgString
            });
            $('#bg1').fadeIn(1750, function(){
                if (hour == 18) {
                    TextToWhite()
                }
                if (hour == 9) {
                    TextToBlack()
                }
            });
        })
    }

    // REGULARLY UPDATE BACKGROUND
    function updateBackground(){
        nextBackground();
        setTimeout(updateBackground, 30000);
    }

    setTimeout(updateBackground, 30000);

    // MESSAGE PROGRAMMING
    $("#topmsg").typed({
        strings: ["^250",haveANiceDayStr,"I am Jim Ho, ^1000000"],
        typeSpeed: 100,
        startDelay: 0,
        backSpeed: 33,
        contentType: 'html',
        backDelay: 0,
        showCursor:false,
    });
    $("#submsg").typed({
        strings: [":^500)","^4400Full Stack Web Developer<br>(RESTful Apps)","Data Enthusiast With Strong Focus On UI/UX","Service-oriented Entrepreneur","Forward-thinking Power Learner","Python, Radiohead, And Sushi Lover","Trilingual Language Specialist"],
        typeSpeed: 33,
        startDelay: 3000,
        backSpeed: 0,
        loop:true,
        showCursor:true,
        contentType: 'html',
        backDelay: 3000,
    });

    // DROPDOWN SETTINGS

    $('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrainWidth: false, // Does not change width of dropdown to that of the activator
      hover: true, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: true, // Displays dropdown below the button
      alignment: 'left', // Displays dropdown with edge aligned to the left of button
      stopPropagation: false // Stops event propagation
      }
    );

    // ANIMATIONS

    $.fn.extend({
        animateCss: function (animationName) {

            this.addClass('animated ' + animationName).one(animationEnd, function() {
                $(this).removeClass('animated ' + animationName);
            });
        }
    });

    $('#topmsg').animateCss('rubberBand');

    $(window).scroll(function(){
    var winScroll = $(this).scrollTop();
    console.log(winScroll);

    // if(winScroll > $('.gallery_images').offset().top - ($(window).height()/1.2)){
    //     $('.gallery_images figure').each(function(i){
    //         setTimeout(function(){
    //             $('.gallery_images figure').eq(i).addClass('is-showing');
    //         }, 150 * (i+1));
    //     });
    // }

         // if (winScroll > $('.gallery_images').offset().top - ($(window).height()/1.2)){
          //   $('.gallery_images figure').each(function(){
          //     setTimeout(function(i){
          //       $('.gallery_images figure').eq(i).addClass('is-showing');
          //     }, 150 * (i+1));
          //   });
          // }
    });

    $('#email').hover(function(){
        $('#email').attr('src','images/icon_email_hover.png');
    },function(){
        $('#email').attr('src','images/icon_email.png');
    });

    $('#linkedin').hover(function(){
        $('#linkedin').attr('src','images/icon_linkedin_hover.png');
    },function(){
        $('#linkedin').attr('src','images/icon_linkedin.png');
    });

    $('#github').hover(function(){
        $('#github').attr('src','images/icon_github_hover.png');
    },function(){
        $('#github').attr('src','images/icon_github.png');
    });

    $('#resume').hover(function(){
        $('#resume').attr('src','images/icon_resume_hover.png');
    },function(){
        $('#resume').attr('src','images/icon_resume.png');
    });

    $('#instagram').hover(function(){
        $('#instagram').attr('src','images/icon_instagram_hover.png');
    },function(){
        $('#instagram').attr('src','images/icon_instagram.png');
    });

    var wait1 = false;
    var wait2 = false;
    var currentStrength = "";
    var nextStrength = "";

    function resetStrengthTexts(){
        $('#strengthdesc').animateCss('zoomOut');
        $('#strengthdesc').one(animationEnd, function(){
            $('#strengthdesc').html('<br>')
            $('#strengthdesc').animateCss('zoomIn');
        });
        $('#strengthtext').animateCss('fadeOut');
        $('#strengthtext').one(animationEnd, function(){
            $('#strengthtext').text('STRENGTHS');
            $('#strengthtext').animateCss('fadeIn');
        });
        wait2 = false;
        wait1 = false;
    }

    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    var animationDict = {
        'ADAPTABILITY':["deep-orange-text","swing"],
        'COMMUNICATION':["cyan-text","rubberBand"],
        'CREATIVITY':["amber-text","flash"],
        'CLIENT SERVICE':["blue-text","tada"],
        'DETAIL':["teal-text","shake"],
        'EFFICIENCY':["green-text","jello"],
        'EMPATHY':["pink-text","bounce"],
        'LEADERSHIP':["grey-text","wobble"],
        'LOGIC':["red-text","shake"],
        'TEAMWORK':["purple-text","rubberBand"],
        'VISION':["indigo-text","flash"],
        'WORK ETHIC':["brown-text","bounce"]
    };

    $('.strength').hover(function(){
        nextStrength = $(this).attr('id');
        var nextDesc = $(this).attr('alt');

        var textColor = animationDict[nextStrength][0];

        $(this).removeClass();
        $(this).addClass('strength');
        $(this).addClass(textColor);

        if (wait1 == false || currentStrength != nextStrength) {
            wait1 = true;
            currentStrength = nextStrength;

            iconAnimation = animationDict[nextStrength][1];

            // ICON ANIMATION
            $(this).animateCss(iconAnimation);

            // STRENGTH AND STRENGTH DESCRIPTION ANIMATION
            $('#strengthtext').animateCss('fadeOut');
            $('#strengthtext').one(animationEnd, function(){
                $('#strengthtext').text(nextStrength);
                $('#strengthtext').animateCss('fadeIn');
            });

            $('#strengthdesc').animateCss('zoomOut');
            $('#strengthdesc').one(animationEnd, function(){
                $('#strengthdesc').text(nextStrength);
                $('#strengthdesc').text(nextDesc);
                $('#strengthdesc').animateCss('zoomIn');
            });
        }
    }, function(){
        if (wait2 == false) {
            setTimeout(resetStrengthTexts,30000);
            wait2 = true;
        }
        $(this).removeClass();
        $(this).addClass('strength');
        $(this).addClass('black-text');
    });

  }); // end of document ready
})(jQuery); // end of jQuery name space
