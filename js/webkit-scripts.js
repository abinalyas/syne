$(document).ready(function(){
    if (screen.width > 1040) {
        const animatedClassName = "animated";
        const elements = document.querySelectorAll(".btn");
        const elements_span = [];

        elements.forEach((element, index) => {
            let addAnimation = false;
            // On the last element in the page, add a listener to remove
            // ---> animation-class when animation ends
            if (element.classList[1] == "FLASH") {
                g = element;
                element.addEventListener("animationend", e => {
                    element.classList.remove(animatedClassName);
                });
                addAnimation = true;
            }

            // If The span element for this element does not exist in the array, add it.
            if (!elements_span[index])
                elements_span[index] = element.querySelector("span");

            element.addEventListener("mouseover", e => {
                elements_span[index].style.left = e.pageX - element.offsetLeft + "px";
                elements_span[index].style.top = e.pageY - element.offsetTop + "px";

                // Add an animation-class to animate via CSS.
                if (addAnimation) element.classList.add(animatedClassName);
            });

            element.addEventListener("mouseout", e => {
                elements_span[index].style.left = e.pageX - element.offsetLeft + "px";
                elements_span[index].style.top = e.pageY - element.offsetTop + "px";
            });
        });
    } 
    
    
    
    
    
});

if (screen.width > 1040) {
	setTimeout(() => document.body.classList.add('render'), 60);
	const navdemos = Array.from(document.querySelectorAll('nav.demos > .demo'));
	const total = navdemos.length;
	const current = navdemos.findIndex(el => el.classList.contains('demo--current'));
	const navigate = (linkEl) => {
		document.body.classList.remove('render');
		document.body.addEventListener('transitionend', () => window.location = linkEl.href);
	};
	navdemos.forEach(link => link.addEventListener('click', (ev) => {
		ev.preventDefault();
		navigate(ev.target);
	}));
	document.addEventListener('keydown', (ev) => {
		const keyCode = ev.keyCode || ev.which;
		let linkEl;
		if ( keyCode === 37 ) {
			linkEl = current > 0 ? navdemos[current-1] : navdemos[total-1];
		}
		else if ( keyCode === 39 ) {
			linkEl = current < total-1 ? navdemos[current+1] : navdemos[0];
		}
		else {
			return false;
		}
		navigate(linkEl);
	});
    
    class ShapeOverlays {
  constructor(elm) {
    this.elm = elm;
    this.path = elm.querySelectorAll('path');
    this.numPoints = 10;
    this.duration = 900;
    this.delayPointsArray = [];
    this.delayPointsMax = 300;
    this.delayPerPath = 250;
    this.timeStart = Date.now();
    this.isOpened = false;
    this.isAnimating = false;
  }
  toggle() {
    this.isAnimating = true;
    for (var i = 0; i < this.numPoints; i++) {
      this.delayPointsArray[i] = Math.random() * this.delayPointsMax;
    }
    if (this.isOpened === false) {
      this.open();
    } else {
      this.close();
    }
  }
  open() {
    this.isOpened = true;
    this.elm.classList.add('is-opened');
    this.timeStart = Date.now();
    this.renderLoop();
      body.classList.add('locked');
      body.classList.add('body-margin');
  }
  close() {
    this.isOpened = false;
    this.elm.classList.remove('is-opened');
    this.timeStart = Date.now();
    this.renderLoop2();
      body.classList.remove('locked');
      body.classList.remove('body-margin');
  }
  updatePath(time) {
    const points = [];
    for (var i = 0; i < this.numPoints; i++) {
      points[i] = ease.cubicInOut(Math.min(Math.max(time - this.delayPointsArray[i], 0) / this.duration, 1)) * 100
    }

    let str = '';
    str += (this.isOpened) ? `M 0 0 V ${points[0]} ` : `M 0 ${points[0]} `;
    for (var i = 0; i < this.numPoints - 1; i++) {
      const p = (i + 1) / (this.numPoints - 1) * 100;
      const cp = p - (1 / (this.numPoints - 1) * 100) / 2;
      str += `C ${cp} ${points[i]} ${cp} ${points[i + 1]} ${p} ${points[i + 1]} `;
    }
    str += (this.isOpened) ? `V 0 H 0` : `V 100 H 0`;
    return str;
  }
    updatePath2(time) {
    const points = [];
    for (var i = 0; i < this.numPoints; i++) {
      points[i] = (1 - ease.cubicInOut(Math.min(Math.max(time - this.delayPointsArray[i], 0) / this.duration, 1))) * 100
    }

    let str = '';
    str += (this.isOpened) ? `M 0 0 V ${points[0]}` : `M 0 ${points[0]}`;
    for (var i = 0; i < this.numPoints - 1; i++) {
      const p = (i + 1) / (this.numPoints - 1) * 100;
      const cp = p - (1 / (this.numPoints - 1) * 100) / 2;
      str += `C ${cp} ${points[i]} ${cp} ${points[i + 1]} ${p} ${points[i + 1]} `;
    }
    str += (this.isOpened) ? `V 100 H 0` : `V 0 H 0`;
    return str;
  }
  render() {
    if (this.isOpened) {
      for (var i = 0; i < this.path.length; i++) {
        this.path[i].setAttribute('d', this.updatePath(Date.now() - (this.timeStart + this.delayPerPath * i)));
      }
    } else {
      for (var i = 0; i < this.path.length; i++) {
        this.path[i].setAttribute('d', this.updatePath(Date.now() - (this.timeStart + this.delayPerPath * (this.path.length - i - 1))));
      }
    }
  }
  renderLoop() {
    this.render();
    if (Date.now() - this.timeStart < this.duration + this.delayPerPath * (this.path.length - 1) + this.delayPointsMax) {
      requestAnimationFrame(() => {
        this.renderLoop();
      });
    }
    else {
      this.isAnimating = false;
    }
  }
    
    render2() {
    if (this.isOpened) {
      for (var i = 0; i < this.path.length; i++) {
        this.path[i].setAttribute('d', this.updatePath2(Date.now() - (this.timeStart + this.delayPerPath * i)));
      }
    } else {
      for (var i = 0; i < this.path.length; i++) {
        this.path[i].setAttribute('d', this.updatePath2(Date.now() - (this.timeStart + this.delayPerPath * (this.path.length - i - 1))));
      }
    }
  }
  renderLoop2() {
    this.render2();
    if (Date.now() - this.timeStart < this.duration + this.delayPerPath * (this.path.length - 1) + this.delayPointsMax) {
      requestAnimationFrame(() => {
        this.renderLoop2();
      });
    }
    else {
      this.isAnimating = false;
    }
  }
}

//function fadeIn(el, time) {
//  el.style.opacity = 0;
//
//  var last = +new Date();
//  var tick = function() {
//    el.style.opacity = +el.style.opacity + (new Date() - last) / time;
//    last = +new Date();
//
//    if (+el.style.opacity < 1) {
//      (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 10);
//    }
//  };
//
//  tick();
//}


var body = document.querySelector('body');
let burger = document.querySelector('.hum_btn');

(function() {
  const elmHamburger = document.querySelector('.hamburger');
  const menu = document.querySelector('.menu');
  const gNavItems = document.querySelectorAll('.global-menu__item');
  const elmOverlay = document.querySelector('.shape-overlays');
  const overlay = new ShapeOverlays(elmOverlay);

  elmHamburger.addEventListener('click', () => {
    if (overlay.isAnimating) {
      return false;
    }
    overlay.toggle();
    if (overlay.isOpened === true) {
      elmHamburger.classList.add('is-opened-navi');
        burger.classList.toggle('active');
        menu.classList.add('opened');
        setTimeout(function () {
                menu.style.transition="opacity 1s";
menu.style.opacity="1";
            }, 900);
        
      for (var i = 0; i < gNavItems.length; i++) {
        gNavItems[i].classList.add('is-opened');
        
      }
    } else {
      elmHamburger.classList.remove('is-opened-navi');
        burger.classList.toggle('active');
        menu.style.transition="opacity 1s";
        menu.style.opacity="0";
         
        
      for (var i = 0; i < gNavItems.length; i++) {
        gNavItems[i].classList.remove('is-opened');
         
      }
        
        setTimeout(function () {
                menu.classList.remove('opened');
            }, 900);
    }
  });
}());
}




