

var rfApp = angular.module('royalfestival', ['ngRoute','ngSanitize','ngFlowGrid'])



rfApp.config(function ($routeProvider){
	$routeProvider
    .when('/home', {templateUrl: 'views/home.html', controller: 'homeCtrl'})
    .when('/second', {templateUrl: 'views/second.html', controller: 'secondCtrl'})
    .when('/palace', {templateUrl: 'views/palace.html', controller: 'palaceCtrl'})
    .when('/palace/:seq', {templateUrl: 'views/palace.html', controller: 'palaceCtrl'})
    .when('/people', {templateUrl: 'views/people.html', controller: 'peopleCtrl'})
    .when('/directions', {templateUrl: 'views/directions.html', controller: 'directionsCtrl'})
    .when('/first', {templateUrl: 'views/first.html', controller: 'firstCtrl'})
    
    .when('/schedule', {templateUrl: 'views/schedule.html', controller: 'scheduleCtrl'})
    .when('/schedule/:seq', {templateUrl: 'views/schedule.html', controller: 'scheduleCtrl'})
    .when('/gyeongbokgung', {templateUrl: 'views/gyeongbokgung.html', controller: 'gyeongbokgungCtrl'})
    .when('/changdeokgung', {templateUrl: 'views/changdeokgung.html', controller: 'changdeokgungCtrl'})
    .when('/changgyeonggung', {templateUrl: 'views/changgyeonggung.html', controller: 'changgyeonggungCtrl'})
    .when('/deoksugung', {templateUrl: 'views/deoksugung.html', controller: 'deoksugungCtrl'})
    .when('/jongmyo', {templateUrl: 'views/jongmyo.html', controller: 'jongmyoCtrl'})
    .when('/reservation', {templateUrl: 'views/reservation.html', controller: 'reservationCtrl'})
    
    .when('/notice', {templateUrl: 'views/notice.html', controller: 'noticeCtrl'})
    .when('/notice/:seq', {templateUrl: 'views/notice.html', controller: 'noticeCtrl'})
    .when('/press', {templateUrl: 'views/press.html', controller: 'pressCtrl'})
    
    .when('/event', {templateUrl: 'views/event.html', controller: 'eventCtrl'})
    .when('/faq', {templateUrl: 'views/faq.html', controller: 'faqCtrl'})
    .when('/inquiry', {templateUrl: 'views/inquiry.html', controller: 'inquiryCtrl'})
    
   
	.otherwise({redirectTo: '/home'});
})
.factory('$default', function() {
  var indexscope = {}
  return indexscope;
})
.factory('$popupcheck', function() {
  var indexscope = {}
  return indexscope;
})
.factory('$presscheck', function() {
  var indexscope = {}
  return indexscope;
})



rfApp.controller('indexCtrl',function($scope,$http,$location,$default) {
	
	$scope.scrollnum = 0
	
	$default.indexscope = $scope
	$scope.popup=false
	$scope.menuArray = menuArray
	$scope.depth1 = 0
	$scope.depth2 = 0
	
	$scope.gnbClick=function($num,$snum)
	{
		$scope.depth1 = $num
		$location.url(menuArray[$num].sub[$snum].url,$location);
	}
	
	$scope.homefunc = function()
	{
		$location.url('home',$location);
	}
	
	
	$scope.menuSet = function($num,$snum)
	{
/* 		$scope.subArray=menuArray[$num].sub */
		if($num == -1)
		{
			$('.navi').animate({
				'top':20
				},500,'easeOutCubic',function(){})
			$('.subimage').animate({
				'height':0
				},500,'easeOutCubic',function(){})
		}
		else
		{
			$('.navi').animate({
				'top':0
				},500,'easeOutCubic',function(){})
			$('.subimage').animate({
				'height':244
				},500,'easeOutCubic',function(){})
		}
			
		$('.submotion').animate({
			'top':-35*$num-20
			},500,'easeOutCubic',function(){})
		$('.subgnb li').css({'color':'#666','font-weight':'400'})
		$('#sub_'+$num+'_'+$snum).css({'color':'#333','font-weight':'700'})
		for(var i=0 ; i<4 ; i++)
		{
			$('.g'+i+' img').attr('src','images/gnb'+i+'.png')
		}
		
		$('.g'+$num+' img').attr('src','images/gnb'+$num+'_over.png')
		$("html, body").animate({ scrollTop: 0 }, 500,function(){})	
		if($num != -1)
		{
			$('.subimage img').attr('src','images/subimg_0'+$num+'.jpg')
		}
	}
	
	
	var popstr=""
	
	$scope.popOpen = function($str)
	{
		$scope.popup = true
		$('.popWrap').css('display','block')
		$('#schedulePopup').css('display','none')
		$('#pressPopup').css('display','none')
		$($str).css('display','block')
		$scope.scrollnum = $(window).scrollTop()
		$(window).scrollTop(0)
		$(".indexCont").css('position','fixed')
		$(".indexCont").css('top',-$scope.scrollnum+'px')
	}
	
	$scope.popupClose= function()
	{
		$scope.popup = false
		$('#schedulePopup').css('display','none')
		$('#pressPopup').css('display','none')
		$('.popWrap').css('display','none')
		
		$(".indexCont").css('position','relative')
		$(".indexCont").css('top','0px')
		$(window).scrollTop($scope.scrollnum)
	}
	
	$scope.foot_next = function()
	{
		$('.part').animate({
			'left':-1000
			},500,'easeOutCubic',function(){})
	}
	
	$scope.foot_prev = function()
	{
		$('.part').animate({
			'left':0
			},500,'easeOutCubic',function(){})
	}
})

function selectSet($str)
{
	var select = $('select#'+$str);

	select.change(function(){
    	var select_name = $(this).children("option:selected").text();
		$(this).siblings("label").text(select_name);
	});
}


	

var menuArray=
			[
				{'name':'궁중문화축전2016','url':'','sub':[
						{'name':'제 2회 궁중문화축전','url':'second'},
						{'name':'만드는 사람들','url':'people'},
						{'name':'4대 궁과 종묘','url':'palace'},
						{'name':'오시는 길','url':'directions'},
						{'name':'제 1회 궁중문화축전 2015','url':'first'}
				]},
				{'name':'프로그램','url':'',
				 'sub':[
				 		{'name':'전체일정표','url':'schedule'},
						{'name':'경복궁','url':'gyeongbokgung'},
						{'name':'창덕궁','url':'changdeokgung'},
						{'name':'창경궁','url':'changgyeonggung'},
						{'name':'덕수궁','url':'deoksugung'},
						{'name':'종묘','url':'jongmyo'},
						{'name':'사전예약프로그램','url':'reservation'}	
				]},
				{'name':'알림마당','url':'',
				 'sub':[
				 		{'name':'공지사항','url':'notice'},
						{'name':'보도자료','url':'press'}
				]},
				{'name':'커뮤니티','url':'',
				 'sub':[
				 		{'name':'이벤트','url':'event'},
						{'name':'자주하는 질문','url':'faq'}
/* 						{'name':'문의하기','url':'inquiry'} */
				]}
			]
			
