function g(o){return document.getElementById(o);}

function onesrc(obj,url)
{
	$(obj).find("img").attr("src",url);
}

//回到顶部
function goTop(){
	$('html,body').animate({'scrollTop':0},600);
}


function hoverlia4(t_n, t_n2, n, k,className) {
    for (var i = 1; i <= k; i++) {
        g(t_n2 + i).className = 'divhidden';
        g(t_n + i).className = '';
    }
    g(t_n2 + n).className = '';
    g(t_n + n).className = className;
	

}



//导航
    $(document).ready(function(){

	$(".mea").click(function(){
		if($(".logo_r").attr("id")=="bgs")	
		{
			$(".logo_r").attr("id","");
		}
		else
		{
			 $(".logo_r").attr("id","bgs");
		}
	});

	$(".side ul li").hover(function(){
				$(this).find(".sidebox").stop().animate({"width":"180px"},200).find("img").css({"opacity":"1","filter":"Alpha(opacity=100)"});
			},function(){
				$(this).find(".sidebox").stop().animate({"width":"56px",},200).find("img").css({"opacity":"0.8","filter":"Alpha(opacity=80)"});
			});
	 $('.sideewm').hover(function(){
				$('.ewBox').stop().show();
			},function(){
				$('.ewBox').stop().hide();
			});
	 
							   
     $(".touch-toggle a").click(function(event){

      var className = $(this).attr("data-drawer");

      if( $("."+className).css('display') == 'none' ){      

       $("."+className).slideDown().siblings(".drawer-section").slideUp();
	   $(".touch_bg").slideDown();//20170419
	   	$(".touch-top").addClass("bgs3");

      }else{

       $(".drawer-section").slideUp(); 
	   $(".touch_bg").slideUp();//20170419
	   $(".touch-top").removeClass("bgs3");
      }
      event.stopPropagation();
	  
     });
 
	$(".touch_bg").click(function(){
			 $(".drawer-section").slideUp();   	
			  $(".touch_bg").slideUp();//20170419
		 })	
	$(".closetitle").click(function(){
			 $(".drawer-section").slideUp();   	
			  $(".touch_bg").slideUp();//20170419
		 })	
		
     //$(document).click(function(){
//
//      $(".drawer-section").slideUp();   
//	  
//     })

     $('.touch-menu a').click(function(){     

      if( $(this).next().is('ul') ){

       if( $(this).next('ul').css('display') == 'none' ){

        $(this).next('ul').slideDown();

        $(this).find('i').attr("class","touch-arrow-up");     
		//$(".touch-top").css("position","absolute");
       }else{

        $(this).next('ul').slideUp();

        $(this).next('ul').find('ul').slideUp();

        $(this).find('i').attr("class","touch-arrow-down");
		//$(".touch-top").css("position","fixed");
       }   

      }

     });


});



var NavHeight = false;
  $(window).scroll(function(){
    Nav();
  })
  Nav();
  function Nav(){
    if( $(window).scrollTop() > $(window).height() && NavHeight == false ){
      $("body").addClass("nav-hide");
      NavHeight = true;
    }else if($(window).scrollTop() <= $(window).height() && NavHeight == true ){
      NavHeight = false;
      $("body").removeClass("nav-hide");
    }
  }
//  $(window).mousewheel(function(e, delta) { //滚动条向上滚动
//      p = $(window).scrollTop();
//      if( p > $(window).height() ){
//        if (delta < 0) {
//          $("body").addClass("nav-hide");
//        } else { //上滚
//           $("body").removeClass("nav-hide");
//        }
//      }
//  }) 
