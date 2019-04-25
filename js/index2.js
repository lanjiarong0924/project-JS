//秒杀
var spans=document.querySelectorAll('#miaosha span');
var totalTime=spans[0].innerHTML*60 + parseInt(spans[1].innerHTML)
var timer=null;
timer=setInterval(function(){
    if(totalTime<=0){
                clearInterval(timer)
                return;
            }
            totalTime -- 
            spans[0].innerHTML = format(parseInt(totalTime/60))
            spans[1].innerHTML = format(totalTime%60)

},1000)

 function format(a){
            return a.toString().replace(/^(\d)$/,"0$1")
        }
