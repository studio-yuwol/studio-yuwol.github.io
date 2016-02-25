
jQuery(function($){
	var dept1_name = null;
	var dept1_link = null;
	
	var menuName = [
		{'name':'대학소개','link':'','sdp':[
			{'name':'e-총장실','link':'01_sub01-1.html'},
			{'name':'대학 안내','link':'01_sub02-1.html'},
			{'name':'대학 조직','link':'01_sub03-1.html'},
			{'name':'캠퍼스 안내','link':'01_sub04-3.html'}
		]},
		{'name':'대학광장','link':'','sdp':[
			{'name':'공지사항','link':'02_sub01.html'},
			{'name':'학사안내','link':'#'},
			{'name':'장학정보','link':'#'},
			{'name':'총장 신문고','link':'#'}
		]},
		{'name':'대학생활안내','link':'#','sdp':[
			{'name':'학부학사일정','link':'#'},
			{'name':'부서 검색','link':'#'},
			{'name':'식단 안내','link':'#'},
			{'name':'휴복학 안내','link':'#'}
		]},
		{'name':'입학안내','link':'#','sdp':[
			{'name':'대학입학','link':'#'},
			{'name':'대학원입학','link':'#'}
		]},
		{'name':'학사정보','link':'#','sdp':[
			{'name':'학적조회','link':'#'},
			{'name':'강의계획서','link':'#'},
			{'name':'수강내역조회','link':'#'},
			{'name':'강의시간표','link':'#'},
			{'name':'강의평가','link':'#'},
			{'name':'성적조회','link':'#'},
			{'name':'등록금납부확인','link':'#'},
			{'name':'졸업사정확인','link':'#'}
		]}
		
	]
	
	$('body').append('<div class="overlay"></div>')
	
	
	console.log(menuName[0].sdp[1].name)
	console.log(menuName[0].name)
	console.log(menuName.length)

	for (var i=0 ; i< menuName.length ; i++ ){
		dept1_name = menuName[i].name
		dept1_link = menuName[i].link

		//		console.log(menuName[i].sdp.length)

		$('ul.lnb-list').append('<li id="m'+ i +'"><a><span>'+ dept1_name +'</span><i class="fa fa-angle-down floatR"></i></a><ul style="display:none;"></ul></li>')

		for	(var j = 0 ; j < menuName[i].sdp.length; j++) {
			$('ul.lnb-list #m'+i+ ' ul').append ('<li><a href="'+menuName[i].sdp[j].link+'"><span>'+ menuName[i].sdp[j].name +'</span></a></li>')
		}
	}
	
	
	// Side Menu
	var menu_v = $('div.menu_v');
	var sItem = menu_v.find('>ul>li');
	var ssItem = menu_v.find('>ul>li>ul>li');
	var lastEvent = null;
	
	
	

	
	
//	sItem.find('>ul').css('display','none');
//	menu_v.find('>ul>li>ul>li[class=active]').parents('li').attr('class','active');
//	menu_v.find('>ul>li[class=active]').find('>ul').css('display','block');
	
	
	
	function menu_vToggle(event){
		var t = $(this);
		if (this == lastEvent) return false;
		lastEvent = this;
		setTimeout(function(){ lastEvent=null }, 300);
		if (t.next('ul').is(':hidden')) {
			sItem.find('>ul').slideUp(200);
			t.next('ul').slideDown(200);
			t.find('i').attr('class', 'fa fa-angle-up floatR')
		} else if(!t.next('ul').length) {
			sItem.find('>ul').slideUp(200);
		} else {
			t.next('ul').slideUp(200); //같은거 다시 클릭
			t.find('i').attr('class', 'fa fa-angle-down floatR')
		}
		
		if (t.parent('li').hasClass('active')){
			//console.log("여기")
			t.parent('li').removeClass('active');
		} else {
			//console.log("여기")
			sItem.removeClass('active');
			
			t.parent('li').addClass('active');
			//console.log(t.find('span'))
			
		}
	}
	sItem.find('>a').click(menu_vToggle).focus(menu_vToggle);

	function subMenuActive(){
		ssItem.removeClass('active');
		$(this).parent(ssItem).addClass('active');
	}; 
	ssItem.find('>a').click(subMenuActive).focus(subMenuActive);

	//icon
//	menu_v.find('>ul>li>ul').prev('a').append('<i class="fa fa-angle-down"></i>');
//	menu_v.find('>ul>li').prev('a').css('display','block');
	
	
	
	var menuRight = document.getElementById( 'lnbOpen' )

	
	$('#lnbClose').on("click", function(){
		$('#lnb').css({right:'-80%'})
		$('.container').css({position:'relative'})
		$('.container').removeClass('position')
		$('.overlay').toggle();
	})
	$('#lnbOpen').on("click", function(){
		$('.overlay').toggle();
		$('#lnb').css({right:0})
		$('.container').css({position:'fixed', top:0})
	})

	
	
});