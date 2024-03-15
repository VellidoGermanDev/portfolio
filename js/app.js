const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show');
    });
  }
};

showMenu('nav-toggle', 'nav-menu');

const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
  navLink.forEach((n) => n.classList.remove('active'));
  this.classList.add('active');

  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show');
}

navLink.forEach((n) => n.addEventListener('click', linkAction));


/* =============================================================================
    -------------------------------  Progress Bar  ---------------------------------
    ============================================================================= */

    document.addEventListener("DOMContentLoaded", function() {

      var mouseX = 0, mouseY = 0;
      var xp = 0, yp = 0;
    
      document.addEventListener("mousemove", function(e){
        mouseX = e.pageX - 30;
        mouseY = e.pageY - 30;
      });
    
      setInterval(function(){
        xp += ((mouseX - xp)/6);
        yp += ((mouseY - yp)/6);
        document.getElementById("circle").style.left = xp + 'px';
        document.getElementById("circle").style.top = yp + 'px';
      }, 20);
    
    });
    
    
