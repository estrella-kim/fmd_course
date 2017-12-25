var sum = require('./homework_review.js')

test('가장 큰 숫자를 반환해야한다//테스트가 무얼해야 무엇이 반환되는 지 명시함', function(){
    expect(sum([1,3, 5])).toBe(9);

})