// maximum number find from 3 numbers

let a = 60;
let b = 30;
let c = 40;
let maximum;

if (a > b) {
    if (a > c) {
        maximum = a;
    } else {
        maximum = c;
    }
} else {
    if (b > c) {
        maximum = b;
    } else {
        maximum = c;
    }
}

document.write('maximum value is: ', maximum)