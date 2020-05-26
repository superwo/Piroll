"use strict";

function testWebP(callback) {
  var webP = new Image();

  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };

  webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector('body').classList.add('webp');
  }
});
var bars = document.querySelectorAll('.skills__bar');
bars.forEach(function (bar) {
  var value = bar.dataset.value + '%';
  var span = document.createElement('span');
  span.innerText = value;
  span.classList.add('skills__bar-label');
  var label = bar.parentElement.querySelector('.skills__label');
  label.appendChild(span);
  bar.style.setProperty('--width', value);
});
;
var links = document.querySelectorAll('.works__item-link');
links.forEach(function (link) {
  link.addEventListener('click', showImg);
});

function showImg(e) {
  e.preventDefault();
  var source = e.currentTarget.href;
  document.querySelector('body').classList.add('block');
  var modal = document.createElement('div');
  modal.classList.add('modal');
  modal.addEventListener('click', function () {
    return closeModal(modal);
  });
  var close = document.createElement('div');
  close.textContent = 'x';
  close.classList.add('modal__close');
  close.addEventListener('click', function () {
    return closeModal(modal);
  });
  modal.appendChild(close);
  var img = document.createElement('img');
  img.classList.add('modal__img');
  img.src = source;
  modal.appendChild(img);
  document.querySelector('.wrapper').appendChild(modal);
}

function closeModal(el) {
  el.remove();
  document.querySelector('body').classList.remove('block');
}

;
var video = document.getElementById('video');
var videoBtn = document.getElementById('videoBtn');
var play = false;

function playVideo() {
  if (!play) {
    video.play();
    videoBtn.classList.add('isPlaying');
  } else {
    video.pause();
    videoBtn.classList.remove('isPlaying');
  }

  play = !play;
}

video.addEventListener('ended', function () {
  play = false;
  videoBtn.classList.remove('isPlaying');
});
videoBtn.addEventListener('click', playVideo);
; // Carousel

var mySiema = new Siema({
  onChange: function onChange() {
    var btn = carouselBtns.querySelector("div:nth-child(".concat(this.currentSlide + 1, ")"));
    changeCurrentClass(btn);
  }
});
var carouselWrapper = document.querySelector('.rels__carousel-wrapper');
var carouselItems = document.querySelectorAll('.rels__carousel-item');
var carouselBtns = document.createElement('div');
carouselBtns.classList.add('rels__carousel-btns');
carouselItems.forEach(function (item, ind) {
  var btn = document.createElement('div');

  if (ind === mySiema.currentSlide) {
    btn.classList.add('current');
  }

  btn.addEventListener('click', function () {
    mySiema.goTo(ind);
    changeCurrentClass(this);
  });
  carouselBtns.appendChild(btn);
});

function changeCurrentClass(el) {
  carouselBtns.querySelectorAll('div').forEach(function (it) {
    it.classList.remove('current');
  });
  el.classList.add('current');
}

carouselWrapper.appendChild(carouselBtns);
;

var sandwichToggle = function sandwichToggle() {
  // Выбираем элементы, которые нам нужны. В примере мы ищем элементы с классом "sandwich"
  var sandwichElements = document.querySelectorAll('.sandwich');
  var menu = document.querySelector('.main-menu'); // Проходим циклом по всем эдементам и на каждый элемент вешаем слушателя, который по клику будет переключать класс

  sandwichElements.forEach(function (item) {
    item.addEventListener('click', showSandwichTarget);
  });

  function showSandwichTarget() {
    var targetId = this.getAttribute('data-target-id'),
        targetClassToggle = this.getAttribute('data-target-class-toggle');
    this.classList.toggle('is-active');
    menu.classList.toggle('active');

    if (targetId && targetClassToggle) {
      document.getElementById(targetId).classList.toggle(targetClassToggle);
    }
  }
};

sandwichToggle();
;