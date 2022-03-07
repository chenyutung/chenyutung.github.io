const rainbowEles = document.querySelectorAll('.rainbow-text');

rainbowEles.forEach(function(el) {
  var innerEl = el.innerHTML;
  var newInnerEl = '';
  var eReaderText = '<span class="e-reader-only">' + innerEl + '</span>';
  console.log(innerEl);
  
  innerEl.split("");
  var i = 0, length = innerEl.length;
  for (i; i < length; i++) {
      var colourNum = Math.floor(Math.random() * 5) + 1;
      newInnerEl += '<span class="rainbow-letter colour-' + colourNum + '">' + innerEl[i] + '</span>';
  }
  
  newInnerEl = eReaderText + '<span aria-hidden="true">' + newInnerEl + '</span>';
  console.log(newInnerEl);
  el.innerHTML = newInnerEl;
});