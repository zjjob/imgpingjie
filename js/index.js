$(function(){
	var index=0;
	var status=true;
	var leng=$("div").length;
	var k;
	document.onmousewheel=function(e){
		if(status){
			status=false;
			//滚轮向下滑
			if(e.wheelDelta<0){
				index++;
				if(index>leng-1){
					index=0;
				}
				changebottom();
			}else if(e.wheelDelta>0){
				index--;
				if(index<0){
					index=leng-1;
				}
				changetop();
			}
			setTimeout(function(){status=true;},1000);
			function changebottom(){
				$("div").removeClass().hide().css({zIndex:1});
				var k=index-1;
				if(index==0){
					k=4;
				}
				$("div").eq(k).show();
				$("div").eq(k).addClass("box"+k);
				$("div").eq(k).css({zIndex:3,bottom:0});
				$("div").eq(k).animate({bottom:"100%"},1000);
				
				$("div").eq(index).addClass("box"+index);
				$("div").eq(index).css({zIndex:3,bottom:"-100%"});
				$("div").eq(index).show();
				$("div").eq(index).animate({bottom:0},1000);
			}
			function changetop(){
				$("div").removeClass().hide().css({zIndex:1});
				console.log(index);
				var k=index+1;
				if(index>=4){
					k=0;
				}
				$("div").eq(k).show();
				$("div").eq(k).addClass("box"+k);
				$("div").eq(k).css({zIndex:3,bottom:0});
				$("div").eq(k).animate({bottom:"-100%"},1000);
				
				$("div").eq(index).addClass("box"+index);
				$("div").eq(index).css({zIndex:3,bottom:"100%"});
				$("div").eq(index).show();
				$("div").eq(index).animate({bottom:0},1000);
			}
		}
	}
})