function getElementsByClassName(classname){
    var d=document;
    var e=d.getElementsByTagName('*');
    var c=new RegExp('\\b'+classname+'\\b');
    var r=[];

    for(var i=0,l=e.length;i<l;i++){
        var cn=e[i].className;
        if(c.test(cn)){
            r.push(e[i]);
        }
    }
    return r;
}
if(typeof document.getElementsByClassName !='function'){
    document.getElementsByClassName=getElementsByClassName;
}

function wsqFollowRun () {
    var els = document.getElementsByClassName('wsqFollowDiv');
    for(var i = 0; i < els.length; i++) {
        els[i].style.cssText = 'width: 55px; background-position: 0 0;height: 21px;background: url(http://dzqun.gtimg.cn/quan/images/reflow/sprBg.png) no-repeat;text-indent: -999px; overflow: hidden;outline: none; text-decoration: none;display: block;background-position: -457px -76px;';
        els[i].onclick = function() {
            var sId = this.getAttribute('sid');
            window.open('http://wsq.qq.com/follow/button?sId=' + sId, '', 'width=620,height=365,top=0,left=0,toolbar=no,menubar=no,scrollbars=no,location=no,resizable=no,status=no');
        }
    }
};
wsqFollowRun();