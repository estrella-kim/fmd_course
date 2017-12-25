var slider = {
    currentIndex: 0,  // 자바스크립트가 유연하기 때문에 빈 문자열로 초기화해주면 ㄴㄴ 타입이 숫자형이면 계속 숫자형타입으로 하는게 좋은 코딩습관임.
    next: function(step){ //네이밍에서 명확하게 이름이 와닿을 때
        var defaultstep =1;
        // if(step){
        //     this.currentIndex +=step;
        //
        // } else{
        //     this.currentIndex +=1; //뜬금없이 이 1 에 의해 로직이 동작을 할때 갸우뚱해지는데 MagicNumber
        // }
        // this.currentIndex = this.currentIndex +defaultIndex; // 중복
        this.currentIndex += step > 0 ? step : defaultstep; //중복을 삼항연산자로 처리한다.

    },
    prev: function(step){
        var defaultstep = 1;
        // if(this.currentIndex > 0){
        //     //this.currentIndex = this.currentIndex -1;
        //
        // // }
        // if(this.currentIndex <= 0){
        //     return;
        // } //쉴드 패턴  : 조건에 부합하지 않으면 return으로 튕겨낸다. 그렇지않으면 아래로 흐르게끔
        // 뭔가 만족할때의 리스트들은 white list라고 한다.
        // 만족하지 않을ㄸㅐ의 리스트들을 black list라고 한다.
        //     this.currentIndex -= step;
        this.currentIndex -= step >0  && step ? step : defaultstep ;

    },
    go : function(index) {
        // if (index > 0) {
        // }
        if(index < 0){
            return;
    }
        this.currentIndex = index;

    }
}


slider.next(5); //
slider.next(3);
slider.next(); // 파라미터가 없을 때의 처리도 해주어야했다.
console.log(slider.currentIndex); //9
slider.go(0);
slider.prev(5);
console.log(slider.currentIndex);
// 뭘 만들지 정의하고 어떻게 데이터들이 흘러갈지 파악해서 기능을 먼저 만들고  tml과 css를 만들자.
// 나오는 값들을 파악해서 슬라이더의 스택 파악
// 최소한의 것들을 작업 후, 제한적인 것들을 작업하는 게 ㅈ호다.
// 연산자는 우선순위부터 계산하고 좌에서 우로 코드는 흐른다.
// if문 조건이 맞으면 그 안에 실행되고,  맞지 않으면 뛰어넘고 다음 코드부터 실행된다.
// 개선은 1 성능을 올린다던지 2. 가독성을 높인다던지 3. 중복을 줄인다던지
// 리팩토링은 코드변경 혹은 설계변명까지도 리팩토링이라고 한다.
// 애초에 테스트코듣를 사용자관점에서 바깥에다가 실행을 시켜주면 로직 안에서 망가지지 않고 할 수 있다.