const { rowValidation } = require('../services/validations');

const setNumber = {
    setNumber: function() {
        let container = -4;
        let randomNumber;
        let count = 0;
        let [rowArray, copyRowArray, currentArray] = [[], [], []];
        const [finalArray, containerArray, colArray] = [[], [], []];
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
                
                //Put the random Number on row array, cell array, container array, and final Array
                // console.log("currentArray0", app.currentArray);
                randomNumber = currentArray[Math.floor(Math.random() * currentArray.length)];
                rowArray.push(randomNumber);
                colArray[col]?.length ? colArray[col].push(randomNumber) : colArray[col] = [randomNumber];
                containerArray[container]?.length ? containerArray[container].push(randomNumber) : containerArray[container] = [randomNumber];

                if (col === 8) {
                    container -= 3;
                } 
            }

            //We make a copy of the rowArray for sort it and stay rowArray like origin
            copyRowArray = [...rowArray];
            //Test if the row Array is [1,2,3,4,5,6,7,8,9]
            if (rowValidation(allArray, copyRowArray.sort())){
                //If ok we can pass on the next row and push the row on the finalArray
                finalArray.push(rowArray);
            } else {
                //If not, we delete last entries on col Array and container Array and -1 on row for retest an another combinaison 
                // console.log("pas de match");
                // console.log("count", count);
                count++;
                if (count > 50) {
                    // After 50 try, we cant find a solution so we reload the function
                    return setNumber.setNumber();
                }
                // console.log("row", row);
                
                colArray.map(function(item, index) {
                    colArray[index] = colArray[index].slice(0, -1);
                });
                // console.log("newColArray", app.colArray);
                for (var a = 1; a < 4; a++) {
                    containerArray[containerArray.length - a] = containerArray[containerArray.length - a].slice(0, -3);
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
        //We return the concatenate finalArray 
        return [].concat.apply([], finalArray);
    },
};

module.exports = setNumber;