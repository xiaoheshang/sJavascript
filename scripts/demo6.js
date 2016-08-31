window.onload=function(){

    //***********右键菜单事件********************/
    var div=document.getElementById('myDiv');
    var cmenu=document.getElementById('myMenu');
    EventUtil.addHandler(div,'contextmenu',function(){
        //阻止浏览器默认的右键行为
        EventUtil.preventDefault(event);
        //显示自定义右键菜单
        cmenu.style.visibility='visible';
        cmenu.style.left=event.clientX+'px';
        cmenu.style.top=event.clientY+'px';
    });

    //单击隐藏
    EventUtil.addHandler(document,'click',function(){
        document.getElementById('myMenu').style.visibility='hidden';
    });

    /**********************beforeunload事件 */
    EventUtil.addHandler(window,'beforeunload',function(){
        event=EventUtil.getEvent(event);
        var msg="页面将关闭...";
        event.returnValue=msg;
        return msg;
    });

    
};

/***
 * DOM结构加载完后触发
 */
EventUtil.addHandler(window,'DOMContentLoaded',function(){
    console.log('DOM加载完成');
});




