const app = {
    GATE: 9,
    gateDOM: document.getElementById("gate"),
    rowArray: [],
    colArray: [],
    containerArray: [],
    currentArray: [],
    allArray: [1,2,3,4,5,6,7,8,9],
    
    init: function() {
        app.setNumber();
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
                    
                    div.innerText = app.colArray[col][row];
                    app.gateDOM.appendChild(div);
            }
        }
    },
    setNumber: function() {
        let container = -4;
        let randomNumber;
        let count = 0;
        //browse all cells
        for (var row = 0; row < app.GATE; row++) {
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
                    //Condition to row 0
                    case 0:
                        app.allArray.map(function(item){
                            if (!app.rowArray.includes(item)){
                                app.currentArray.push(item);
                            }
                        });
                        break;
                    //Condition to row 1
                    case 1:
                        app.allArray.map(function(item){
                            if(!app.containerArray[container].includes(item) && !app.rowArray.includes(item)) {
                                app.currentArray.push(item);
                            }
                        });
                        break;
                    //Condition to row 2
                    case 2:
                        app.allArray.map(function(item){
                            if (!app.containerArray[container].includes(item)){
                                app.currentArray.push(item);
                            }
                        });
                        break;
                    //Condition to row 3 and 6
                    case 3: case 6:
                        app.allArray.map(function(item){
                            if (!app.colArray[col].includes(item) && !app.rowArray.includes(item)){
                                app.currentArray.push(item);
                            }
                        });
                        break;
                    //Condition to row 4 and 7
                    case 4: case 5: case 7:
                        app.allArray.map(function(item){
                            if (!app.colArray[col].includes(item) && !app.rowArray.includes(item) && !app.containerArray[container].includes(item)){
                                app.currentArray.push(item);
                            }
                        });
                        break;
                    //Condition to row 8
                    case 8:
                        app.allArray.map(function(item){
                            if (!app.colArray[col].includes(item)){
                                app.currentArray.push(item);
                            }
                        });
                        break;
                }
                //Put the random Number on row array, cell array and container array
                // console.log("currentArray0", app.currentArray);
                randomNumber = app.currentArray[Math.floor(Math.random() * app.currentArray.length)];
                app.rowArray.push(randomNumber);
                app.colArray[col]?.length ? app.colArray[col].push(randomNumber) : app.colArray[col] = [randomNumber];
                app.containerArray[container]?.length ? app.containerArray[container].push(randomNumber) : app.containerArray[container] = [randomNumber];
                if (col === 8) {
                    container -= 3;
                } 
            }
            //Test if the row Array is [1,2,3,4,5,6,7,8,9]
            if (app.rowValidation(app.rowArray.sort())){
                //If ok we can pass on the next row
                // console.log("match ok")
            } else {
                //If not, we delete last entries on col Array and container Array and -1 on row for retest an another combinaison 
                // console.log("pas de match");
                // console.log("count", count);
                count++;
                if (count > 50) {
                    // clean the board, array and reload the page
                    app.colArray = [];
                    app.containerArray = [];
                    app.gateDOM.innerHTML = "";
                    
                    document.location.reload();
                }
                // console.log("row", row);
                app.colArray.map(function(item,index) {
                    app.colArray[index] = app.colArray[index].slice(0, -1);
                });
                // console.log("newColArray", app.colArray);
                for (var a = 1; a < 4; a++) {
                    app.containerArray[app.containerArray.length - a] = app.containerArray[app.containerArray.length - a].slice(0, -3);
                }
                // console.log("newContainerArray", app.containerArray);
                // console.log("container", container);
                if (row % 3 === 0) {
                    container -= 3;
                }
                row--;
            }
        }
        // console.log("rowArray", app.rowArray);
        // console.log("colArray", app.colArray);
        // console.log("containerArray", app.containerArray);
        
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