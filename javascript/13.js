// maximum of array numbers

let myArray = [100, 50, 200, 20, 60, 70, 90, -2, 300];
// let max = Math.max(...myArray);
// let min = Math.min(...myArray);

for (let i = 0; i < myArray.length; i++) {
    if (max < myArray[i]) {
        max = myArray[i];
    }
}

// max               i        myarray[i]
// -Infinity         0        100             -Infinity < 100
// 100               1        50               100  < 50
// 100               2        200               100 < 200
// 200               3        20                200 < 20

document.write('max value is: ', max);
document.write('min value is: ', min);