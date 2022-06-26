
var date = new Date();
var localTime = d.getTime();
var localOffset = d.getTimezoneOffset() * 60000;
var utc = localTime + localOffset;
var offset = 4;    //UTC of Dubai is +04.00
var dubai = utc + (3600000*offset);
var current_hour = date.getHours();
// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (current_hour >= 18 || current_hour <= 6) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }

    var images = ['4 COCKTAIL CLOCK.jpg',
"3 WAVES CLOCK.jpg",
"2 FOOD CLOCK.jpg",
"1 PALM TREE CLOCK.jpg"]
    $(function () {
      debugger
        var i = 0;
        $(".landing-hero").css("background-image", "url(/" + images[i] + ")");
        setInterval(function () {
            i++;
            if (i == images.length) {
                i = 0;
            }
            $(".landing-hero").fadeOut("slow", function () {
                $(this).css("background-image", "url(/" + images[i] + ")");
                $(this).fadeIn("slow");
            });
        }, 5000);
    });
