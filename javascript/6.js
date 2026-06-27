// Print day name using day number
// 0 -> Sun
// 1 -> Mon
// 2 -> Tue
// 3 -> Wed
// 4 -> Thu
// 5 -> Fri
// 6 -> Sat

let x = 6;
let dayName;

switch(x) {
    case 0:
        dayName = 'Sun';
        break;
    case 1:
        dayName = 'Mon';
        break;
    case 2:
        dayName = 'Tue';
        break;
    case 3:
        dayName = 'Wed';
        break;
    case 4:
        dayName = 'Thu';
        break;
    case 5:
        dayName = 'Fri';
        break;
    case 6:
        dayName = 'Sat';
        break;
    default:
        dayName = 'invalid';
}

document.write('Dayname is: ', dayName)