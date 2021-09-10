array1 = [1,2,3,4,5,6,7,8,9];
colArray = [[7,5,9],[4,6,1],[8,2,3],[1,4,6],[3,8,2],[5,9,7],[6,1,5],[9,7,8],[2,3,4]];
containerArray = [[7,4,8,1,3,5,6,9,2],[5,6,2,4,8,9,1,7,3],[9,1,3,6,2,7,5,8,4]]
currentArray = [];
container = 3;

function arrayEquals(a, b) {
    return Array.isArray(a) &&
      Array.isArray(b) &&
      a.length === b.length &&
      a.every((val, index) => val === b[index]);
}

while (true){
    rowArray = [];
    for (var col = 0; col < 9; col++) {
        currentArray = [];
        array1.map(function(item){
            if (!colArray[col].includes(item) && !rowArray.includes(item)){
                currentArray.push(item);
            }
        });
    
        console.log("currentAray", currentArray);
        randomNumber = currentArray[Math.floor(Math.random() * currentArray.length)];
        rowArray.push(randomNumber);
        colArray[col]?.length ? colArray[col].push(randomNumber) : colArray[col] = [randomNumber];
        containerArray[container]?.length ? containerArray[container].push(randomNumber) : containerArray[container] = [randomNumber];
    }
    if (arrayEquals(array1 ,rowArray.sort())) {
        break;
    } else {
        colArray.map(function(item,index) {
            colArray[index] = colArray[index].slice(0, -1);
        });
        console.log("newColArray", colArray);
        for (var a = 1; a < 4; a++) {
            containerArray[containerArray.length - a] = containerArray[containerArray.length - a].slice(0, -3);
        }
        console.log("rowArray", rowArray);
        container--;
    }
}

console.log("containerArray", containerArray);
console.log("colArray", colArray);