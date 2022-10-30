$(function () {

  //ハンバーガーメニュー
  //--------------------------------------------
  $('.hamburger').on('click', function () { //.hamburgerをクリックすると
    $('.hamburger').toggleClass('close'); //.hamburgerにcloseクラスを付与(ボタンのアニメーション)
    $('.header-nav').toggleClass('fade'); //.header-navにfadeクラスを付与
  });


  //swiper
  //--------------------------------------------
  const swiper = new Swiper('.swiper', {

    effect: 'fade', // フェードモードにする（デフォルトは 'slide'）
    fadeEffect: {
      crossFade: true, // クロスフェードを有効にする（フェードモードの場合 true 推奨）
    },

    // Optional parameters
    loop: true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: 'true',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


  //ページトップボタンがふわっと出現
  //--------------------------------------------
  var $pageTop = $('.page-top');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $pageTop.fadeIn();
    } else {
      $pageTop.fadeOut();
    }
  });


  //ページトップへ戻る
  //--------------------------------------------
  $('.page-top').click(function () {
    $('body,html').animate({
      scrollTop: 0 //ページトップまでスクロール
    }, 500); //ページトップスクロールの速さ。数字が大きいほど遅くなる
    return false; //リンク自体の無効化
  });


  //スクロールするとヘッダーの背景色が追加
  //--------------------------------------------
  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $('.header').addClass('header--active');
    } else {
      $('.header').removeClass('header--active');
    }
  });


  //各セクションにスムーススクロール
  //--------------------------------------------

  // ナビゲーションをクリック
  $("a[href^='#']:not([href='#'])").click(function () {
    var elmHash = $(this).attr('href'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
    var pos = $(elmHash).offset().top; //idの上部の距離を取得
    pos -= 50;
    $('body,html').animate({
      scrollTop: pos
    }, 500); //取得した位置にスクロール。
    return false;
  });

  // ハンバーガメニュー内のリンクをクリックすると、画面が切り替わり、リンク場所に飛ぶ
  //--------------------------------------------

  $('.header-nav__link').on('click', function () { //.header-nav__linkをクリックすると
    $('.hamburger').toggleClass('close'); //.hamburgerにcloseクラスを付与(ボタンのアニメーション)
    $('.header-nav').toggleClass('fade'); //.header-navにfadeクラスを付与
  });

   //フェードイン(ふわっと)表示
  //--------------------------------------------
  $(window).scroll(function () {
    $(".fadein").each(function () {
      // 要素の位置を取得 
      var elemPos = $(this).offset().top;
      // スクロール位置を取得
      var scroll = $(window).scrollTop();
      // 画面幅を取得（画面の下側に入ったときに動作させるため）
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight + 100) {
        // 要素位置までスクロール出来たときに動作する
        $(this).addClass("fadein-scroll");
      }
    });
  });
  jQuery(window).scroll();

});