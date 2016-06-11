//--------------------------------------------------------------------------------------

var the_imgs = document.getElementsByTagName('img');
window.open(the_imgs[the_imgs.length-1].src);
location.href=the_imgs[the_imgs.length-1].src+'?&dl=1';

var a=document.getElementsByTagName("img");
window.open(a[a.length-1].src);
location.href=a[a.length-1].src+"?&dl=1";

var a=document.getElementsByTagName("img");window.open(a[a.length-1].src);//location.href=a[a.length-1].src+"?&dl=1";

//--------------------------------------------------------------------------------------

$(document).ready(function(){

   // jQuery methods go here...

});

$(function(){

   // jQuery methods go here...

});

//--------------------------------------------------------------------------------------

var a = $("img");
window.open(a[a.length-1].src);

window.open($("img:last").attr("src"));
window.open($("img:eq(4)").attr("src"));
window.open($("img:last")[0].src);
window.open($("img:last")[0].src+"?&dl=1", "_self");

$("meta[property='og:image']").attr("content");

window.open($("meta[property='og:image']").attr("content"))

//--------------------------------------------------------------------------------------

if(window.jQuery)
{
	alert("jQuery " + jQuery.fn.jquery /* jQuery().jquery */ + " is loaded!");
	
}
else
{
	alert("jQuery isn\'t loaded!")
}



function jQueryloaded() {
    //Do stuff with jQuery
    alert("jQuery " + jQuery.fn.jquery /* jQuery().jquery */ + " is loaded!");
}

function loadjQuery() {
	var jq = document.createElement('script');
	jq.src = "https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js";
	jq.onload = jQueryloaded;
	document.getElementsByTagName('head')[0].appendChild(jq);
}
	

if(window.jQuery) //if (typeof jQuery != 'undefined')
{
	jQueryloaded();
}
else
{
	if (confirm("jQuery isn\'t loaded!\n\nDo you want to load it?")==true)
	{
		loadjQuery();
	}
}

//--------------------------------------------------------------------------------------

function jQueryloaded() {
    //Do stuff with jQuery
    alert("jQuery " + jQuery.fn.jquery /* jQuery().jquery */ + " is loaded!");
}

if(!window.jQuery) //if (typeof jQuery == 'undefined')
{
	var jq = document.createElement('script');
	jq.src = "https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js";
	jq.onload = jQueryloaded;
	document.getElementsByTagName('head')[0].appendChild(jq);
	//document.head.appendChild(jq);
	
}
else
{
	jQueryloaded();
}


/*
function loadjQuery(url, success)
{
     
    var script     = document.createElement('script');
    script.src = url;
    var head = document.getElementsByTagName('head')[0],
    done = false;
    head.appendChild(script);
    // Attach handlers for all browsers
    script.onload = script.onreadystatechange = function() 
    {
        if (!done && (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete'))
        {
        done = true;
        success();
        script.onload = script.onreadystatechange = null;
        head.removeChild(script);        
        }
    };
         
     
}
if (typeof jQuery == 'undefined')
{
     
    loadjQuery('http://code.jquery.com/jquery-1.10.2.min.js', function() 
          {
            // Write your jQuery Code
           });
     
} 
else
{ 
      // jQuery was already loaded
     // Write your jQuery Code
 
}
*/


/*
document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    // document ready
    alert(jQuery);
  }
};

window.onload=function(){
  alert(jQuery)
}

document.addEventListener('DOMContentLoaded', function() {
   // your code here
   alert(jQuery);
}, false);

document.addEventListener("DOMContentLoaded", function(event) { 
    //your code to run since DOM is loaded and ready
    alert(jQuery);
});
*/

//--------------------------------------------------------------------------------------