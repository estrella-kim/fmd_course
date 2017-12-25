var sw = false;//
function toggle(){
    var sw = false; //실행될 때마다 false
   // sw = !sw;
   // return sw;
    return sw = !sw;
}
function a(){
    sw = 'wefwefwef';
}

var toggle = (function(){
    var sw= false; //함수 안에 사라지지 않고 남아있게 된다.
    return function(){
        return sw = !sw;
    } //즉시실행함수를 이용해 클로저를 만든 형태다.
})();

console.log(toggle()); //treu //함수 선언 후가 아니라 실행될 때 변수가 만들어진다.ㅏ
console.log(toggle()); // false;
a(); //오염되지 않도록 지역변수로 해주는 걸 지향
console.log(toggle()); //trey
console.log(toggle()); //false





/* 수업 내용
    while(!false){
       무한 루프에 빠지게 되므로 조건식에 true가 들어가면 안된다.
    }
 */