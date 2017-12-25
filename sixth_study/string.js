/*
문자열의 메소드는 원본은 손상되지 않고 새로운 문잘열을 반환한다.
split
indexOf
replace
toLowerCase
ttoLocaleUpperCase
* */

var a= 'abcde' ;
var a = new string('abcde');
String.prototype.indexOf = function(){}
console.log(a.indexOf('h'));
a.replace('c', 'hh');

var b = 123123;
var b= true;

// 객체가 아닌데 어떻게 메소드를 사용할 숭수 있나 . 이유는 문자열리터럴, 숫자리터럴, --리터럴이기 때문 . 자바스크립트 엔진이 기본형을 객체처럼 인지하고 알아서 사용할 수 있게 만들어준다. 자바스크립트 엔진의 박싱과 언박싱
// 자동으로 해주는걸 오토박싱, (자바스크립트는 오토박싱)
// 그러면 다른 언어들도 오토박싱, 언박싱, 박싱을 기본적으로 제공해준다는 말이군/
//함수는 단일체계를 가지고 있어야하며, 중복이 없어야한다가 좋은 코드라는데는 이견이 없다.
// sumIfOVer 더하는 행위와 찾는 행위의 두가지를 하고 있고, 이를 하나의 행위로 줄여주어야한다.