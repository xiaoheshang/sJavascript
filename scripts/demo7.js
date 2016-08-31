/**
 * readystatechange 事件
 */
// EventUtil.addHandler(document,'readystatechange',function(){
//     event=EventUtil.getEvent(event);
//     if(document.readyState==='interactive'){
//         console.log('readystatechange:interactive');
//     }
// });

EventUtil.addHandler(window,'load',function(event){
    var script=document.createElement('script');
    console.log(script);
    EventUtil.addHandler(script,'readystatechange',function(event){
        event=EventUtil.getEvent(event);
        var target=EventUtil.getTarget(event);
        if(target.readyState=='loaded' || target.readyState=='complete'){
            EventUtil.removeHandler(target,'readystatechange',arguments.callee);
            alert('script loaded');
        }
    });
    script.src="scripts/test.js";
    document.body.appendChild(script);
});