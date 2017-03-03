$(function(){
	//一级菜单效果
	$(".nav-text").mouseover(function(){
		$(this).addClass("on");
//		$(this).css("border-top","#149e13 2px solid");
//		$(this).css("border-bottom","0");
		$(this).children("a").css("color","#149e13");
	}).mouseout(function(){
		$(this).removeClass("on");
//		$(this).css("border-top","0");
//		$(this).css("border-bottom","#fff 2px solid");
		$(this).children("a").css("color","#808080");
	});
	//二级菜单效果
	
	
	$('#about').mouseover(function() {
		$("#ab").css("display","block");
  		$('#ab').stop().animate({
    		opacity: 1,
    		top: '50',
  		}, 300);
	}).mouseout(function(){
		
		$('#ab').stop().animate({
    		opacity: 0,
    		top: '60',
  		}, 300,function(){
  			$("#ab").css("display","none");
  		});
		
	});
	
	$("#ab>li").mouseover(function(){
		$(this).addClass("abon");
		var aba = $(this).find("span");
		$(aba).css("color","#149E13");
		$(aba).stop().animate({
    		left: '75',
  		}, 300);
		
	}).mouseout(function(){
		$(this).removeClass("abon");
		var aba = $(this).find("span");
		$(aba).css("color","#808080");
		$(aba).stop().animate({
    		left: '65',
  		}, 300);
	});

})


/*banner部分*/
$(function(){
	//代码初始化
	var size=$(".img li").size();
	
	for(var i=1; i<=size; i++){
		var li="<li>"+i+"</li>";
		$(".num").append(li);
	}

	//手动控制轮播图
	$(".img li").eq(0).show();
	$(".num li").eq(0).addClass("active");
	$(".num li").mouseover(function(){
		$(this).addClass("active").siblings().removeClass("active");		
		var index=$(this).index();	
		i=index;
		$(".img li").eq(index).stop().fadeIn(1000).siblings().stop().fadeOut(1000);	
	})

	//自动轮播
	var i=0;
	var t=setInterval(move,5000);

	//核心向左运动函数
	function moveL(){
		i--;
		if(i==-1){
			i=size-1;	
		}
		
		$(".num li").eq(i).addClass("active").siblings().removeClass("active");
		$(".img li").eq(i).fadeIn(1000).siblings().fadeOut(1000);	
	}
	
	//核心向右运动函数
	function move(){
		i++;
		if(i==size){
			i=0;	
		}
		
		$(".num li").eq(i).addClass("active").siblings().removeClass("active");
		$(".img li").eq(i).fadeIn(1000).siblings().fadeOut(1000);
		
	}

	//左边按钮点击事件
	$(".out .left").click(function(){
		moveL();
	})
	
	//右边按钮点击事件
	$(".out .right").click(function(){
		move()
		
	})
	
	
	//定时器的开始于结束
	$(".out").hover(function(){
		clearInterval(t)
	},function(){
		t=setInterval(move,5000);
	});	
})


/*服务板块部分*/
$(function(){
	$("#serh").animate({
		top:"0",
		opacity:"1",
	},1400);
	$(".iconbox").animate({
		top:"60",
		opacity:"1",
	},1800);
	
	$(".icon").mouseover(function(){
		$(this).children(".img").stop().animate({
			opacity:"0",
		},300);
		$(this).children(".imgon").stop().animate({
			opacity:"1",
		},300);
		$(this).children("h2").css("color","#149E13");
		$(this).children(".icline").stop().animate({
			width:"20",
		},300);
		$(this).children(".icnum").stop().animate({
			opacity:"1",
		},300);
	}).mouseout(function(){
		$(this).children(".img").stop().animate({
			opacity:"1",
		},300);
		$(this).children(".imgon").stop().animate({
			opacity:"0",
		},300);
		$(this).children("h2").css("color","#676767");
		$(this).children(".icline").stop().animate({
			width:"142",
		},300);
		$(this).children(".icnum").stop().animate({
			opacity:"0",
		},300);
	});
	
});


/*集团产业板块*/
$(function(){	
	var win_h=$(window).height()*0.7;
	var grot=$(".grobox").offset().top;
	$(window).scroll(function(){		
		var top=$(window).scrollTop();
		if(top>grot-win_h){
			$(".gro-head").animate({top:"0",opacity:"1",},1000);
			$(".gro-nav").animate({top:"0",opacity:"1",},1600);
			$(".gro-img:eq(0)").animate({top:"0",opacity:"1",},1400);
			$(".gro-img:eq(1)").animate({top:"0",opacity:"1",},1700);
			$(".gro-img:eq(2)").animate({top:"0",opacity:"1",},2000);
			$(".gro-img:eq(3)").animate({top:"0",opacity:"1",},2300);
		};
		if(top>1340){
			$(".gro-more").animate({top:"0",opacity:"1",},1200);
		};
	});
	
	$(".imgbox").mouseover(function(){
		$(this).children(".imgbox-img").children("img").stop().animate({
			left:"-12px",
			top:"-16px",
			width:"110%",
			height:"110%",
		},400);
		$(this).children(".gro-l").children(".gro-l-on").stop().animate({
			width:"280",
		},400);
	}).mouseout(function(){
		$(this).children(".imgbox-img").children("img").stop().animate({
			width:"100%",
			height:"100%",
			left:"0",
			top:"0"
		},200);
		$(this).children(".gro-l").children(".gro-l-on").stop().animate({
			width:"0",
		},200);
	});
	
	$(".gro-more").mouseover(function(){
		$(this).children(".gro-more-on").stop().animate({
			width:"320",
		},450);
		$(this).children(".moreh").stop().animate({
			opacity:"0",
		},450);
		$(this).children(".morehon").stop().animate({
			opacity:"1",
		},450);
	}).mouseout(function(){
		$(this).children(".gro-more-on").stop().animate({
			width:"0",
		},300);
		$(this).children(".moreh").stop().animate({
			opacity:"1",
		},300);
		$(this).children(".morehon").stop().animate({
			opacity:"0",
		},300);
	});
});

/*公司简介板块*/
$(function(){
	var win_h_a=$(window).height()*0.7;
	var win_h_a5=$(window).height()*0.5;
	var win_h_a4=$(window).height()*0.4;
	var abt_a=$(".aboutbox").offset().top;
	$(window).scroll(function(){		
		var top_a=$(window).scrollTop();
//		document.title = abt_a;
		if(top_a>abt_a-win_h_a){
			$(".ab-head").animate({top:"0",opacity:"1",},1000);
			$(".ab-p").animate({top:"0",opacity:"1",},1000);
		};
		if(top_a>abt_a-win_h_a5){
			$(".ab-head").animate({top:"0",opacity:"1",},1000);
			$(".ab-more-box").animate({top:"0",opacity:"1",},1200);
		};
		if(top_a>abt_a-win_h_a4){
			$(".ab-img").animate({top:"0",opacity:"1",},1000);
		};
	});
	
	$(".ab-more-box").mouseover(function(){
		$(this).find(".ab-more").stop().animate({
			opacity:"0",
		},300);
		$(this).find(".ab-more-on").stop().animate({
			opacity:"1",
		},600);
		$(this).find(".ab-more-img").stop().animate({
			top:"-40",
		},300);
		$(this).find(".ab-more-img-on").stop().animate({
			top:"19",
		},300);
	}).mouseout(function(){
		$(this).find(".ab-more").stop().animate({
			opacity:"1",
		},300);
		$(this).find(".ab-more-on").stop().animate({
			opacity:"0",
		},300);
		$(this).find(".ab-more-img").stop().animate({
			top:"0",
		},300);
		$(this).find(".ab-more-img-on").stop().animate({
			top:"50",
		},300);
	});
});



	
//新闻版块
$(function(){

	var win_h_new=$(window).height()*0.5;
	var newt=$(".newbox").offset().top-$("body").scrollTop();
	$(window).scroll(function(){		
		var top_new=$(window).scrollTop();
//		document.title = $("body").scrollTop();
		if(top_new>newt-win_h_new){
			$(".new-head").animate({
				top:"0",
				opacity:"1",
			},1000);
			$(".newallbox").animate({
				top:"50",
				opacity:"1",
			},1400);
			$(".new-more").animate({
				top:"150",
				opacity:"1",
			},3000);
		};
	});
	
	$(".newlibox").mouseover(function(){
		$(this).addClass("newlibox-on");
	}).mouseout(function(){
		$(this).removeClass("newlibox-on");
	})
	
	$(".new-more").mouseover(function(){
		$(this).children(".new-more-on").stop().animate({
			width:"320",
		},450);
		$(this).children(".newh").stop().animate({
			opacity:"0",
		},450);
		$(this).children(".newhon").stop().animate({
			opacity:"1",
		},450);
	}).mouseout(function(){
		$(this).children(".new-more-on").stop().animate({
			width:"0",
		},300);
		$(this).children(".newh").stop().animate({
			opacity:"1",
		},300);
		$(this).children(".newhon").stop().animate({
			opacity:"0",
		},300);
	});
	
});


//简介banner板块
$(function(){
	var win_h_ba1=$(window).height()*0.6;
	var bat=$(".abbannerbox").offset().top;
	$(window).scroll(function(){		
		var top_ba=$(window).scrollTop();
//		document.title = top_ba;
		if(top_ba>bat-win_h_ba1){
			$(".abba-babox").find(".abba-head").animate({
				left:"0",
				opacity:"1",
			},1000);
			$(".abba-babox").find(".abba-line").animate({
				left:"0",
				opacity:"1",
			},1000);
		};
		if(top_ba>bat-win_h_ba1){
			$(".abba-babox").find(".abba-con").animate({
				left:"0",
				opacity:"1",
			},1000);
		};
	});
	
	var i = 0;
	$(".abba-r").click(function(){
		i++;
		
		if(i==1){
			setTimeout(function(){
				$(".abba-r").stop().animate({
					right:-150,
				},1000);
			},500);			
		};
		if(i==2){
			i=-1;
		};
		if(i==0){
		$(".abba-r").stop().animate({
					right:0,
				},1000);
		$(".abba-l").stop().animate({
					left:0,
				},1000);
		};
		$(".abba-box-all").stop().animate({left:-(i+1)*660},800);
	});
	
	$(".abba-l").click(function(){
		i--;
		
		if(i==-1){
			setTimeout(function(){
				$(".abba-l").stop().animate({
					left:-150,
				},1000);
			},500);			
		};
		if(i==-2){
			i=1;
		};
		if(i==0){
			$(".abba-r").stop().animate({
					right:0,
				},1000);
			$(".abba-l").stop().animate({
					left:0,
				},1000);
		};
		$(".abba-box-all").stop().animate({left:-(i+1)*660},800);
	});
	
	$(".abba-babox").mouseover(function(){
		$(this).find(".abba-line").css("backgroundColor","#149E13");
		$(this).find(".abba-con-text h1").css("color","#149E13");
	}).mouseout(function(){
		$(this).find(".abba-line").css("backgroundColor","#ccc");
		$(this).find(".abba-con-text h1").css("color","#4c4c4c");
	});

});


//回到顶部部分
$(function(){
	$(window).scroll(function(){
		var top = $(this).scrollTop();
		if(top>500){
			$(".backtop").stop().animate({
				bottom:"50px"
			},500)
		}else{
			$(".backtop").stop().animate({
				bottom:"-50px"
			},200)
		};	
	});
	$(".backtop").click(function(){
		$("body,html").stop().animate({
			scrollTop:0
		},800)
	})
});
