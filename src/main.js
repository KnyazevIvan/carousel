import {dragStart} from './touch'
import {dragAction} from './touch'
import {dragEnd} from './touch'
import {totalImgAmount } from "./setimg";
import { fetch } from './fetch';
import './style/style.css'

export const carousel = document.querySelector('.carousel');
const leftBtn = document.querySelector('.fa-arrow-left');
const rightBtn = document.querySelector('.fa-arrow-right');

export let index = 1;
export let size = carousel.clientWidth;
carousel.style.transform = `translatex(${index * size * -1}px)`;


fetch()

leftBtn.addEventListener('click', leftSlide);
rightBtn.addEventListener('click', rightSlide);
carousel.addEventListener('touchstart', dragStart)
carousel.addEventListener('touchmove', dragAction);
carousel.addEventListener('touchend', dragEnd)
carousel.onmousedown = dragStart;



carousel.addEventListener('transitionend', function () {
  if (index === 0) {
    index = totalImgAmount - 2;
    carousel.style.transform = `translatex(${-size * index}px)`;
  }
  if (index === totalImgAmount - 1) {
    carousel.style.transition = 'none';
    index = 1;
    carousel.style.transform = `translatex(${-size * index}px)`;
  }
})


export function leftSlide() {
  if (index <= 0) {
    return;
  }
  index--;
  carousel.style.transform = `translatex(${-size * index}px)`;
  carousel.style.transition = 'transform 0.4s ease';
}

export function rightSlide() {
  if (index >= totalImgAmount - 1) {
    return;
  }
  carousel.style.transition = 'transform 0.4s ease';
  index++;
  carousel.style.transform = `translatex(${-size * index}px)`;

}





