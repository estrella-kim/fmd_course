/*function Slider () {

}*/
//사용자입장에서는 똑같이 동작한다.1
class Slider () {
    constructor() { //초기에 가장 먼저 가지는 상태를 선언해주고 싶ㅇㄹ 때는 cosntructor안에서 설정
        this.currentIndex = 0;
        console.log(1111);
    }
    prev () {
        this.currentIndex--;
    }
    next() {
        this.currentIndex++;
    }
};




// 프로토타입으로 next와 prev가 이미 들어가있다?
const abc = 1; //한번 설정되면 바꾸지 못한다.
let abbb = 2; // 다시 재할당할 수 있다.
// 굳이 반복문일 경우 제외하고는 (let) 다 const로 설정한 다음 에러가 나는 경우 let으로 바꿔주면 됨. (처음)
// 세부적인 차이가 있다. const, let은 블록스코프, var는 함수스코프다. 기존의 호이스팅대로 동작하지 않는다.
function a() {
    const aaa =11;
    if(true) {
        const bb =222
    }
    if(true) {
        const cc = 333;
    };
}
var Slider = new Slider();
//클래스는 new로 호출하지 않고 var Slider = Slider(); 로 호출하게 되면 에러가 난다.
console.log(Slider);

var SSS = class {
    //익명으로도 할 수 있고
}
var SSS = class Slider () {
    //변수에 담을 수 있다.
}