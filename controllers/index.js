
var yuwolApp = angular.module('yuwol', ['ngRoute','ngSanitize'])



yuwolApp.config(function ($routeProvider){
	$routeProvider
    .when('/home', {templateUrl: 'views/home.html', })
    .when('/about', {templateUrl: 'views/about.html', })
    .when('/work', {templateUrl: 'views/work.html', })
    .when('/blog', {templateUrl: 'views/blog.html', })
    .otherwise({redirectTo: '/home'});
})
//.factory('$default', function() {
//  var indexscope = {}
//  return indexscope;
//})
//.factory('$popupcheck', function() {
//  var indexscope = {}
//  return indexscope;
//})
//.factory('$presscheck', function() {
//  var indexscope = {}
//  return indexscope;
//})

yuwolApp.controller('indexCtrl',function($scope,$http,$location) {
	console.log(213)
	$scope.navClick = function($num,$snum)
	{
//		$scope.depth1 = $num
		$location.url(menuArray[$num],$location);
		console.log(menuArray[$num])
	}
})

var menuArray=
	[
		{'name':'about','url':'about'},
		{'name':'work','url':'work'},
		{'name':'blog','url':'blog'}
	]



//yuwolApp.controller('indexCtrl',function($scope,$http,$location,$default) {
//	
//	$scope.scrollnum = 0
//	
//	$default.indexscope = $scope
//	$scope.popup=false
//	$scope.menuArray = menuArray
//	$scope.depth1 = 0
//	$scope.depth2 = 0
//	
//	$scope.gnbClick=function($num,$snum)
//	{
//		$scope.depth1 = $num
//		$location.url(menuArray[$num].sub[$snum].url,$location);
//	}
//	
//	$scope.homefunc = function()
//	{
//		$location.url('home',$location);
//	}
//	
//	
//	$scope.menuSet = function($num,$snum)
//	{
///* 		$scope.subArray=menuArray[$num].sub */
//		if($num == -1)
//		{
//			$('.navi').animate({
//				'top':20
//				},500,'easeOutCubic',function(){})
//			$('.subimage').animate({
//				'height':0
//				},500,'easeOutCubic',function(){})
//		}
//		else
//		{
//			$('.navi').animate({
//				'top':0
//				},500,'easeOutCubic',function(){})
//			$('.subimage').animate({
//				'height':244
//				},500,'easeOutCubic',function(){})
//		}
//			
//		$('.submotion').animate({
//			'top':-35*$num-20
//			},500,'easeOutCubic',function(){})
//		$('.subgnb li').css({'color':'#666','font-weight':'400'})
//		$('#sub_'+$num+'_'+$snum).css({'color':'#333','font-weight':'700'})
//		for(var i=0 ; i<4 ; i++)
//		{
//			$('.g'+i+' img').attr('src','images/gnb'+i+'.png')
//		}
//		
//		$('.g'+$num+' img').attr('src','images/gnb'+$num+'_over.png')
//		$("html, body").animate({ scrollTop: 0 }, 500,function(){})	
//		if($num != -1)
//		{
//			$('.subimage img').attr('src','images/subimg_0'+$num+'.jpg')
//		}
//	}
//	
//	
//	var popstr=""
//	
//	$scope.popOpen = function($str)
//	{
//		$scope.popup = true
//		$('.popWrap').css('display','block')
//		$('#schedulePopup').css('display','none')
//		$('#pressPopup').css('display','none')
//		$($str).css('display','block')
//		$scope.scrollnum = $(window).scrollTop()
//		$(window).scrollTop(0)
//		$(".indexCont").css('position','fixed')
//		$(".indexCont").css('top',-$scope.scrollnum+'px')
//	}
//	
//	$scope.popupClose= function()
//	{
//		$scope.popup = false
//		$('#schedulePopup').css('display','none')
//		$('#pressPopup').css('display','none')
//		$('.popWrap').css('display','none')
//		
//		$(".indexCont").css('position','relative')
//		$(".indexCont").css('top','0px')
//		$(window).scrollTop($scope.scrollnum)
//	}
//	
//	$scope.foot_next = function()
//	{
//		$('.part').animate({
//			'left':-1000
//			},500,'easeOutCubic',function(){})
//	}
//	
//	$scope.foot_prev = function()
//	{
//		$('.part').animate({
//			'left':0
//			},500,'easeOutCubic',function(){})
//	}
//})
//
//function selectSet($str)
//{
//	var select = $('select#'+$str);
//
//	select.change(function(){
//    	var select_name = $(this).children("option:selected").text();
//		$(this).siblings("label").text(select_name);
//	});
//}


	


