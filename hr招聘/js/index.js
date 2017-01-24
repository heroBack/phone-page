(function(){

	document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
   		var share_config = {
			general_config:{
				img_url: 'http://pay.xiaojukeji.com/share/hr/images/share.png',
                sharetitle:"滴滴融资成功，7亿美元只为放大你的价值！",
				link:location.href
			}
		};

		var obj = share_config.general_config;
	 	WeixinJSBridge.on('menu:share:appmessage', function(argv) {


			WeixinJSBridge.invoke('sendAppMessage', {
				"appid": "wx69b6673576ec5a65",
				"img_url": obj.img_url,
				"img_width": "",
				"img_height": "",
				"link": obj.link,
				"title": obj.sharetitle,
				"desc": obj.sharedesc
			}, function(res) {

			});
		});

		// 分享到朋友圈
		WeixinJSBridge.on('menu:share:timeline', function(argv) {


			WeixinJSBridge.invoke('shareTimeline', {
					"img_url": obj.img_url,
					"img_width": "",
					"img_height": "",
					"link": obj.link,
					"title": obj.sharetitle,
					"desc": obj.sharedesc
				}, function(res) {

			});
		});
	});

	var docuH = document.documentElement.clientHeight,
		allMoveBox = document.getElementsByClassName('swiper-slide'),
		firstLoad = document.getElementById('first-load'),
		secLoadImg = document.getElementsByClassName('load-img'),
		loadingBg = document.getElementById('loading'),
		icount = 0,
		timer = null,
		timer2 = null;
	document.getElementsByClassName('swiper-container').item(0).style.height = docuH + 'px';

	var addClass = function (ele,strClass){
		var reg = new RegExp("(?:^| )" + strClass + "(?: |$)");
		if(reg.test(ele.className)){
			//如果此类样式已经存在，则什么也不需要做
		}else{//不存在
			ele.className = ele.className.trim() + " " + strClass;
		}
	};
	
	var removeClass=function (ele,strClass){
		if(!(ele&&ele.nodeType == 1)){	
			alert('第一参数ele需要是一个DOM元素对象');
			throw new Error('第一参数ele需要是一个DOM元素对象');
		}
		if(typeof strClass != 'string'){
			alert('第二参数必须为string类型');
			throw new Error('第二参数必须为string类型');
			
		}
		
		var reg=new RegExp("(?:^| )" + strClass + "(?: |$)","g");
		ele.className = ele.className.replace(reg,'').trim();	
	};
	
	var getIndex=function (ele){
		var nIndex=0;
		var p=ele.previousSibling
		while(p){
			if(p.nodeType==1){
				nIndex++;//让累加一次
			}			
			p=p.previousSibling;//继续判断它的下一个哥哥		
		}
		return nIndex;	
	};
	

	//for iphone 4


	//当最大的一张背景加载完成后
	var imgObj = new Image();
	imgObj.src = firstLoad.getAttribute('_src');
	imgObj.onload = function(){
		for(var i = 0; i < secLoadImg.length; i++){
			secLoadImg[i].src = secLoadImg[i].getAttribute('thissrc');
		}
		loadingBg.style.display = 'none';
		addClass(allMoveBox[0],'slide-move');
	}

	var mySwiper = new Swiper('.swiper-container',{
		paginationClickable: true,
		mode: 'vertical',
		onSlideChangeStart: function(){},
		onSlideChangeEnd: function(){//当滑块滑到下一块时
			var thisDiv = mySwiper.activeSlide(),
				thisIndex = getIndex(thisDiv);
			for(var i = 0; i < allMoveBox.length; i++){
				removeClass(allMoveBox[i],'slide-move');
			}
			addClass(thisDiv,'slide-move');
		}
	});


})()