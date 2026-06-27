//  Logical AND (&&)
// true true -> true
// false false -> false
// true false -> false
// false true -> false


if (true && false) {
    document.write('Scenario 1');
}

if (true && true) {
    document.write('Scenario 2');
}

if (false && false) {
    document.write('Scenario 3');
}

if (false && true) {
    document.write('Scenario 4');
}

document.write('<br>');

// ------------------------------
// Logical OR(||)
// true true -> true
// false false -> false
// true false -> true
// false true -> true


if (true || false) {
    document.write('Scenario 1');
}

if (true || true) {
    document.write('Scenario 2');
}

if (false || false) {
    document.write('Scenario 3');
}

if (false || true) {
    document.write('Scenario 4');
}