function scroll () {
  let element = document.getElementById('scroll-section');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY >= 2900) {
      element.classList.add("is-active");
    }
  });
}

scroll();