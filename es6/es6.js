
function init() {
    const x = { a: 100 };
    Object.freeze(x);

    //Destructure
    let y = [1, 2, 4, 5, 6]
    // let [a, b, , , ...c] = y; 
    let [a, b, ...c] = y;
    // let [a, b, , , c] = y; // a = 1, b = 2, c = 4
    // let [a, b, , ,...c] = y; // a = 1, b = 2, c = 4
    console.log(a)
    console.log(b)
    console.log(c)
}

for (i = 0; i < 8; i++) {
    var t = 1;
}

init();

//Enhanced object literal
