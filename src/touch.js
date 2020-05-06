import { carousel } from "./main";

var clientX, shift;

export function dragAction(e) {
  
  carousel.style.transition = 'none';


    
    if (e.type == 'touchmove') {
      clientX = e.touches[0].clientX - shift;
    } else {
      clientX = e.clientX-shift;
    }

  carousel.style.transform = `translatex(${-size * index + clientX}px)`;

  console.log('clientx:', clientX, 'translateX', -size * index + clientX)
}


export function dragStart(e){
  e = e || window.event;
  e.preventDefault();
  
  if (e.type == 'touchstart') {
    shift = e.touches[0].clientX;
  }
  else {
    shift = e.clientX;
    document.onmouseup = dragEnd;
    document.onmousemove = dragAction;
  }
}
export function dragEnd(e) {
  e = e || window.event;

  if (clientX < -60) {
    rightSlide();
  }
  if (clientX > 60) {
    leftSlide();
  }
  else {
    carousel.style.transform = `translatex(${-size * index}px)`;
    carousel.style.transition = 'transform 0.4s ease';
  }

  document.onmouseup = null;
  document.onmousemove = null;
}

