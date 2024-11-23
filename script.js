'use strict';
const model = document.querySelector('.modal');
const close = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

const openModul = document.querySelectorAll('.show-modal');

//created a fuction which opens the model item.
const addModel = function () {
  model.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
//Created a funcction which hides the model items.
const hideHidden = function () {
  model.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < openModul.length; i++) {
  openModul[i].addEventListener('click', addModel);
}

close.addEventListener('click', hideHidden);
overlay.addEventListener('click', hideHidden);

document.addEventListener('keydown', function (ev) {
  console.log(ev);
  if (ev.key === 'Escape' && !model.classList.contains('hidden')) {
    hideHidden();
  }
});
