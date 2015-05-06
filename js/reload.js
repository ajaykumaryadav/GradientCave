/**
 * GradientCave by Ajay & Rahul.
 *  - This is a chrome extension.
 */

var gradientCave = (function(){

  'use strict';

  // Vars
  var reloadButton  = document.querySelector( '.reload' );
  var reloadSvg     = document.querySelector( 'svg' );
  var reloadEnabled = true;
  var rotation      = 0;
  var gradient = [
    {
      "gradients": [
        "#B3CC57","#ECF081","#FFBE40","#EF746F","#AB3E5B"
      ]
    },
    {
      "gradients": [
        "#F4D07D","#49E9DF","#B02FD9","#144C9B","#03505F"
      ]
    },
    {
      "gradients": [
        "#344D75","#F9FBFD","#9DAAB3","#656667","#F2641D"
      ]
    },
    {
      "gradients": [
        "#F3CA0C","#D6B20B","#9B820C","#0C9B84","#3281BA"
      ]
    }
  ]
  var gradientActive = 0;

  // Events
  reloadButton.addEventListener('click', function() { reloadClick() });

  function reloadClick() {

    reloadEnabled = false;
    rotation -= 360;

    reloadSvg.style.webkitTransform = 'translateZ(0px) rotateZ( ' + rotation + 'deg )';
    reloadSvg.style.MozTransform  = 'translateZ(0px) rotateZ( ' + rotation + 'deg )';
    reloadSvg.style.transform  = 'translateZ(0px) rotateZ( ' + rotation + 'deg )';

    gradientActive = (Math.floor(Math.random() * (gradient.length - 1 + 0)) + 0);

    var block = document.querySelectorAll( '.gradient' );

    for(var i = 0; i < block.length; i++ ) {
        block[i].style.background = gradient[gradientActive].gradients[i]
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