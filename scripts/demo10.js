EventUtil.addHandler(window, 'load', function(event) {
    var btn2 = document.getElementById('otherBtn');
    EventUtil.addHandler(btn2, 'click', function(event) {
        var btn = document.getElementById('myBtn');
        //创建事件对象
        var event = document.createEvent('MouseEvents');
        //初始化事件对象
        event.initMouseEvent('click', true, true, document.defaultView, 0, 0, 0, 0, false, false, false, false, 0, null);
        //触发事件
        btn.dispatchEvent(event);
    });

    var btn4 = document.getElementById('btn4');
    EventUtil.addHandler(btn4, 'click', function(event) {
        //模拟键盘事件
        if (document.implementation.hasFeature('KeyBoardEvents', '3.0')) {
            var text = document.getElementById('text1');
            var keyevent = document.createEvent('KeyBoardEvent');
            keyevent.initKeyboardEvent('keydown', true, true, document.defaultView, 'a', 'a', 'Shift', 0);
            text.dispatchEvent(keyevent);
        }
    });


    //模拟变动事件
    // var event = document.createEvent('MutationEvents');
    // event.initMutationEvent('DOMNodeInserted', true, false, someNode, "", "", "", 0);
    // target.dispatchEvent(event);
    // //模拟HTML事件
    // var event= document.createEvent('HTMLEve');
    // event.initEvent('focus',true,false);
    // target.dispatchEvent(event);

    //自定义事件
    var btn5 = document.getElementById('btn5');
    var myDiv = document.getElementById('myDiv');

    EventUtil.addHandler(myDiv, 'myevent', function(event) {
        alert('自定义事件:' + event.detail);
    });

    EventUtil.addHandler(btn5, 'click', function(event) {
        if (document.implementation.hasFeature('CustomEvents', '3.0')) {
            var customEvent = document.createEvent('CustomEvent');
            customEvent.initCustomEvent('myevent', true, false, "hello world");
            myDiv.dispatchEvent(customEvent)
        }
    });


    //IE中的模拟事件
    var btn6 = document.getElementById('btn6');
    //创建事件对象
    var ieEvent = document.createEventObject();
    //初始化事件对象
    ieEvent.screenX = 100;
    ieEvent.screenY = 0;
    ieEvent.clientX = 0;
    ieEvent.clientY = 0;
    ieEvent.ctrlKey = false;
    ieEvent.shiftKey=false;
    ieEvent.button=0;
    //触发事件
    btn6.fireEvent('onclick',event);
});