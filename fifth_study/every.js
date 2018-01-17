function isBigEnough(element, index, array) {
    return element >= 10;
}
var arr = [12, 5, 8, 130, 44];
arr.every(isBigEnough);   // false
arr.every(isBigEnough) ?  console.log(1) : console.log(0)

arr.some(isBigEnough) ? console.log(1) : console.log(0);