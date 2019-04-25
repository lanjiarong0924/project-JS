var itemWrapper=document.getElementById('item-list-wrapper');
var itemLTD=document.getElementsByClassName('item-LTD');//按商家获取
var item = document.getElementsByClassName('list-item'); //单个商品
console.log(item)
var itemArr = Array.prototype.slice.call(itemLTD); //转化为数组
console.log(itemArr)
var edit_a = document.getElementsByClassName('edit');  //小编辑按钮
var totalQuantity = document.querySelector('.totalQuantity');  //计算按钮的数字
console.log(totalQuantity)
var totalCount = document.querySelector('.totalCount'); //总价格
console.log(totalCount)
var inputSelected = document.getElementsByClassName("check"); //所有checkbox
console.log(inputSelected)
var checkAll = document.querySelector('.checkAll');
console.log(checkAll)


function getTotal(){
    var selected=0;
    var price=0;
    for(var i=0;i<item.length;i++){
        if(item[i].getElementsByTagName('input')[0].checked){
            
            selected++;
            price +=parseInt(item[i].querySelector('.now').innerText) * parseInt(item[i].querySelector('.quantity').innerText);

        }
    }
  //恢复全选状态
    if(selected===item.length){
        checkAll.checked=true;

    }
    totalQuantity.innerText=selected;
    totalCount.innerText=price.toFixed(2);
}

    //checkbox选框全选以及计算效果
    for(var i=0;i<inputSelected.length;i++){
        inputSelected[i].onchange=function(){
            if(!this.checked){
                checkAll.checked=false;

            }
            if(this.className.indexOf('checkLTD')>0){
                var checkLTD=this.parentNode.parentNode.getElementsByClassName('check');
                for(var j=0;j<checkLTD.length;j++){
                    checkLTD[j].checked=this.checked;

                }
            }else if(this.className.indexOf('checkAll')>0){
                for(var k=0;k<inputSelected.length;k++){
                    inputSelected[k].checked=this.checked;
                }

            }else{
                if(!this.checked){
                    //匹配到this所指向的元素的父容器的父容器的父容器，也就是在这个元素外面第三层包裹他的那个元素。
                    //previousElementSibling指的是上一个兄弟元素节点
                    this.parentNode.parentNode.parentNode.previousElementSibling.children[0].checked = false;
                }else{
                    var itemLTD=this.parentNode.parentNode.parentNode.parentNode;  //LTD
                    var LTDinput = itemLTD.getElementsByClassName('check');
                    var ret = 0;
                    for(var l=0;l<LTDinput.length;l++){
                        if(LTDinput[l].checked){
                            ret++;
                        }
                        if(ret===LTDinput.length-1){
                            LTDinput[0].checked=true;
                        }
                    }
                }
            }
            getTotal();
        }

    }
 //点击编辑事件
 for (let i = 0; i < itemLTD.length; i++) {
    edit_a[i].onclick = function (flag) {
        if (flag === event) {
            this.innerText = this.innerText === '编辑' ? '完成' : '编辑';
        } else {
            this.innerText = flag;
        }
        var pannel = itemArr[i].getElementsByClassName('info');
        if (this.innerText === '完成') {
            for (var j = 0; j < pannel.length; j++) {
                pannel[j].style.display = 'none';
                pannel[j].nextElementSibling.style.display = 'flex';
            }
        } else {
            for (var j = 0; j < pannel.length; j++) {
                pannel[j].style.display = 'block';
                pannel[j].nextElementSibling.style.display = 'none';
            }
        }
    }
}
//顶部编辑
var topEdit = document.getElementById('cart-top').getElementsByTagName('a')[0];
topEdit.onclick = function (){
    this.innerText = this.innerText === '编辑' ? '完成' : '编辑';
    var flag = this.innerText;
    for (var i = 0; i < itemLTD.length; i++) {
        var edit_a = itemLTD[i].getElementsByClassName('edit')[0];
        edit_a.onclick(flag);
        if (this.innerText === '编辑') {
            edit_a.style.display = 'flex';
        } else {
            edit_a.style.display = 'none';
        }
    }
}
  /*商品数量增减以及删除功能*/

  var info2=document.getElementsByClassName('info2')//获取所有的可编辑面板
  for (var i=0;i< info2.length; i++){
    var inputQuantity=info2[i].querySelector('.num');
    
    var quantity=document.getElementsByClassName('quantity')[i];
    console.log(quantity)
    inputQuantity.oninput = function () {   //不能为空或输入负值
        if (this.value < 1 || this.value === null) {
            this.value = 1;
        }
        quantity.innerText = this.value.toString();
  }

        info2[i].onclick = function (e) {
            var el = e.srcElement;//event.srcElement 可以捕获当前事件作用的对象
            var cls = el.className;
            var input = this.getElementsByTagName('input')[0];
            var item = this.parentNode.parentNode.parentNode;  //商品
            switch (cls) {
                case 'add':
                    input.value++;
                    break;
                case 'decrease':
                    if (input.value > 1) {
                        input.value--;
                    }
                    break;
                case 'del':
                    if (item.parentNode.childElementCount === 1) {
                        itemWrapper.removeChild(item.parentNode.parentNode);
                    }
                    item.parentNode.removeChild(item);
            }
            quantity.innerText = input.value.toString();
            getTotal();
        }
    }
