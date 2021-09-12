const generateController = {
    generate: function(req, res) {
        res.json('Coucou');
    },
    setNumber: function() {
        let container = -4;
        let randomNumber;
        let count = 0;
        let rowArray = [];
        let colArray = [];
        let currentArray = [];
        let containerArray = [];
        const allArray = [1,2,3,4,5,6,7,8,9];
        //browse all cells
        for (var row = 0; row < 9; row++) {
            rowArray = [];
            for (var col = 0; col < 9; col++) {
                currentArray = [];
                if (row % 3 === 0 && col === 0) {
                    container += 3;
                }
                if (col % 3 === 0 ) {
                    container++;
                }
                switch(row) {
                    //Condition to row 0
                    case 0:
                        allArray.map(function(item){
                            if (!rowArray.includes(item)){
                                currentArray.push(item);
                            }
                        });
                        break;
                    //Condition to row 1
                    case 1:
                        allArray.map(function(item){
                            if(!containerArray[container].includes(item) && !rowArray.includes(item)) {
                                currentArray.push(item);
                            }
                        });
                        break;
                    //Condition to row 2
                    case 2:
                        allArray.map(function(item){
                            if (!containerArray[container].includes(item)){
                                currentArray.push(item);
                            }
                        });
                        break;
                    //Condition to row 3 and 6
                    case 3: case 6:
                        allArray.map(function(item){
                            if (!colArray[col].includes(item) && !rowArray.includes(item)){
                                currentArray.push(item);
                            }
                        });
                        break;
                    //Condition to row 4 and 7
                    case 4: case 5: case 7:
                        allArray.map(function(item){
                            if (!colArray[col].includes(item) && !rowArray.includes(item) && !containerArray[container].includes(item)){
                                currentArray.push(item);
                            }
                        });
                        break;
                    //Condition to row 8
                    case 8:
                        allArray.map(function(item){
                            if (!colArray[col].includes(item)){
                                currentArray.push(item);
                            }
                        });
                        break;
                }
                //Put the random Number on row array, cell array and container array
                // console.log("currentArray0", app.currentArray);
                randomNumber = currentArray[Math.floor(Math.random() * currentArray.length)];
                rowArray.push(randomNumber);
                colArray[col]?.length ? colArray[col].push(randomNumber) : colArray[col] = [randomNumber];
                containerArray[container]?.length ? containerArray[container].push(randomNumber) : containerArray[container] = [randomNumber];
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

module.exports = generateController;