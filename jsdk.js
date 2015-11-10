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