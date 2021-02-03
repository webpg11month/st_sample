'use strict';

$(function(){
    $(function() {
      $(".switch-btn").on('click', function() {
      $(".header-fadeImg").fadeToggle("fast",alertFunc);
    });
    function alertFunc(){
        if ($(this).css('display') === 'block') {
          // $(".switch-btn").html("<img id='fadeInOutImg' src='search.png' alt='玉ねぎ'>");
          $(".switch-btn").html("<p id='fadeInOutImg'>×</p>");
        }else{
          //$(".switch-btn").html("<img id='fadeInOutImg' src='search1.png' alt='検索'>");
          $(".switch-btn").html("<p id='fadeInOutImg'>〇</p>");
        }
      };
    });   
  });