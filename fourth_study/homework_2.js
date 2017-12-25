function sum(a){
    return function(b){
        return a+b;
    } //내부의 함수를 클로저라고 한다.
//결과가 같더라도 사용이 다를수가 있다.
}
var s = sum ('안녕')
console.log(s('하세요'));
console.log(s('히 계세요'));
console.log(sum('안녕')('하세요'));
console.log( sum (1)(5));