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

//创建XMLHttpRequest对象，兼容低版本浏览器;
var createXHR = function () {
    if (typeof XMLHttpRequest != "undefined") {
        return new XMLHttpRequest();
    }
    else if (typeof ActiveXObject != "undefined") {
        if (typeof arguments.callee.activeXString != "string") {
            var versions = ["MSXML2.XMLHttp.6.0", "MSXML2.XMLHttp.3.0", "MSXML2.XMLHttp"], i, len;
            for (i = 0, len = versions.length; i < len; i++) {
                try {
                    new ActiveXObject(versions[i]);
                    arguments.callee.activeXString = versions[i];
                    break;
                } catch (ex) {
                    //跳过
                }
            }
        } else {
            throw new Error("创建XMLHttpRequest失败。");
        }
    }
}