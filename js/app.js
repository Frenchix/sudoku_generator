const app = {
    GATE: 9,
    init: function() {
        app.drawCellContainer();
    },
    drawGate: function() {
        const gateDOM = document.getElementById("gate");
            for (var row = 0; row < app.GATE; row++) {
                for (var cell = 0; cell < app.GATE; cell++) {
                    const div = document.createElement("div");
                    div.className = "cell";
                    gateDOM.appendChild(div);
            }
        }
    },
    drawCellContainer : function() {
        const gateDOM = document.getElementById("gate");
            for (var container = 0; container < app.GATE; container++) {
                const div = document.createElement("div");
                div.className = "cellContainer";
                gateDOM.appendChild(div);
        }
    },
}

document.addEventListener('DOMContentLoaded', app.init);