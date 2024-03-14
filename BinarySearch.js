function randomInt(min, max) {
    return Math.floor((Math.random() * max) + min);
}

const array = [];
const length = randomInt(20, 10000000);
let iterations = 0;

for (let i = 0; i < length; i++) {
    array[i] = randomInt(0, 10000000);
}

const targetPos = randomInt(0, length);
const target = array[ targetPos ];
array.sort((a,b) => a-b);

console.log("Finished alimentation");
console.log(`The target is: ${target} \nAnd the array length is: ${length} \n------------------------------------------------`);

let offset = 0;
let limit = array.length;
let timer = Date.now();
while (offset <= limit) {
    const middle = Math.round( (offset+limit)/2 );

    if( array[ middle ] == target ) {
        console.log(`Target Found: ${array[ middle ]}`);
        break;
    }

    if ( array[ middle ] > target ) {
        limit = middle - 1;
    } else if ( array[middle] < target ) {
        offset = middle + 1;
    } 
    iterations++;
}

console.log(`Target position in array: ${targetPos} \nTime: ${Date.now() - timer}ms \nNumber of iterations: ${iterations} \n------------------------------------------------`);
iterations = 0;

timer = Date.now();
for (let i = 0; i < array.length; i++) {
    if (array[i] == target) {
        console.log(`Target Found: ${array[ i ]}`);
        break;
    }
    iterations++;
}

console.log(`Target position in array: ${targetPos} \nTime: ${Date.now() - timer}ms \nNumber of iterations: ${iterations}`);

// offset = 0;
// limit = 200;

// offset = 100;
// limit = 200;

// offset = 100;
// limit = 150 ((offset+limit)/2);
