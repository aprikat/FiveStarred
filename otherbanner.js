// alert("hello");
// var banner_typekit_font = '<script type="text/javascript" src="http://use.typekit.com/pae0xgm.js"></script><script type="text/javascript">try{Typekit.load();}catch(e){}</script>';
// var logo_url = chrome.extension.getURL('fivestars_logo_login_white.png'); 
// var banner_montserrat = "<link href='http://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' type='text/css'>";
var banner_raw_css = '<style>#FS-banner{height:50px;background-color:#231F20;text-align:center;font-family:Montserrat;}</style>';
var banner_raw_html = '<div id="FS-banner"><div class="row"><h3 style="padding-top:8px;color:white;font-weight:lighter;">This business does not yet accept FiveStars.  <a href="http://i.imgur.com/s4SZIVj.gif" class="ybtn ybtn-primary" style="margin-left:10px;margin-bottom:5px;">Request it!</a></h3></div>';


// $("head").append(banner_typekit_font);

$("head").append(banner_raw_css);
$(banner_raw_html).insertAfter(".app-header");

/*
$(document).ready(function(){
   $("#banner").load("banner.html");
});
*/