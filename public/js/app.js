const app = {
    GATE: 9,
    gateDOM: document.getElementById("gate"),
    
    init: function() {
        app.drawGate();
    },
    drawGate: function() {
        let container = -4;
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
                    if (row % 3 === 0 && col === 0) {
                        container += 3;
                    }
                    if (col % 3 === 0 ) {
                        container++;
                    }
                    div.setAttribute("row", row);
                    div.setAttribute("col", col);
                    div.setAttribute("container", container);
                    
                    //Affichage des nombres dans les cellules
                    
                    // div.innerText = app.colArray[col][row];
                    app.gateDOM.appendChild(div);
            }
        }
    },
}

document.addEventListener('DOMContentLoaded', app.init);