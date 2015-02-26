
window.onload = function(){

	setTimeout(startOneBubble,50);
	setTimeout(startTwoBubble,2000);
	
	setTimeout(startButtonOne,5000);


}
function startOneBubble(){
	var target = document.getElementById('one1');
	//从marginLeft：10em渐变到0em
	
	var nowVal  = "10";
	var endVal = "0";
	
	var timer = setInterval(function(){
      if(nowVal > endVal){
      	nowVal = nowVal - 1;
       	target.style.marginLeft = nowVal+"em";
      }else{
      	clearInterval(timer);
      }
    },100);
}
function startTwoBubble(){
	 var target2 = document.getElementById('one2');
	 var target3= document.getElementById('one2-arrow');
		//从marginLeft：10em渐变到0em
		target2.style.visibility = "visible";
		target3.style.visibility = "visible";
		var target2 = document.getElementById('arrow1');
		$(target2).css("visibility","visible");
	   

}

function startButtonOne(){
	
	var target2 = document.getElementById('button1');
	$(target2).css("visibility","visible");
	
	setTimeout($(target2).fadeIn(),500);	
	setTimeout($(target2).fadeOut(),1000);
	setTimeout($(target2).fadeIn(),1500);	    

}

window.onscroll = function () { 

	var top = document.documentElement.scrollTop || document.body.scrollTop; 
	
	
		
}