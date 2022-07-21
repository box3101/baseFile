$(function () {

  var dur = 500;

  $(document).ready(function () {
    initDOM();
    bindingEvent();
  });

  /*----------------------------함수선언부----------------------------*/

  //DOM 초기화
  function initDOM() {
    $headerWrap = $(".headerWrap");
    $gnb = $("#gnb");
    $gnb_li = $gnb.children("li");
    $gnb_ul = $gnb.find("ul");
  }

  //이벤트 바인딩
  function bindingEvent() {
    ex();
  }

  //EX
  function ex() {
    console.log("123");
  }


});

