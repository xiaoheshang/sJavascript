window.onload=function(){
    var div=document.getElementsByClassName('container');
    if(div.length>0){
        div=div[0];
    }
    EventUtil.addHandler(div,'scroll',function(event){
        console.log(event.target.scrollTop);
        console.log(event.target.scrollLeft);
    });
};
