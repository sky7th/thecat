## The Cat &#128570;
![](./jjal.gif)

## 목표
vanila javascript + es6 class 문법을 활용한 간단한 고양이 검색 사이트 만들어보기

고양이 정보를 제공하는 api 사용 - https://thecatapi.com/

## 배운 것
### Reflow or Repaint
- Reflow
  - 생성된 DOM 노드의 레이아웃 수치(너비, 높이, 위치 등) 변경 시 영향 받은 모든 노드의(자신, 자식, 부모, 조상(결국 모든 노드) ) 수치를 다시 계산하여(Recalculate), 렌더 트리를 재생성하는 과정
- Repaint
  - Reflow 과정이 끝난 후 재 생성된 렌더 트리를 다시 그리게 되는 과정
  - 레이아웃 수치가 변경되지 않는 스타일 변경 시에는 Reflow 과정이 생략된다.
- https://webclub.tistory.com/346

### Throttle, Debounce
Throttle 과 Debounce 는 이렇게 이벤트가 과도한 횟수로 발생하는 것에 제약을 걸어 제어할 수 있는 수준으로 이벤트를 발생시키는 것을 목표로 한다.
- Throttle
  - 이벤트를 일정한 주기마다 발생하도록 하는 기술
  - https://velog.io/@hyeon930/%EB%AC%B4%ED%95%9C-%EC%8A%A4%ED%81%AC%EB%A1%A4-%EB%A7%8C%EB%93%A4%EA%B8%B0-Throttling
- Debounce
  - 이벤트를 그룹화하여 특정시간이 지난 후 하나의 이벤트만 발생하도록 하는 기술
  - 먼저 발생한 이벤트가 처리를 대기하며, 대기하는 도중 새 이벤트가 발생하면 이전 이벤트의 대기를 취소(Cancel)하고, 해당 이벤트를 기준으로 다시 처리(Process)를 대기한다.
- https://jins-dev.tistory.com/entry/웹프론트엔드에서-쓰로틀링Throttling과-디바운싱Debouncing의-개념
- https://webclub.tistory.com/607
- 예제:
  - https://pewww.tistory.com/9   

### window.matchMedia()
```javascript
var mql = window.matchMedia("screen and (max-width: 768px)");

mql.addListener(function(e) {
    if(e.matches) {
        console.log('모바일 화면 입니다.');
    } else {
        console.log('데스크탑 화면 입니다.');
    }
});
출처: https://offbyone.tistory.com/122 [쉬고 싶은 개발자]
```

### 스타일시트에 클래스, css 변수
- https://nykim.work/2  
- https://frontdev.tistory.com/entry/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EC%97%90%EC%84%9C-CSS%EC%99%80-SASS%EC%9D%98-%EB%B3%80%EC%88%98-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0

### viewport 옵션
getBoundingClientRect
window.inner*은 뷰포트의 크기를 나타내고, screen.*은 스크린의 크기를 나타낸다.

### offsetHeight, innerWidth 와 비슷한 속성들 정리
- https://github.com/jinyowo/JS-Calendar/wiki/**offsetHeight,-innerWidth-%EC%99%80-%EB%B9%84%EC%8A%B7%ED%95%9C-%EC%86%8D%EC%84%B1%EB%93%A4-%EC%A0%95%EB%A6%AC

### Intersection Observer
- http://blog.hyeyoonjung.com/2019/01/09/intersectionobserver-tutorial/

### javascript 개발환경 구축
- https://d2.naver.com/helloworld/2564557

### jest
- https://analogcoding.tistory.com/162  
- https://www.daleseo.com/jest-mock-modules/
- https://medium.com/@jinseok.choi/jest%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%9C-unit-test-%EC%A0%81%EC%9A%A9%EA%B8%B0-420049c16cc8

### async/await 를 사용하기 전에 promise를 이해하기
https://medium.com/@kiwanjung/%EB%B2%88%EC%97%AD-async-await-%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0-%EC%A0%84%EC%97%90-promise%EB%A5%BC-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-955dbac2c4a4

### lazy-loading
https://frontdev.tistory.com/entry/Image-Lazy-Loading-%EA%B8%B0%EB%B2%95

### prefer-color-scheme

### 버블링, 캡쳐링, 위임

### window.stopPropagation()

### Prototype과 Closure

### grid-template-columns

### setTimeout, setInterval을 피하고 requestAnimationFrame을 쓰자