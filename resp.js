var open = document.getElementById('hamburger');
var changeIcon = true;

open.addEventListener("click", function(){

    var overlay = document.querySelector('.overlay');
    var nav = document.querySelector('nav');
    var icon = document.querySelector('.menu-toggle i');

    overlay.classList.toggle("menu-open");
    nav.classList.toggle("menu-open");
    
    if (changeIcon) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");

        changeIcon = false;
    } 
    else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
        changeIcon = true;
    }
});

 // progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/
// Graphic Design Progbar
var bar = new ProgressBar.Circle(desprog, {
    color: '#fefefe',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 8,
    easing: 'easeInOut',
    duration: 1400,
    text: {
      autoStyleContainer: false
    },
    from: { color: '#aaa', width: 2 },
    to: { color: '#fefefe', width: 4 },
    // Set default step function for all animate calls
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);
  
      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value + '%');
      }
  
    }
  });
  
  
  bar.animate(0.5);  // Number from 0.0 to 1.0

  // Photography Progbar
var bar = new ProgressBar.Circle(photprog, {
  color: '#fefefe',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 8,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#aaa', width: 2 },
  to: { color: '#fefefe', width: 4 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value + '%');
    }

  }
});

bar.animate(0.4);  // Number from 0.0 to 1.0

// Web Design Progbar
var bar = new ProgressBar.Circle(webprog, {
  color: '#fefefe',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 8,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#aaa', width: 2 },
  to: { color: '#fefefe', width: 4 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value + '%');
    }

  }
});

bar.animate(0.8);  // Number from 0.0 to 1.0

// Mobile Progbar
var bar = new ProgressBar.Circle(mobprog, {
  color: '#fefefe',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 8,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#aaa', width: 2 },
  to: { color: '#fefefe', width: 4 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value + '%');
    }

  }
});

bar.animate(0.4);  // Number from 0.0 to 1.0
