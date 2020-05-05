const client = contentful.createClient({
  space: 'n6oa629q9bmv',
  accessToken: 'JXfj8dbTJaTLSgK9qsjhzndxmYy9fYOq5vnWFC7aFXY'
});
const carousel = document.querySelector('.carousel');
const wrapper = document.querySelector('.wrapper');
const leftBtn = document.querySelector('.fa-arrow-left');
const rightBtn = document.querySelector('.fa-arrow-right');
let totalImgAmount = 0;
let index = 1;
let size = carousel.clientWidth;
carousel.style.transform = `translatex(${index * size * -1}px)`;

async function fetch() {
  const entries = await client.getEntries({
    content_type: "hotel"
  })
  let array = entries.items
  array.unshift(entries.items[entries.items.length - 1])
  array.push(entries.items[1])
  console.log(array)
  setImgs(entries.items)
  // let interval = setInterval(() => {
  //   rightSlide();
  // }, 3000);
  // wrapper.addEventListener('mouseenter',function(){
  //   clearInterval(interval)
  // })
  // wrapper.addEventListener('mouseleave',function(){
  //   setTimeout(() => {
  //     interval =  setInterval(() => {
  //       rightSlide();
  //     }, 3000);
  //   }, 100); 
  // })

}



fetch()
function setImgs(state) {
  totalImgAmount = state.length;
  for (i = 0; i < totalImgAmount; i++) {

    let img = document.createElement('img')

    carousel.appendChild(img).setAttribute('src', state[i].fields.img.fields.file.url);
    carousel.appendChild(img).setAttribute('alt', state[i].fields.name);
    if (i != 0)
      carousel.appendChild(img).setAttribute('loading', "lazy");

  }

}


leftBtn.addEventListener('click', leftSlide);
rightBtn.addEventListener('click', rightSlide);

var clientX, clientY, shift;

carousel.addEventListener('touchstart', dragStart)

carousel.addEventListener('touchmove', dragAction);
carousel.addEventListener('touchend', dragEnd)

carousel.onmousedown = dragStart;

function dragStart(e) {
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

function dragAction(e) {
  
  carousel.style.transition = 'none';


    
    if (e.type == 'touchmove') {
      clientX = e.touches[0].clientX - shift;
    } else {
      clientX = e.clientX-shift;
    }

  carousel.style.transform = `translatex(${-size * index + clientX}px)`;
  
  console.log('clientx:', clientX, 'translateX', -size * index + clientX)
}
function dragEnd(e) {
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




carousel.addEventListener('transitionend', function () {
  if (index === 0) {

    carousel.style.transition = 'none';
    index = totalImgAmount - 2;
    carousel.style.transform = `translatex(${-size * index}px)`;
  }
  if (index === totalImgAmount - 1) {
    carousel.style.transition = 'none';
    index = 1;
    carousel.style.transform = `translatex(${-size * index}px)`;
  }
})
function leftSlide() {
  if (index <= 0) {
    return;
  }
  index--;
  carousel.style.transform = `translatex(${-size * index}px)`;
  carousel.style.transition = 'transform 0.4s ease';
}

function rightSlide() {

  if (index >= totalImgAmount - 1) {
    return;
  }
  carousel.style.transition = 'transform 0.4s ease';
  index++;
  carousel.style.transform = `translatex(${-size * index}px)`;

}

