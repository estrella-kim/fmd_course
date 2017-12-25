// function max(a, b, c){
//     if( a > b){
//         if(b> c){
//             return b;
//         }
//     }
// }
// console.log(max(2,2,7));

module.exports = function max(a,b,c){
    var result = a;

    if(result < b){
        result=b;
    }
    if(result < c) {
        result = c;
    }

    return result;
}

// module.exports = max;
