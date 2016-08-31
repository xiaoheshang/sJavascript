var isSupported=('onhashchange' in window) && (document.documentMode===undefined || document.documentMode>7);
console.log(isSupported);

// window.onhashchange=function(event){
//     console.log('Old URL:'+event.oldURL+'\nNew URL:'+event.newURL);
//     console.log('Current hash:'+location.hash);
// }
// var btn1=document.getElementById('btn1');
// btn1.onclick=function(){
//     location.hash='#section1';
// };

EventUtil.addHandler(window,'load',function(event){
    EventUtil.addHandler(window,'hashchange',function(event){
        console.log('Old URL:'+event.oldURL+'\nNew URL:'+event.newURL);
        console.log('Current hash:'+location.hash);
    });
    var btn1=document.getElementById('btn1');
    EventUtil.addHandler(btn1,'click',function(event){
        location.hash="#hash1";
        //location.search="?action=doa"
    });

})
