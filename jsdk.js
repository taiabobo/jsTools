//外观模式实现添加事件兼容方式
function addEvent(dom, type, fn) {
    if (dom.addEventListener) {
        dom.addEventListener(type, fn, false);
    }
    else if (dom.attachEvent) {
        dom.attachEvent('on' + type, fn);
    }
    else {
        dom['on' + type] = fn;
    }
}

//外观模式获取事件对象兼容
var getEvent = function (event) {
    return event || window.event;
}
//获取目标元素
var getTarget = function (event) {
    var event = getEvent(event);
    return event.target || event.srcElement;
}
//阻止默认行为。用法：preventDefault(e);
var preventDefault = function (event) {
    var event = getEvent(event);
    if (event.preventDefault) {
        event.preventDefault();
    } else {
        event.returnValue = false;
    }
}
