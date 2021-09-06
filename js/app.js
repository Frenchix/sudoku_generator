const app = {
    GATE: 9,
    init: function() {
        app.drawGate();
    },
    drawGate: function() {
        const gateDOM = document.getElementById("gate");
            for (var row = 0; row < app.GATE; row++) {
                for (var col = 0; col < app.GATE; col++) {
                    const div = document.createElement("div");
                    //dessin des bordures
                    if (row % 3 === 0) {
                        div.className = "cell border-top";
                    } else {
                        div.className = "cell";
                    }
                    if (col === 0){
                        div.classList.add("border-left");
                    }
                    if (row === app.GATE - 1) {
                        div.classList.add("border-bottom");
                    }
                    //attribution des attributs row, col et container
                    while(row % 3 !== 0 && row !== 0) {
                        while (col % 3 !== 0 && col !== 0) {
                            console.log("row", row);
                            console.log("col", col);
                        }
                    }
                    gateDOM.appendChild(div);
            }
        }
    },
}

document.addEventListener('DOMContentLoaded', app.init);