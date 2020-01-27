function getid(e){return document.getElementById(e);}
function makeClick(){var audio = getid("audio");audio.play();}

var fib=new Object;fib.fit=function(e,t){this.mHeight=t!==undefined?t:getid(e).offsetHeight;this.mWidth=getid(e).offsetWidth;this.cTxtObj=getid(e).getElementsByTagName("SPAN")[0];this.cTxtObj.style.fontSize="1px";this.cWidth=this.cTxtObj.offsetWidth;this.autoFit()};fib.autoFit=function(){this.tmpFontSize=this.cTxtObj.style.fontSize.replace("px","")/1;this.cTxtObj.style.fontSize=this.tmpFontSize+1+"px";this.tmpWidth=this.cTxtObj.offsetWidth;this.tmpHeight=this.cTxtObj.offsetHeight;if(this.tmpWidth<this.mWidth&&this.tmpHeight<this.mHeight&&this.tmpFontSize<300){this.cWidth=this.cTxtObj.offsetWidth;this.autoFit()}else{this.cTxtObj.style.fontSize=this.cTxtObj.style.fontSize.replace("px","")/1-1+"px"}}

function moreless(g,h,i){var e = getid(g);e.style.display=e.style.display==="block"?"none":"block";var f = getid(h);f.classList.toggle(i);}

