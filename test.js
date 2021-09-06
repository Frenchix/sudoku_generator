async function first() {
    for (var i = 0; i <1; i++) {
        console.log("premier");
        for (var y =0; y <1000000000000; y++) {

        }
        console.log("deuxieme");
    }
};

function second() {
    console.log("troisieme");
};

first();
second();