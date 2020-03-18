function getid(e){return document.getElementById(e);}
function makeClick(){var audio = getid("audio");audio.play();}

var fib=new Object;fib.fit=function(e,t){this.mHeight=t!==undefined?t:getid(e).offsetHeight;this.mWidth=getid(e).offsetWidth;this.cTxtObj=getid(e).getElementsByTagName("SPAN")[0];this.cTxtObj.style.fontSize="1px";this.cWidth=this.cTxtObj.offsetWidth;this.autoFit()};fib.autoFit=function(){this.tmpFontSize=this.cTxtObj.style.fontSize.replace("px","")/1;this.cTxtObj.style.fontSize=this.tmpFontSize+1+"px";this.tmpWidth=this.cTxtObj.offsetWidth;this.tmpHeight=this.cTxtObj.offsetHeight;if(this.tmpWidth<this.mWidth&&this.tmpHeight<this.mHeight&&this.tmpFontSize<300){this.cWidth=this.cTxtObj.offsetWidth;this.autoFit()}else{this.cTxtObj.style.fontSize=this.cTxtObj.style.fontSize.replace("px","")/1-1+"px"}}

function moreless(g,h,i){var e = getid(g);e.style.display=e.style.display==="block"?"none":"block";var f = getid(h);f.classList.toggle(i);}

function accordion(g,h){var z = getid('accdn'+g+'-box');z.classList.toggle(h);var x = getid('accdn'+g+'-txt');x.classList.toggle('show');var y = getid('accdn'+g+'-ctl');if(y.classList.contains('i-minus')){y.classList.toggle('i-plus');}if(y.classList.contains('i-arrow-dn')){y.classList.toggle('i-arrow-up');}}

function setCookie(cname,cvalue,exdays=365){var d=new Date();d.setTime(d.getTime()+(exdays*24*60*60*1000));var expires="expires="+d.toUTCString();document.cookie=cname+"="+cvalue+";"+expires+";path=/"}

function getCookie(cname){var name=cname+"=";var ca=document.cookie.split(';');for(var i=0;i<ca.length;i+=1){var c=ca[i];while(c.charAt(0)==' '){c=c.substring(1)}if(c.indexOf(name)==0){return c.substring(name.length,c.length)}}return ""}

function includeHTML(){var z,i,elmnt,file,xhttp;z=document.getElementsByTagName("*");for(i=0;i<z.length;i+=1){elmnt=z[i];file=elmnt.getAttribute("include-html");if(file){xhttp=new XMLHttpRequest();xhttp.onreadystatechange=function(){if(this.readyState==4){if(this.status==200){elmnt.innerHTML=this.responseText}if(this.status==404){elmnt.innerHTML="Content not found."}elmnt.removeAttribute("include-html");includeHTML()}};xhttp.open("GET",file,true);xhttp.send();return}}}


