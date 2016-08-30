var btn1 = document.getElementById('btn1');

var handler = function() {
    alert(event.target.id);
}

EventUtil.addHandler(btn1, 'click', handler);