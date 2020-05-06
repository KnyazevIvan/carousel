import { carousel } from "./main";

export let totalImgAmount = 0;

export function setImgs(state) {

  totalImgAmount = state.length;
  for (let i = 0; i < totalImgAmount; i++) {
    let img = document.createElement('img')
    carousel.appendChild(img).setAttribute('src', state[i].fields.img.fields.file.url);
    carousel.appendChild(img).setAttribute('alt', state[i].fields.name);
  }

}
