$(function () {

  var dur = 500;
  var isOpen = true;
  var activeName = "on";
  var sub_height = [];
  var max_height = 0;
  var $headerWrap, $gnb, $gnb_li, $gnb_ul;

  $(document).ready(function () {
    initDOM();
    max_height = gnb_max_height();
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
    $gnb_li.on("mouseenter", function () {
      var $this = $(this);
      openSub($this);
      if (isOpen) {
        createSubPanel();
      }
    });

    $headerWrap.on("mouseleave", function () {
      closeSub();
    });

    $gnb_li.on("mouseleave", function () {
      $(this).children("a").removeClass(activeName);
    });
  }

  //제일 높은값의 gnb ul 값 반환하는 함수
  function gnb_max_height() {
    $gnb_li.each(function (index) {
      var ul_height = $(this).find("ul").height();
      sub_height.push(ul_height);
      max_height = Math.max(max_height, sub_height[index]);
    });
    return max_height;
  }

  //서브패널 동적으로 생성후 열어주는 함수
  function createSubPanel() {
    $subPanel = '<div class="bgSub">';
    $headerWrap.prepend($subPanel);
    $subPanel = $(".bgSub");
    $subPanel.height(max_height);
    $subPanel.stop(true, true).slideDown(dur - 100, function () {
      return isOpen = false;
    });
  }

  //gnb ul 열어주는 함수
  function openSub($this) {
    $gnb_ul.stop(true, true).slideDown(dur);
    $this.children("a").addClass(activeName);
  }

  //gnb_ul 닫고 sub_panel 닫은뒤 제거하는 함수
  function closeSub() {
    $gnb_ul.stop(true, true).slideUp();
    $(".bgSub").stop(true, true).slideUp(dur, function () {
      $(this).remove();
      return isOpen = true;
    });
  }


})();