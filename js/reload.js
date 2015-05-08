/**
 * GradientCave by Ajay & Rahul.
 *  - GradientCave is the extention where you will get css for any gradient and make your website/app more interesting",
 *  - This is a chrome extension.
 */

var gradientCave = (function(){

  'use strict';

  // Vars
  var reloadButton  = document.querySelector( '.reload' );
  var reloadSvg     = document.querySelector( 'svg' );
  var reloadEnabled = true;
  var rotation      = 0;

  var gradientActive = 0;

  // Events
  reloadButton.addEventListener('click', function() { reloadClick() });

  function reloadClick() {

    reloadEnabled = false;
    rotation -= 360;

    reloadSvg.style.webkitTransform = 'translateZ(0px) rotateZ( ' + rotation + 'deg )';
    reloadSvg.style.MozTransform  = 'translateZ(0px) rotateZ( ' + rotation + 'deg )';
    reloadSvg.style.transform  = 'translateZ(0px) rotateZ( ' + rotation + 'deg )';

    // gradient.gradients[0].colorBlock[0].block[0]
    gradientActive = (Math.floor(Math.random() * (gradient.gradients[0].length - 1 + 0)) + 0);
    if(gradientActive == NaN) {
      gradientActive = 0;
    }
    var block = document.querySelectorAll( '.gradient' );

    for(var i = 0; i < block.length; i++ ) {
      for(var j = 0; j < gradient.gradients[0].colorBlock[i].block.length; j++ ) {
        var gradientBlck = gradient.gradients[0].colorBlock[i]
        // block[i].style.background = gradient.gradients[0].colorBlock[i].block[j].code;
        block[i].style.background = gradient.gradients[0].colorBlock[i].block[0].code;
        block[i].style.background = "-moz-linear-gradient(left,  "+gradientBlck.block[0].code+" "+gradientBlck.block[0].point+", "+gradientBlck.block[1].code+" "+gradientBlck.block[1].point+", "+gradientBlck.block[2].code+" "+gradientBlck.block[2].point+")";
        block[i].style.background = "-webkit-gradient(linear, left top, right top, color-stop("+gradientBlck.block[0].point+","+gradientBlck.block[0].code+"), color-stop("+gradientBlck.block[1].point+","+gradientBlck.block[1].code+"), color-stop("+gradientBlck.block[2].point+","+gradientBlck.block[2].code+"))";
        block[i].style.background = "-webkit-linear-gradient(left,  "+gradientBlck.block[0].code+" "+gradientBlck.block[0].point+", "+gradientBlck.block[1].code+" "+gradientBlck.block[1].point+", "+gradientBlck.block[2].code+" "+gradientBlck.block[2].point+")";
        block[i].style.background = "-ms-linear-gradient(left,  "+gradientBlck.block[0].code+" "+gradientBlck.block[0].point+", "+gradientBlck.block[1].code+" "+gradientBlck.block[1].point+", "+gradientBlck.block[2].code+" "+gradientBlck.block[2].point+")";
        block[i].style.background = "linear-gradient(to right,  "+gradientBlck.block[0].code+" "+gradientBlck.block[0].point+", "+gradientBlck.block[1].code+" "+gradientBlck.block[1].point+", "+gradientBlck.block[2].code+" "+gradientBlck.block[2].point+")";
      }
    }

  }

  function extend( target, source ) {

    for ( var key in source ) {
        if ( !( key in target ) ) {
            target[ key ] = source[ key ];
        }
    }

    return target;
  }

  // Show button.
  setTimeout(function() {
    reloadButton.classList.add('active');
  }, 1);

  function main() {
    reloadClick();
  }

  return extend( main, {});
})();

gradientCave();
