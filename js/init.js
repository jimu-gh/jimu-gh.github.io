(function($){
  $(function(){

    // Set Navbar according to device

    if (navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)) {
        $('.topicon').hide();
        $('#dropdown1').html("");
        $('#logo-container').removeClass('dropdown-button');
        $('#logo-container').removeClass('jumper');
        $('#logo-container').addClass('button-collapse');
        $('#logo-container').attr('data-activates','slide-out');
    } else {
        $('.topicon').show();
    }

    // Scroll jump from dropdown
    $(".jumper").on("click", function( e ) {
        e.preventDefault();
        $("html, body").animate({
            scrollTop: $( $(this).attr('href') ).offset().top
        }, 600);
    });

    // Current time
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

    // Set background to current time
    function setCurrentBackground(){
        if (currentHour >= 18 || currentHour < 6) {
            TextToWhite()
        }
        currentHour = currentHour - (currentHour % 3)
        var imgString = "images/" + Math.floor(currentHour) + "_lg.jpg"
        $('#bg1').attr("src", imgString);
    }
    setCurrentBackground();

    // Initialize collapse button, parallax, and carousel
    $(".button-collapse").sideNav();
    $('.parallax').parallax();
    // $('.carousel').carousel({fullWidth: true, indicators: true});
    $('ul.tabs').tabs();

    // Custom greeting based on time
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

    // Get current bg time for switch
    function getBGTime(){
        if ($('#bg1').attr("src")[8] == "_"){
            return parseInt($('#bg1').attr("src")[7]);
        }
        else{
            return parseInt($('#bg1').attr("src")[7]+$('#bg1').attr("src")[8]);
        }
    }

    // Text color flip
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

    // Switch to next bg in regular intervals
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
    function updateBackground(){
        nextBackground();
        setTimeout(updateBackground, 30000);
    }
    setTimeout(updateBackground, 30000);

    // Message programming
    $("#topmsg").typed({
        strings: ["^250",haveANiceDayStr,"Hi I'm Jim, ^1000000"],
        typeSpeed: 100,
        startDelay: 0,
        backSpeed: 33,
        contentType: 'html',
        backDelay: 0,
        showCursor:false,
    });
    $("#submsg").typed({
        strings: [":^500)","^4400Full Stack Web Developer","Data Enthusiast With Strong Focus On UI/UX","Service-oriented Entrepreneur","Forward-thinking Power Learner","Polyglot ENFJ Protagonist","Self-Proclaimed Music Otaku","Unabashed Laker Fan<br>(The Warriors Are Pretty Awesome Too)","My Lovely Wife's Sous Chef","Pleased To Meet You"],
        typeSpeed: 33,
        startDelay: 3000,
        backSpeed: 0,
        loop:true,
        showCursor:true,
        contentType: 'html',
        backDelay: 3000,
    });

    // Dropdown menu settings
    $('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 1200,
      constrainWidth: false,
      hover: true,
      gutter: 0,
      belowOrigin: true,
      alignment: 'left',
      stopPropagation: false
      }
    );

    // Enable animations via jquery
    $.fn.extend({
        animateCss: function (animationName) {
            this.addClass('animated ' + animationName).one(animationEnd, function() {
                $(this).removeClass('animated ' + animationName);
            });
        }
    });

    $('#topmsg').animateCss('rubberBand');

    //For figuring out scroll values (optional)
    // $(window).scroll(function(){
    // var winScroll = $(this).scrollTop();
    // console.log(winScroll);
    // });

    // Hover UI
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

    // About animations
    var wait1 = false;
    var wait2 = false;
    var currentStrength = "";
    var nextStrength = "";

    function resetStrengthTexts(){
        $('#strengthdesc').animateCss('zoomOut');
        $('#strengthdesc').one(animationEnd, function(){
            $('#strengthdesc').text('')
            $('#strengthdesc').animateCss('zoomIn');
        });
        $('#strengthtext').animateCss('fadeOut');
        $('#strengthtext').one(animationEnd, function(){
            $('#strengthtext').text('About Me');
            $('#strengthtext').animateCss('fadeIn');
        });
        wait2 = false;
        wait1 = false;
    }

    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

    var animationDict = {
        'Adaptability':["deep-orange-text","swing"],
        'Client Service':["blue-text","tada"],
        'Communication':["cyan-text","rubberBand"],
        'Creativity':["amber-text","flash"],
        'Detail':["teal-text","shake"],
        'Efficiency':["green-text","jello"],
        'Empathy':["pink-text","tada"],
        'Leadership':["grey-text","wobble"],
        'Logic':["red-text","shake"],
        'Teamwork':["purple-text","rubberBand"],
        'Vision':["indigo-text","flash"],
        'Work Ethic':["brown-text","bounce"]
    };

    $('.strength').hover(function(){
        $('.strength').addClass('white-text');
        nextStrength = $(this).attr('id');
        if (currentStrength != nextStrength){
            $('#strengthtext').animateCss('fadeOut');
            $('#strengthdesc').animateCss('zoomOut');
            var iconColor = animationDict[nextStrength][0];
            var iconAnimation = animationDict[nextStrength][1];
            var nextDesc = $(this).attr('alt');
            $(this).removeClass();
            $(this).addClass('strength');
            $(this).addClass(iconColor);
            $(this).animateCss(iconAnimation);
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
        // var nextDesc = $(this).attr('alt');

        // $(this).removeClass();
        // $(this).addClass('strength');
        // $(this).addClass(textColor);

        // if (wait1 == false || currentStrength != nextStrength) {
        //     wait1 = true;
        //     currentStrength = nextStrength;
        //
        //     iconAnimation = animationDict[nextStrength][1];
        //
        //     // ICON ANIMATION
        //     $(this).animateCss(iconAnimation);
        //
        //     // STRENGTH AND STRENGTH DESCRIPTION ANIMATION
        //     $('#strengthtext').animateCss('fadeOut');
        //     $('#strengthtext').one(animationEnd, function(){
        //         $('#strengthtext').text(nextStrength);
        //         $('#strengthtext').animateCss('fadeIn');
        //     });
        //
        //     $('#strengthdesc').animateCss('zoomOut');
        //     $('#strengthdesc').one(animationEnd, function(){
        //         $('#strengthdesc').text(nextStrength);
        //         $('#strengthdesc').text(nextDesc);
        //         $('#strengthdesc').animateCss('zoomIn');
        //     });
        // }
    }, function(){
        // if (wait2 == false) {
        //     setTimeout(resetStrengthTexts,20000);
        //     wait2 = true;
        // }
        // $(this).removeClass();
        // $(this).addClass('strength');
        // $(this).addClass('white-text');
    });

    // Scrollfire customization
    var options = [
        {selector: '#skills1', offset: 200, callback: function(el) {
            Materialize.showStaggeredList($('#skills1'));
            setTimeout("Materialize.showStaggeredList($('#skills2'))",500);
            setTimeout("Materialize.showStaggeredList($('#skills3'))",1000);
            setTimeout("Materialize.showStaggeredList($('#skills4'))",1500);
        }}
    ];
    Materialize.scrollFire(options);

  }); // end of document ready
})(jQuery); // end of jQuery name space
