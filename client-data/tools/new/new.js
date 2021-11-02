(function grid() {

    function newPanel() {
        Tools.socket.emit('broadcast', {
            board: Tools.boardName,
            data : {
                tool : "New",
                type : "deleteAll"
            }
        });
        Tools.drawingArea.innerHTML = '';
    }

    function eraseAll(data) {
        switch (data.type) {
            case "deleteAll":
                Tools.drawingArea.innerHTML = '';
                break;
        }
    }

    Tools.add({
        "name": "New",
        "shortcut": "n",
        "listeners": {},
        "icon": "tools/new/new.svg",
        "oneTouch": true,
        "onstart": newPanel,
        "draw": eraseAll,
        "mouseCursor": "crosshair",
    });

})();
