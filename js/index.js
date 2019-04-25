


if (/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)) {
    width = document.body.offsetWidth
}

var jdUl = document.querySelector('.jd_fenlei ul')
var jdLi = document.querySelectorAll('.jd_fenlei ul li')
var listLiHeight = jdLi[0].offsetHeight
var StartY = 0, MoveY = 0, EndY = 0, listIndex = 0, listAindex = 0
var topY=47;
var maxdis=0;
var mindis=document.documentElement.clientHeight-93-listLiHeight*(jdLi.length)

jdUl.addEventListener('touchstart', function (e) {
    StartY = e.touches[0].clientY
})
jdUl.addEventListener('touchmove', function (e) {

    EndY = e.touches[0].clientY
    MoveY = EndY - StartY
    listAindex = listIndex + MoveY
    jdUl.style.transition = ''
    listMove()
})
jdUl.addEventListener('touchend', function (e) {
    if (listAindex > maxdis) {
        listAindex = maxdis
    } else if (listAindex < mindis) {
        listAindex = mindis
    }
   killMove()
    listMove()
    listIndex = listAindex
})

jdLi.forEach(function(el,index){
    el.onclick=function(){
        for(var i=0;i<jdLi.length;i++){
            jdLi[i].className='';
            this.className='hover';
            listIndex=-index*listLiHeight
            console.log(listIndex)
        }
        if(listIndex>maxdis){
            listIndex=maxdis
        }else if(listIndex<mindis){
            listIndex=mindis
        }
        jdUl.style.transform='translateY('+listIndex+'px)'
    }
})


function listMove() {
    if (listAindex > topY) {
        listAindex = topY
    } else if (listAindex < mindis - topY) {
        listAindex = mindis - topY
    }

    jdUl.style.transform = 'translateY(' + listAindex + 'px)'
}
function killMove(){
    jdUl.style.transition = 'all .2s'
}