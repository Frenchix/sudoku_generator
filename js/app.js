const app = {
    GATE: 9,
    rowArray: [],
    colArray: [],
    containerArray: [],
    
    init: function() {
        app.drawGate();
    },
    drawGate: function() {
        let container = -4;
        let randomNumber;
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
                    randomNumber = app.randomNumber();
                    while (app.rowArray[row]?.includes(randomNumber) || app.colArray[col]?.includes(randomNumber) || app.containerArray[container]?.includes(randomNumber)) {
                        randomNumber = app.randomNumber();
                    }
                    if (!app.rowArray[row]?.length) {
                        app.rowArray[row] = [randomNumber];
                    } else {
                        app.rowArray[row].push(randomNumber);
                    }
                    if (!app.colArray[col]?.length) {
                        app.colArray[col] = [randomNumber];
                    } else {
                        app.colArray[col].push(randomNumber);
                    }
                    if (!app.containerArray[container]?.length) {
                        app.containerArray[container] = [randomNumber];
                    } else {
                        app.containerArray[container].push(randomNumber);
                    }
                    div.innerText = randomNumber;
                    if (col === 8) {
                        container -= 3;
                    }
                    gateDOM.appendChild(div);
            }
            console.log ("rowArray", app.rowArray);
        console.log("colArray", app.colArray);
        console.log("containerArray", app.containerArray)
        }
    },
    randomNumber: function() {
        return Math.floor(Math.random() * app.GATE) + 1;
    },
}

document.addEventListener('DOMContentLoaded', app.init);