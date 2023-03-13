function loop() {
  var label = document.getElementById("label");

  var colors = new Array( "rgb(204, 0, 0)",     "rgb(0, 0, 0)",       "rgb(51, 51, 255)",   "rgb(204, 82, 0)",   "rgb(0, 77, 77)",
                          "rgb(36, 71, 143)",   "rgb(77, 50, 25)",    "rgb(77, 0, 153)",    "rgb(38, 77, 0)",    "rgb(128, 0, 64)",
                          "rgb(115, 0, 230)",   "rgb(204, 0, 153)",   "rgb(0, 115, 153)",   "rgb(0, 128, 0)",    "rgb(134, 45, 45)" );

  var backgroundColors = new Array( "rgba(204, 0, 0, .4)",     "rgba(0, 0, 0, .4)",       "rgba(51, 51, 255, .4)",   "rgba(204, 82, 0, .4)",   "rgba(0, 77, 77, .4)",
                                    "rgba(36, 71, 143, .4)",   "rgba(77, 50, 25, .4)",    "rgba(77, 0, 153, .4)",    "rgba(38, 77, 0, .4)",    "rgba(128, 0, 64, .4)",
                                    "rgba(115, 0, 230, .4)",   "rgba(204, 0, 153, .4)",   "rgba(0, 115, 153, .4)",   "rgba(0, 128, 0, .4)",    "rgba(134, 45, 45, .4)" );

  var backgroundColorsForMenu = new Array( "rgba(204, 0, 0, .1)",     "rgba(0, 0, 0, .1)",       "rgba(51, 51, 255, .1)",   "rgba(204, 82, 0, .1)",   "rgba(0, 77, 77, .1)",
                                            "rgba(36, 71, 143, .1)",   "rgba(77, 50, 25, .1)",    "rgba(77, 0, 153, .1)",    "rgba(38, 77, 0, .1)",    "rgba(128, 0, 64, .1)",
                                            "rgba(115, 0, 230, .1)",   "rgba(204, 0, 153, .1)",   "rgba(0, 115, 153, .1)",   "rgba(0, 128, 0, .1)",    "rgba(134, 45, 45, .1)" );

  var i = 1, n = 15;

	setInterval( function() {
		if (i < n) {
			i++;
		} else {
			i = 1;
		}

    /*label.innerHTML = i;*/

    var src = 'url("Images/Backgrounds/' + i + '.png")';

    document.getElementById("left").style.backgroundImage = src;
    document.getElementById("blur").style.backgroundImage = src;

    document.getElementById("line_1").style.backgroundColor = colors[i - 1];
    document.getElementById("line_2").style.backgroundColor = colors[i - 1];

    const buttonBackgroundColors = document.querySelectorAll('.button');
    buttonBackgroundColors.forEach(buttonBackgroundColor => {
      buttonBackgroundColor.style.backgroundColor = backgroundColors[i - 1];
    });

    const buttonColors = document.querySelectorAll('.onhover_text');
    buttonColors.forEach(buttonColor => {
      buttonColor.style.backgroundColor = colors[i - 1];
    });

    document.getElementById("logo_img").src = "Images/TextLogo/" + i + ".svg";

    const titles = document.querySelectorAll('.main_title');
    titles.forEach(borderColor => {
      borderColor.style.borderColor = colors[i - 1];
    });

    const menuLinks = document.querySelectorAll('.desc_nav_menu_link');
    menuLinks.forEach(textColor => {
      textColor.style.color = colors[i - 1];
    });

    $(".desc_nav_menu_link").hover(function(){
      $(this).css("background-color", backgroundColorsForMenu[i - 1]);
      }, function(){
      $(this).css("background-color", "rgba(255, 255, 255, 0)");
    });

    document.getElementById("developer_name").style.color = colors[i - 1];
	}, 20000);
}

function loadVideo() {
  var iframe = document.getElementById("video_iframe");
  var fileReader = new fileReader();
  var code;
  var myFile = "E:\code.txt";

  fileReader.addEventListener('load', function (e) {
    code = e.target.result;
  });

  fileReader.readAsBinaryString(myFile);

  iframe.src = "http://www.youtube.com/embed/" + code;
}
