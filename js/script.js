$(function(){
    //top 언어
    $(".top_left").mouseenter(function(){
        $(this).find(".kr_sub").stop().slideDown();
    });
    $(".top_left").mouseleave(function(){
        $(this).find(".kr_sub").stop().slideUp();
    });

    //header 색 변경
    var jbOffset = $( '#header' ).offset();
        /*선택자는 본인 구조에 맞게 수정*/
        $( window ).scroll( function() {
          if ( $( document ).scrollTop() > 300) {//여기 지정된 길이 이후부터 적용됩니다
            $( '#header' ).addClass("header_on");
            /*선택자는 본인 구조에 맞게 수정, on클래스 만들어서 변경 원하는 스타일 주세요*/
          }
          else {
            $( '#header' ).removeClass("header_on");
            /*선택자는 본인 구조에 맞게 수정, on클래스 만들어서 변경 원하는 스타일 주세요*/
          }
        });


    //gnb
    $(".gnb>li").mouseenter(function(){
        $(this).find(".sub").stop().slideDown();
        $(".sub_bg").stop().show();
        $(".gnb>li>a").css({"color":"#F5F6F8"});
    });
    $(".gnb>li").mouseleave(function(){
        $(this).find(".sub").stop().slideUp();
        $(".sub_bg").stop().hide(); 
        $(".gnb>li>a").css({"color":"#3660E6"});      
    });
    //hamurger
    $("#slide-open").click(function () {
        if ($("#burgur").hasClass("on")) {
          $("#burgur").removeClass("on");
          $("#slide").removeClass("on");
        } else {
          $("#burgur").addClass("on");
          $("#slide").addClass("on");
          $(".sub_slide").hide();
        }
      });
      $("#slide ul li .sub_slide a").click(function () {
        if ($("#burgur").hasClass("on")) {
          $("#burgur").removeClass("on");
          $("#slide").removeClass("on");
          
        } else {
          $("#burgur").addClass("on");
          $("#slide").addClass("on");
        }
      });
      $(".slide>ul>li").click(function(){
        $(".sub_slide").hide();
        $(this).find(".sub_slide").slideToggle();
      });

      //faci tab+bg변경
      $(".faci_text li").hide();
      $(".faci_text li:first").show();
        //click 이벤트
      $(".tab").children().click(function(){

        $(".faci_text li").hide();

        var activeTab = $(this).find("a").attr("href");
        $(activeTab).fadeIn();

        $("#faci").removeClass(function (index, className) {
          return (className.match(/(^|\s)faci_bg\S+/g) || []).join(' ');
      });

      // Add new background class
      var tabIndex = $(this).index() + 1;
      $("#faci").addClass("faci_bg0" + tabIndex);

      return false;
  });
  //package반응형
  if (matchMedia("screen and (max-width: 1169px)").matches) {
    $(".package_con li").click(function(){
        $(".package_con li").removeClass("click");
        $(this).addClass("click");
    });
  }
});