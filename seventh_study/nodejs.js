
(function(global) {
    if(typeof module == 'object' && typeof module.exports == 'object') {
        module.exports = {

            find : function(arr, target) {
                var max = arr[0];

                for( var i = 1; i < arr.length; i++){
                    if(max[target] < arr[i][target]) {
                        max = arr[i];
                    }
                }
                return max;
            }
        }
    } else {
        global._ = {
            find : function(arr, target) {
                var max = arr[0];

                for( var i = 1; i < arr.length; i++){
                    if(max[target] < arr[i][target]) {
                        max = arr[i];
                    }
                }
                return max;
            }
        }
    }
})(typeof window === 'object' ? window : this)


;
//window || {}
array  = [
    { name : 'mark', age: '12'},
    { name : 'kelly', age: '15'},
    { name : 'trolly', age: '18'}
]
_.find(array, 'age'); // window객체는 생략가능하다.
console.log(window._.find(array, 'age'))
//즉시실행함수를 이용하면 브라우저에서 글로벌로 노출되는 변수가 없다.


//노드상에서와  브라우저상을 고려하는 라이브러리를 만든다. 제이쿼리에서 찾을 수 있다.