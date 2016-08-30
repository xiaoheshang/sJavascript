var btn1 = document.getElementById('btn1');

var handler = function() {
    console.log(event.target.id);
}

EventUtil.addHandler(btn1, 'click', handler);

var btn2 = document.getElementById('btn2');
btn2.onclick = function(event) {
    console.log('');
    alert(this === event.currentTarget); //true
    alert(this === event.target); //true
}

document.body.onclick = function(event) {
    console.log('');
    console.log(this === event.currentTarget); //true
    console.log(this === document.body); //true
    console.log(btn2 === event.target); //true
};

//使用 event.type
var btn3 = document.getElementById('btn3');

function handlerEvent() {
    switch (event.type) {
        case 'click':
            alert('clicked');
            break;
        case 'mouseover':
            alert('mouseover');
            break;
        case 'mouseout':
            alert('mouseout');
            break;
    }
}
btn3.addEventListener('click', handlerEvent, false);
btn3.addEventListener('mouseover', handlerEvent, false);
btn3.addEventListener('mouseout', handlerEvent, false);

//使用 event.preventDefault()阻止默认行为

var link1 = document.getElementById('link1');
link1.onclick = function() {
    event.preventDefault();
    console.log('不会跳转到指定连接地址');
}

//IE中的event对象
var btn4 = document.getElementById('btn4');

btn4.attachEvent('onclick', function() {
    alert(event.type);
})