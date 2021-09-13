const app = {
    GATE: 9,
    gateDOM: document.getElementById("gate"),
    
    init: function() {
        app.drawGate();
        app.listeners();
        app.getNumbers();
    },
    drawGate: function() {
        let container = -4;
        let id = 0;
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
                    div.id = id;

                    app.gateDOM.appendChild(div);
                    id++;
            }
        }
    },
    drawNumbers: function(numbers) {
        let id = 0;
        for (var row = 0; row < app.GATE; row++) {
            for (var col = 0; col < app.GATE; col++) {
                const div = document.getElementById(id)
                div.innerText = numbers[id];
                id++;
            }
        }
    },
    listeners: function() {
        const generateButton = document.getElementById('generateButton');
        generateButton.addEventListener('click', app.getNumbers);
        
    },
    getNumbers: async function() {
        const response = await fetch('http://localhost:3000/generate');
        const numbers = await response.json();
        app.drawNumbers(numbers);
    }
}

document.addEventListener('DOMContentLoaded', app.init);