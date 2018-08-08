/*
var js = document.createElement("script");
js.type = "text/javascript";
js.src = "https://rawgit.com/mp3play/js/master/lib.js";
document.body.appendChild(js);
*/

function loadScript(url, callback) {
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    script.onreadystatechange = callback;
    script.onload = callback;
    head.appendChild(script);
}
//var jquery_func = function() {};
//loadScript("//code.jquery.com/jquery-1.12.0.min.js", jquery_func);
var jwplayer_func = function() {};
loadScript("https://clip.amnhac.net/jwplayer/7.7.1/jwplayer.js", jwplayer_func);
var amnhacnet_ad_func = function() {};
loadScript("https://rawgit.com/amnhac-net/js/master/amnhacnet_ad.js", amnhacnet_ad_func);
var histats_func = function() {};
loadScript("https://rawgit.com/amnhac-net/js/master/histats.js", histats_func);
var dmca_func = function() {};
loadScript("https://rawgit.com/amnhac-net/js/master/dmca.js", dmca_func);

//var pushcrew_func = function() {};
//loadScript("https://rawgit.com/amnhac-net/js/master/pushcrew.js", pushcrew_func);
var quantcast_func = function() {};
loadScript("https://rawgit.com/amnhac-net/js/master/quantcast.js", quantcast_func);
var statcounter_func = function() {};
loadScript("https://rawgit.com/amnhac-net/js/master/statcounter.js", statcounter_func);
var clevertap_func = function() {};
loadScript("https://rawgit.com/amnhac-net/js/master/clevertap.js", clevertap_func);
