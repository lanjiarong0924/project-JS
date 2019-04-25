window.onload=function(){
    leftMove();
}
// 左边的滑动效果
/*
	1. 获取一些必须知道的东西
		移动的dom元素 移动的ul
			获取 ul父盒子的 高度
			获取 ul的高度
			获取移动的 最大值 最小值

	2.通过touch事件 进行滑动
	3.手指松开 吸附回去
		touchend事件
			吸附回去
*/
function leftMove(){

    var oUl=document.querySelector('block');
    var moveUl = document.querySelector(".main_left ul");
    var moveLi = document.querySelectorAll(".main_left ul li");

    // ul父盒子高
    var parentHeight=document.querySelector('.main_left').offsetHeight
    var listliHeight=document.querySelector('.main_left ul li').offsetHeight
    // 获取头部header的高
    var headerHeight=document.querySelector('.header').offsetHeight;
// ul的高度
    var ulHeight=moveUl.offsetHeight;

    var mindis=parentHeight-ulHeight-headerHeight;
    var maxdis=0

    // 定义变量 用来 标示 吸附的 距离
    var delayDistance = 150;
    

    var startY=0;//初始起始值
    var moveY=0;//移动值
    var distanceY=0//总的移动距离

    var startTransition=function(){
        moveUl.style.transition='all .3s'
    }
    var endTransition=function(){
        moveUl.style.transition=''
    }
    var setTransform=function(distance){
        moveUl.style.transform='translateY('+distance+'px)'
    }



    moveUl.addEventListener('touchstart',function(e){
    startY=e.touches[0].clientY;
    })
    moveUl.addEventListener('touchmove',function(e){
    moveY=e.touches[0].clientY-startY;

        if((moveY+distanceY)>(maxdis+delayDistance)){
            moveY=0;
            distanceY=maxdis+delayDistance;
        }else if((moveY+distanceY)<(mindis-delayDistance)){
            moveY=0;
            distanceY=mindis-delayDistance
        }
        // // 关闭 过渡效果
            endTransition();

            setTransform(moveY+distanceY);
        })

        moveUl.addEventListener('touchend',function(e){
            // 修改移动的总距离
            distanceY+=moveY

            if(distanceY>maxdis){
                distanceY=maxdis;
            }else if(distanceY<mindis){
                distanceY=mindis;
            }
            startTransition();
            setTransform(distanceY);
        })
        moveLi.forEach(function(el,index){
            el.onclick=function(){
                for(var i=0;i<moveLi.length;i++){
                    moveLi[i].className='';
                    this.className='current';
                    distanceY=-index*listliHeight
                    console.log(distanceY)
                }
              
                if(distanceY>maxdis){
                    distanceY=maxdis
                }else if(distanceY<mindis){
                    distanceY=mindis
                }
                setTransform(distanceY)
                
            }
          
        })
        



}