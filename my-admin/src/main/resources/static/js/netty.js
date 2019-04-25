/**
 * Created by MI on 2019/3/2.
 * 对应entty.html的js文件
 */
//发送信息到后端, 实时连接

var socket;

if (!window.WebSocket) {
    window.WebSocket = window.MozWebSocket;
}

if (window.WebSocket) {
    socket = new WebSocket("ws://localhost:8888/websocket");
    socket.onmessage = function (event) {
        var ta = document.getElementById('responseText');
        ta.value = ta.value + event.data + '\n\n';
    };
    socket.onopen = function (event) {
        var ta = document.getElementById('responseText');
        ta.value = ta.value + "";//"[" + getdate() + "] [系统]  " + "连接已开启\n";
    };
    socket.onclose = function (event) {
        var ta = document.getElementById('responseText');
        ta.value = ta.value + "[" + getdate() + "] [系统]  " + "连接已关闭\n";
    };
} else {
    alert("你的浏览器不支持 WebSocket！\n");
}

function send(message) { // 发送按钮功能设置
    if (!window.WebSocket) {
        return;
    }
    if (socket.readyState == WebSocket.OPEN) {
        if ($.trim($(name1).val()) == '' || $.trim($(message1).val()) == '') {
            window.alert("信息和用户名不能为空!");
        } else {
            socket.send(message);
        }
    } else {
        alert("连接没有开启.\n");
    }
}


function getdate() {
    var now = new Date(),
        y = now.getFullYear(),
        m = now.getMonth() + 1,
        d = now.getDate();
    return y + "-" + (m < 10 ? "0" + m : m) + "-" + (d < 10 ? "0" + d : d) + " " + now.toTimeString().substr(0, 8);
}

function refresh2() { // 清空按钮功能设置
    javascript:document.getElementById('responseText').value = '';
}

function refresh1() {
    /*$.ajax({
        type: 'get',
        url: "messageSelect",
        timeout: 1000,
        data: {},
        dataType: 'json',
        success: function (data) {
            var str = '';
            for (var i = 0; i < data.length; i++) {
                str += '[' + data[i].time + '] [' + data[i].name + '] ' + data[i].text + '\n\n';
            }
            var ta = document.getElementById('responseText');
            ta.value += str;
        },
        error: function () {
        }
    });*/
}

$(document).ready(function () { // 当页面加载完成时
    refresh1();
});
