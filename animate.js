
(function() {
  var elementsFadeIn;
  var elementsSlideLeft;
  var elementsSlideRight;
  var elementsSlideBottom;
  var windowHeight;

  function init() {
    elementsFadeIn = document.querySelectorAll('.hidden' && '.fade-in');
    elementsSlideLeft = document.querySelectorAll('.hidden' && '.slide-in-left');
    elementsSlideRight = document.querySelectorAll('.hidden' && '.slide-in-right');
    elementsSlideBottom = document.querySelectorAll('.hidden' && '.slide-in-bottom');
    windowHeight = window.innerHeight;
  }

  function checkPosition() {
    for (var i = 0; i < elementsFadeIn.length; i++) {
      var elementFadeIn = elementsFadeIn[i];
      var positionFromTopFadeIn = elementsFadeIn[i].getBoundingClientRect().top;

      if (positionFromTopFadeIn - windowHeight <= 0) {
        elementFadeIn.classList.add('fading-in');
        elementFadeIn.classList.remove('hidden');
      }
    }

    for (var l = 0; l < elementsSlideLeft.length; l++) {
      var elementSlideLeft = elementsSlideLeft[l];
      var positionFromTopSlideLeft = elementsSlideLeft[l].getBoundingClientRect().top;

      if (positionFromTopSlideLeft - windowHeight <= 0) {
        elementSlideLeft.classList.add('slider-l');
        elementSlideLeft.classList.remove('hidden');
      }
    }

    for (var r = 0; r < elementsSlideRight.length; r++) {
      var elementSlideRight = elementsSlideRight[r];
      var positionFromTop = elementsSlideRight[r].getBoundingClientRect().top;

      if (positionFromTop - windowHeight <= 0) {
        elementSlideRight.classList.add('slider-r');
        elementSlideRight.classList.remove('hidden');

      }
    }

    for (var b = 0; b < elementsSlideBottom.length; b++) {
      var elementSlideBottom = elementsSlideBottom[b];
      var positionFromTopSlideBottom = elementsSlideBottom[b].getBoundingClientRect().top;

      if (positionFromTopSlideBottom - windowHeight <= 0) {
        elementSlideBottom.classList.add('slider-b');
        elementSlideBottom.classList.remove('hidden');
      }
    }
  }

  window.addEventListener('scroll', checkPosition);
  window.addEventListener('resize', init);

  init();
  checkPosition();
})();



