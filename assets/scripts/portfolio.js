//counter  js

var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
    loopCount: Infinity,
  });


  let copyright = document.getElementsByClassName("copy");
  let year = new Date().getFullYear();
  for (let i = 0; i < copyright.length; i++) {
    copyright[i].innerHTML = `Copyright © ${year} All rights reserved by Amit Shaw`;
  }

