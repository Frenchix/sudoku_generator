const app = {
    GATE: 9,
    rowArray: [],
    colArray: [],
    containerArray: [],
    currentArray: [],
    allArray: [1,2,3,4,5,6,7,8,9],
    
    init: function() {
        app.drawGate();
        app.setNumber();
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
                    
                    // randomNumber = app.randomNumber();
                    // while (app.rowArray[row]?.includes(randomNumber) || app.colArray[col]?.includes(randomNumber) || app.containerArray[container]?.includes(randomNumber)) {
                    //     randomNumber = app.randomNumber();
                    // }
                    // if (!app.rowArray[row]?.length) {
                    //     app.rowArray[row] = [randomNumber];
                    // } else {
                    //     app.rowArray[row].push(randomNumber);
                    // }
                    // if (!app.colArray[col]?.length) {
                    //     app.colArray[col] = [randomNumber];
                    // } else {
                    //     app.colArray[col].push(randomNumber);
                    // }
                    // if (!app.containerArray[container]?.length) {
                    //     app.containerArray[container] = [randomNumber];
                    // } else {
                    //     app.containerArray[container].push(randomNumber);
                    // }
                    // div.innerText = randomNumber;
                    // if (col === 8) {
                    //     container -= 3;
                    // }
                    gateDOM.appendChild(div);
            }
        }
    },
    setNumber: function() {
        let container = -4;
        let randomNumber;
        for (var row = 0; row < 2; row++) {
            app.rowArray = [];
            for (var col = 0; col < app.GATE; col++) {
                app.currentArray = [];
                if (row % 3 === 0 && col === 0) {
                    container += 3;
                }
                if (col % 3 === 0 ) {
                    container++;
                }
                switch(row) {
                    case 0:
                        app.allArray.map(function(item){
                            if (!app.rowArray.includes(item)){
                                app.currentArray.push(item);
                            }
                        });
                        console.log("currentArray", app.currentArray);
                        randomNumber = app.currentArray[Math.floor(Math.random() * app.currentArray.length)];
                        app.rowArray.push(randomNumber);
                        app.colArray[col]?.length ? app.colArray[col].push(randomNumber) : app.colArray[col] = [randomNumber];
                        app.containerArray[container]?.length ? app.containerArray[container].push(randomNumber) : app.containerArray[container] = [randomNumber];
                        break;
                    case 1:
                        app.allArray.map(function(item){
                            if(!app.containerArray[container].includes(item) && !app.rowArray.includes(item)) {
                                app.currentArray.push(item);
                            }
                        });
                        console.log("currentArray", app.currentArray);
                        randomNumber = app.currentArray[Math.floor(Math.random() * app.currentArray.length)];
                        app.rowArray.push(randomNumber);
                        app.colArray[col]?.length ? app.colArray[col].push(randomNumber) : app.colArray[col] = [randomNumber];
                        app.containerArray[container]?.length ? app.containerArray[container].push(randomNumber) : app.containerArray[container] = [randomNumber];
                        break;
                    case 2:

                        break;
                }
                if (col === 8) {
                    container -= 3;
                } 
            }
            if (app.rowValidation(app.rowArray.sort())){
                console.log("match ok");
            } else {
                console.log("pas de match");
                app.colArray.map(function(item,index) {
                    item.slice(0, -1);
                });
                console.log("newColArray", app.colArray);
                for (var a = 1; a < 4; a++) {
                    app.containerArray[app.containerArray.length - a].slice(0, -3);
                }
                console.log("newContainerArray", app.containerArray);
                // row--;
            }
        }
        console.log("rowArray", app.rowArray);
        console.log("colArray", app.colArray);
        console.log("containerArray", app.containerArray);
        
    },
    randomNumber: function() {
        return Math.floor(Math.random() * app.GATE) + 1;
    },
    arrayEquals: function(a, b) {
        //Return True if arrays has same length, type, and value on same index
        return Array.isArray(a) && Array.isArray(b) && a.length === b.length && a.every((val, index) => val === b[index]);
    },
    rowValidation: function(arr) {
            if (app.arrayEquals(app.allArray, arr)) {
                return true;
            }
            return false;
    },
}

document.addEventListener('DOMContentLoaded', app.init);