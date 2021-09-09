array1 = [1,2,3,4,5,6,7,8,9];
colArray = [[1,2,3,1,4,5,6,7,8,8],[1,2,3,4,5,6,7,8,9]];
currentArray = [];
rowArray = [2,3,1,4,8];

// console.log("array1", array1);

// if(arrayEquals(array1, array2.sort())) {
//     console.log("same");
// } else {
//     console.log("pas same");
// }

// function arrayEquals(a, b) {
//     return Array.isArray(a) &&
//       Array.isArray(b) &&
//       a.length === b.length &&
//       a.every((val, index) => val === b[index]);
// }

// array1.map(function(item){
//     if (!rowArray.includes(item)){
//         currentArray.push(item);
//     }
// });

// console.log("array1", array1);
// console.log("rowArray", rowArray);
// console.log("currentArray", currentArray);
colArray.map(function(item,index) {
    item.slice(0, -2);
    console.log("item", item);
});
console.log("newColArray", colArray);