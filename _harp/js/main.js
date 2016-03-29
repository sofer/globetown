;'use strict';

// slide show
(function () {

  if (window.location.href.replace(/^(?:\/\/|[^\/]+)*\//, '/') !== '/') return;

  var imgArray = [
    'https://pbs.twimg.com/media/CeLHec9WIAQgODI.jpg:large',
    'https://scontent-lhr3-1.xx.fbcdn.net/hphotos-xft1/t31.0-8/11942155_1634466296771167_5095284313698111450_o.jpg',
    'https://pbs.twimg.com/media/CdgKuWCWAAE1MQY.jpg:large',
    'https://scontent-lhr3-1.xx.fbcdn.net/hphotos-xtl1/t31.0-8/11921889_1634467166771080_4244732857284336976_o.jpg',
    'https://pbs.twimg.com/media/CblMYmcXIAA_JPW.jpg:large'
  ];

  var curIndex = 0;
  var imgDuration = 4500;

  function slideShow () {

    document.getElementById('slider').className += 'fadeOut';

    setTimeout(function () {

      document.getElementById('slider').style.backgroundImage = "url('"+imgArray[curIndex]+"')";
      document.getElementById('slider').className = '';
    },1000);

    curIndex++;

    if (curIndex == imgArray.length) {curIndex = 0;}

    setTimeout(slideShow,imgDuration);
  }

  slideShow();
}());

// parallax
// (function () {

//   var last_known_scroll_position = 0;
//   var ticking = false;
//   var nav = document.querySelectorAll("#navigation");

//   if (!nav) return;

//   function parallax_effect (position) {

//     console.log('position',position);

//     if (position >= 200) {
//       nav.style.position = 'fixed';
//       nav.style.right = breakpoints.initial.right;
//       nav.style.top = breakpoints.initial.top;
//     }

//   };

//   window.addEventListener('scroll', function(e) {
//     last_known_scroll_position = window.scrollY;
//     if (!ticking) {
//       window.requestAnimationFrame(function () {
//         parallax_effect(last_known_scroll_position);
//         ticking = false;
//       });
//     }
//     ticking = true;
//   });
// }());
