// 객체간의 협렧관계를 만들어가는 프로그래밍을 객체지향 프로그래밍이라고 한다. .
//브라우저상에서 객체를 만드는 방법이 있는데, 동작하는 엔진이 있기 때문에 태그들을 객체로 만든다.
// docuemnt objcect modal 자체는, html에서 객체로 만든다.
/*

{ document: {
    head: {},
    body: {}


}}
*/

//돔에 직접 조작을 가하는 걸 기존에 js, jquery로 했다면(성능저하 혹은 메모리누수가 발생할 수 있다.)
//마크업 ㅐ글를 직접 만들고 리액트가 읽어서 브라우저 돔에 갱신을 하겠다.
//기존에는 브라우저에서 태그를 읽어 돔을 조작할 수 있게 객체를 만든다.
// 리액트가 레이어를 만들고 그 레이어를 조작한다. 그래서 사용자는 리액트의 ㅁ규칙에 맞게 작성하면 된다..
//