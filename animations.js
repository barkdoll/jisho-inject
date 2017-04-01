function buttonGlow(btn) {

    this.btn = btn;
    // Sets this to a variable that the anonymous function
    // inside of setTimeout() can access.

    // Adds the class and animates the button glowing.
    btn.classList.add('animate-glow');

    // After the exact duration of the animation,
    // the class with the animation is removed and can be re-executed.
    setTimeout(function() { btn.classList.remove('animate-glow'); }, 150);
}


function buttonFlip(btn) {
  // Sets this to a variable that the anonymous function
  // inside of setTimeout() can access.
  this.btn = btn;
  // Adds the class and animates the button flipping.
  btn.classList.add('animate-flip');

  // After the exact duration of the animation,
  // the class with the animation is removed and can be re-executed.
  setTimeout(function() { btn.classList.remove('animate-flip'); }, 500);
}

function buttonSpin(btn) {
  // Sets this to a variable that the anonymous function
  // inside of setTimeout() can access.
  this.btn = btn;
  // Adds the class and animates the button flipping.
  btn.classList.add('animate-spin');

  // After the exact duration of the animation,
  // the class with the animation is removed and can be re-executed.
  setTimeout(function() { btn.classList.remove('animate-spin'); }, 1000);
}



// // Puts all glow-btn divs into an array
