$(function () {

  //풀페이지 실행
  $('#fullpage').fullpage({
    sectionsColor: ['#f7f8f7', '#ffff', '#ffff', '#ffff', '#ffff'],
    anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
    menu: '#menu',
    scrollingSpeed: 1000,
    navigation: true,
    navigationPosition: 'right',
    // navigationTooltips: ['First page', 'Second page', 'Third page', 'Last page']
  });




  //bx slider
  $('.slide-list').bxSlider({
    //a태그 링크 오류 해결
    touchEnabled: (navigator.maxTouchPoints > 0),
  });





});//로딩함수