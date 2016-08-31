window.onload = function() {
    var div = document.getElementsByClassName('div-block');
    if (div.length > 0) {
        div = div[0];
    }
    EventUtil.addHandler(div, 'mouseover', function(event) {
        var target = EventUtil.getTarget(event);
        var relatedTarget = EventUtil.getRelatedTarget(event);
        console.log('鼠标从' + relatedTarget.nodeName + '移入到' + target.nodeName);
    });

    EventUtil.addHandler(div, 'mouseout', function(event) {
        var target = EventUtil.getTarget(event);
        var relatedTarget = EventUtil.getRelatedTarget(event);
        console.log('鼠标从' + target.nodeName + '移出到' + relatedTarget.nodeName);
    });

    //鼠标滚轮事件
    EventUtil.addHandler(document, 'mousewheel', function(event) {
        event = EventUtil.getEvent(event);
        console.log(event.wheelDelta);
    });

}