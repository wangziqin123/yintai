$(function(){
//头部选项卡
	var tops=$("#tops");
	var weixin=$(".weixin",tops)[0];
	var weixin2=$(".weixin2",tops)[0];
	var sjyt=$(".sjyt",tops)[0];
	var sjyt2=$(".sjyt2",tops)[0];
	var wdyt=$(".wdyt",tops)[0];
	var wdyts=$(".wdyts",tops)[0];
	weixin.onmouseover=function(){
		weixin2.style.display="block";
	}
	weixin2.onmouseout=function(){
		weixin2.style.display="none";
	}
	sjyt.onmouseover=function(){
		sjyt2.style.display="block";
	}
	sjyt2.onmouseout=function(){
		sjyt2.style.display="none";
	}
	wdyt.onmouseover=function(){
		wdyts.style.display="block";
	}
	wdyts.onmouseout=function(){
		wdyts.style.display="none";
	}

//banner轮播
	var banner=$(".banner")[0];
	var bxxk=$(".bxxk",banner);
	var imgs=$(".banner_center",banner);
	var xfk=$(".xfk")[0];
	var lis=$("li",xfk);
	var bxjtR=$(".bxjtR",banner)[0];
	var bxjtL=$(".bxjtL",banner)[0];
	//图片初始化
	bxxk[0].style.opacity=1;
	imgs[0].style.opacity=1;
	lis[0].style.background="#e5004f"
	var num=0;
	var t=setInterval(moveR,2000);
	function moveR(){
		num++;
		if(num==imgs.length){
			num=0;
		}
		for(var i=0;i<imgs.length;i++){
			bxxk[i].style.opacity=0;
			imgs[i].style.opacity=0;
			lis[i].style.background="#211616"
		}
		animate(imgs[num],{opacity:1});
		animate(bxxk[num],{opacity:1});
		lis[num].style.background="#e5004f"
	}
	function moveL(){
		num--;
		if(num==0){
			num=imgs.length-1;
		}
		for(var i=0;i<imgs.length;i++){
			bxxk[i].style.opacity=0;
			imgs[i].style.opacity=0;
			lis[i].style.background="#211616"
		}
		animate(imgs[num],{opacity:1});
		animate(bxxk[num],{opacity:1});
		lis[num].style.background="#e5004f"
	}
	banner.onmouseover=function(){
		clearInterval(t);
		bxjtR.style.display="block";
		bxjtL.style.display="block";
	}
	banner.onmouseout=function(){
		t=setInterval(moveR,5000);
		bxjtR.style.display="none";
		bxjtL.style.display="none";
	}
	bxjtR.onclick=function(){
		moveR();
	}
	bxjtL.onclick=function(){
		moveL();
	}
	for(var i=0;i<lis.length;i++){
		lis[i].index=i;
		lis[i].onclick=function(){
			clearInterval(t);
			for(var j=0;j<lis.length;j++){
				animate(bxxk[j],{opacity:0});
				animate(imgs[j],{opacity:0});
				lis[j].style.background="#211616";
			}
			animate(bxxk[this.index],{opacity:1});
			animate(imgs[this.index],{opacity:1});
			lis[this.index].style.background="#e5004f";
			num=this.index;
		}	
	}

//轮播上的选项卡
	var left_ones=$(".left_ones");
	var yiru=$(".yiru");
	var tuyous=$(".tuyous");
	//console.log(tuyous);
	for (var i = 0; i < yiru.length; i++) {
		tuyous[i].index=i;
		tuyous[i].onmouseover=function(){
			left_ones[this.index].style.display="block";
		}
		tuyous[i].onmouseout=function(){
			left_ones[this.index].style.display="none";
		}
	};



//动线
	var box=$(".dxbox");
	//遍历所有box
	for(var i=0;i<box.length;i++){

		function line(obj){
			var bw=obj.offsetWidth;
			var bh=obj.offsetHeight;
			var zuo=$(".dxzuo",obj)[i];
			var you=$(".dxyou",obj)[i];
			var shang=$(".dxshang",obj)[i];
			var xia=$(".dxxia",obj)[i];
			obj.onmouseover=function(){
				animate(zuo,{height:bh});
				animate(you,{height:bh});
				animate(shang,{width:bw});
				animate(xia,{width:bw});
			}
			obj.onmouseout=function(){
				animate(zuo,{height:0});
				animate(you,{height:0});
				animate(shang,{width:0});
				animate(xia,{width:0});
			}
		}
		line(box[i]);
	}



//three小三角+切换图片
	var three=$(".three_left_top")[0];
	var div3=$("div",three);
	var span3=$("span",three);
	var bottom=$(".three_left_bottom")[0];
	var bottoms=$(".kuantu",bottom);
	var flag=true;
	div3[0].style.borderBottom="5px solid #e5004f"
	span3[0].style.display="block";
	bottoms[0].style.display="block";
	bottoms[1].style.display="none";
	//console.log(bottoms[0])
	for(var i=0;i<div3.length;i++){
		div3[i].index=i;
		div3[i].onmouseover=function(){
			for(var j=0;j<bottoms.length;j++){
				div3[j].style.borderBottom="5px solid #333333"
				span3[j].style.display="none";
				bottoms[j].style.display="none";
			}
			div3[this.index].style.borderBottom="5px solid #e5004f"
			span3[this.index].style.display="block";
			bottoms[this.index].style.display="block";
		}

	}


//five小三角 five切换
	var fivetop=$(".fiveb_right_top")[0];
	var xsjk1=$(".xsjk1",fivetop)[0];
	var xsjk2=$(".xsjk2",fivetop)[0];
	var xsj1s=$(".xsj1s",fivetop)[0];
	var xsj2s=$(".xsj2s",fivetop)[0];
	var fiveone=$(".fiveb_right_bottom")[0];
	var fivetwo=$(".fivea2")[0];
	xsjk2.style.borderBottom="3px solid #e70050";
	xsjk2.style.fontWeight="bold";
	xsj2s.style.display="block";
	fivetwo.style.display="block";
	xsjk1.onmouseover=function(){
		xsjk1.style.fontWeight="bold";
		xsjk2.style.borderBottom="none"
		xsjk1.style.borderBottom="3px solid #e70050";
		xsj2s.style.display="none";
		xsj1s.style.display="block";
		fivetwo.style.display="none";
		fiveone.style.display="block";
	}
	xsjk2.onmouseover=function(){
		xsjk2.style.fontWeight="bold";
		xsjk1.style.borderBottom="none"
		xsjk2.style.borderBottom="3px solid #e70050";
		xsj1s.style.display="none";
		xsj2s.style.display="block";
		fiveone.style.display="none";
		fivetwo.style.display="block";
	}
	

	//小轮播

	function imgcontrol(box,imgbox,list,left,right){
		box.onmouseover=function(){
			//console.log(left)
			animate(left,{left:0},200);
			animate(right,{right:0},200);
		}
		box.onmouseout=function(){
			animate(left,{left:-30},200);
			animate(right,{right:-30},200);
		}
		//var i;
		//console.log(list);
		list[1].onclick=right.onclick=function(){
			list[0].style.background="#333";
			list[1].style.background="red";
			right.style.backgroundPosition="-30px 0";
			animate(imgbox,{left:-390},500);
			left.style.backgroundPosition="";
		}
		list[0].onclick=left.onclick=function(){
			list[1].style.background="#333";
			list[0].style.background="red";
			left.style.backgroundPosition="0 0";
			animate(imgbox,{left:0},500);
			right.style.backgroundPosition="";
		}
	}
	var boxs=$(".sevenb_two1");
	var imgboxs=$(".two1_img");
	var lefts=$(".two1_left");
	var rights=$(".two1_right");
	var liss=$(".two1_lis");

	imgcontrol(boxs[0],imgboxs[0],$(".two1_list0",liss[0]),lefts[0],rights[0]);
	imgcontrol(boxs[1],imgboxs[1],$(".two1_list1",liss[1]),lefts[1],rights[1]);
	imgcontrol(boxs[2],imgboxs[2],$(".two1_list2",liss[2]),lefts[2],rights[2]);
	imgcontrol(boxs[3],imgboxs[3],$(".two1_list3",liss[3]),lefts[3],rights[3]);

	//小小轮播
	var one2boxs=$(".one2boxs");
	var one2boxss=$(".one2boxss");
	var aw=parseInt(getStyle(one2boxss[0],"width"));
	var one2=$(".one2");
	var zuojiantou=$(".zuojiantou");
	var youjiantou=$(".youjiantou");
	function xxlunbo(box,left,right){	
		right.onclick=function(){
			var first=firstChild(box);
			animate(box,{left:-aw},function(){
				box.style.left=0;
				firsts=first.cloneNode(true);
				box.removeChild(first);	
				box.appendChild(firsts);
			});
		}
		left.onclick=function(){
			var last=lastChild(box);
			lasts=last.cloneNode(true);
			box.removeChild(last);
			appendBefore(lasts,box);
			box.style.left=-aw+"px";
			animate(box,{left:0});
		}
	}
	for (var i = 0; i < one2boxs.length; i++) {
		xxlunbo(one2boxs[i],zuojiantou[i],youjiantou[i]);
	};
	

	
	
	



	//固定定位,楼层跳转，按需加载
	var zdw=$(".zdw")[0];
	var aa=$("div",zdw);
	var span=$("span",zdw);
	for(var i=0;i<aa.length;i++){
		aa[i].index=i;
		aa[i].onmouseover=function(){
			span[this.index].style.display="block";
		}
		aa[i].onmouseout=function(){
			span[this.index].style.display="none";
		}	
		aa[i].onclick=function(){
			for (var j = 0; j < span.length; j++) {
				span[j].style.display="none";
			}
			span[this.index].style.display="block";
			animate(document.body,{scrollTop:floorArr[this.index]-hh+414})
			animate(document.documentElement,{scrollTop:floorArr[this.index]-hh+414})

		}
	}

	var ww=document.documentElement.clientWidth;
	var hh=document.documentElement.clientHeight;
	var threes=$(".three")[0];
	var threetop=threes.offsetTop;
	var floor=$(".seven");
	var floorArr=[]
	for (var i = 0; i < floor.length; i++) {
		floorArr.push(floor[i].offsetTop);
	};
	//console.log(floorArr);
	window.onscroll=function(){
		var obj=document.body.scrollTop?document.body: document.documentElement;
		var huadong=obj.scrollTop;
		if(huadong>=threetop){
			zdw.style.display="block";
		}else{
			zdw.style.display="none";
		}
		for (var i = 0; i < floorArr.length; i++) {
			if(huadong+hh>=floorArr[i]+414){
				for (var j = 0; j < span.length; j++) {
					span[j].style.display="none";
				};
				span[i].style.display="block";
			}
			if(huadong+hh<=floorArr[0]+414 || huadong>floorArr[8]+300){
				span[i].style.display="none";
			}
		};
	}
	var back=$(".zdw0")[0];
	back.onclick=function(){
		animate(document.body,{scrollTop:0})
		animate(document.documentElement,{scrollTop:0})
	}


})