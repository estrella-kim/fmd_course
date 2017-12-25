// 메모리관리와 코드관리를 위해 프로토타입을 이용한다.

function Slider() {
    this.currentIndex = 0;

}
Slider.prototype.next = function() {};
Slider.prototype.prev = function() {};

var slider = new Slider();

var slider2 = new Slider();

console.log(slider);
console.log(slider2);

slider2.currentIndex = 5;
slider.next();
console.log(slider);
console.log(slider2);
/*

function Array2(){
}
Array2.prototype.push = function(target){
    arr.length++;
}
var arr = new Array2();
arr.push(1);
console.logOarr(length);
*/

function Array() {
    this.length = 0;
}
Array.prototype.push = function () {
    this.length++;
}

var arr = new Array();
console.log(arr.length);
arr.push();
console.log(arr.length)(;
arr.push();
console.log(rarr.length));



