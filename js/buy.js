(function(){
    var ul=document.querySelector('ul.banner_images')
var index=1;
var width = 640
if (/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)) {
   width = document.body.offsetWidth
}

var indexLiArr = document.querySelectorAll('.banner_index li')
var timer = setInterval(function () {
   index++;
   startTransition()
   setTransform(-index * width)
}, 3000)


ul.addEventListener('webkitTransitionEnd', function () {
   if (index > 4) {
       index = 1;
       ul.style.transition = "";
       setTransform(-index * width)
   } else if (index < 1) {
       index = 4
       ul.style.transition = "";
       setTransform(-index * width)
   }
   for (var i = 0; i < indexLiArr.length; i++) {
       indexLiArr[i].className = ""
   }
   indexLiArr[index - 1].className = "current";
})

var startX = 0, moveX = 0;
ul.addEventListener("touchstart", function (e) {
   clearInterval(timer);
   ul.style.transition = "";
   startX = e.touches[0].clientX
})
ul.addEventListener("touchmove", function (e) {
   moveX = e.touches[0].clientX - startX
   setTransform(moveX + index * -1 * width)
})
ul.addEventListener("touchend", function () {
   var maxD = width / 3;
   if (Math.abs(moveX) > maxD) {
       if (moveX > 0) {
           index--
       } else {
           index++
       }
       startTransition()

       setTransform(-index * width)
   } else {
       startTransition()
       setTransform(-index * width)
   }
})

function startTransition() {
ul.style.transition = "all .3s";
}
function setTransform(target){
ul.style.transform = 'translateX(' + target + "px)"
}
})();

// 免运费遮罩
(function(){
var skuwindow1 = document.querySelector('.skuwindow1')
var sku_main1 = document.querySelector('.sku_main1')
var main1 = document.querySelector(".main1")

var close1 = document.querySelector(".close1")
var scrollTop = 0
skuwindow1.onclick = function (e) {
    main1.style.transition = "all 1s"

    sku_main1.classList.add("show");
    console.log(skuwindow.offsetTop)
    console.dir(skuwindow)

    scrollTop = document.documentElement.scrollTop || document.body.scrollTop

    console.log(e)
    var top1 = skuwindow.offsetTop - e.clientY + e.offsetY
    console.log(top)
    document.body.style.top = top1 * -1 + "px"

    document.body.classList.add("overflowhide")
}


close1.onclick = sku_main1.onclick = function () {

    main1.style.transition = "all .9s"
    sku_main1.classList.remove("show");
    document.body.style.top1 = 0

    document.body.classList.remove("overflowhide")
    window.scrollTo(0, scrollTop)
}

main1.onclick = function (e) {
    e.stopPropagation()
    return false;
}
})();