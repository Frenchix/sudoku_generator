const app = {
    GATE: 9,
    init: function() {
        app.drawGate();
    },
    drawGate: function() {
        const gateDOM = document.getElementById("gate");
        for (const cell = 0; cell < app.GATE; cell++) {
            for (const row = 0; row < app.GATE; row++) {

            }
        }
        const div = document.createElement("div");
        div.className = "cell";
        gateDOM.appendChild(div);
    },
}

document.addEventListener('DOMContentLoaded', app.init);