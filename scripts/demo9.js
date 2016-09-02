EventUtil.addHandler(window, 'load', function(event) {
    var div = document.getElementById('myDiv');

    EventUtil.addHandler(div, 'touchstart', function(event) {
        console.log(event);
        console.log('touches:' + event.touches);
        for (var i = 0; i < event.touches.length; i++) {
            console.log(event.touches[i]);
        }

        console.log('targetTouches:' + event.targetTouches);
        for (var i = 0; i < event.targetTouches.length; i++) {
            console.log(event.targetTouches[i]);
        }

        console.log('changedTouches:' + event.changedTouches);
        for (var i = 0; i < event.changedTouches.length; i++) {
            console.log(event.changedTouches[i]);
        }
    });
})