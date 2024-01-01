
function erase() {
  if (searching.value === searching.value) {
    searching.value = '';
    xbutton.classList.add('x-button-two')
  }
}


const asideElement = document.querySelector('aside');
const aside2Element = document.querySelector('.aside2')
function change() {

  if (!asideElement.classList.contains('display')) {
    asideElement.classList.add('display');
    if (asideElement.classList.contains('display')) {
      aside2Element.classList.add('display-two');
      return;
    }
    console.log(asideElement);
    return;
  } else {
    asideElement.classList.remove('display');
    if (!asideElement.classList.contains('display')) {
      aside2Element.classList.remove('display-two');
      return;
    }
    console.log(asideElement);

  }


};
let searching = document.querySelector('.search-input')
let xbutton = document.querySelector('.x-button');
function check() {
  if (searching.value === searching.value) {
    xbutton.classList.remove('x-button-two');

  };

  if (searching.value === '') {
    xbutton.classList.add('x-button-two');
  }
  console.log(searching.value);

}
const upload = document.querySelector('.upload');
const cameraOne = document.querySelector('.camera-svg');
const cameraTwo = document.querySelector('.camera-two')
function fillChange() {

  if (!cameraTwo.classList.contains('camera-two-style')) {
    cameraOne.classList.add('camera-fill');
    cameraTwo.classList.remove('camera-two');
    cameraTwo.classList.add('camera-two-style');
    upload.classList.add('upload-two');
    return;

  } else if (cameraTwo.classList.contains('camera-two-style')) {
    upload.classList.remove('upload-two');
    cameraTwo.classList.add('camera-two');
    cameraOne.classList.remove('camera-fill');
    cameraTwo.classList.remove('camera-two-style');
    return;
  };

}

document.querySelector('.show-more')
  .addEventListener('click', () => { removeOverflow(); });

const text = document.querySelector('.show-more');
const overflowShorts = document.querySelector('.overflow-shorts');
function removeOverflow() {
  if (overflowShorts.classList.contains('overflow-shorts')) {
    overflowShorts.classList.remove('overflow-shorts');
    text.innerHTML = 'Show less';
    return;
  } else if (!overflowShorts.classList.contains('overflow-shorts')) {
    overflowShorts.classList.add('overflow-shorts');
    text.innerHTML = 'Show more';

  }

}




const arrowLeft = document.querySelector('.display-arrow-left');
const arrowRight = document.querySelector('.display-arrow-right');
const push = document.querySelector('.push');
const scrollx = document.querySelector('.category-section');
document.querySelector('.arrow-right')
  .addEventListener('click', () => {
    scrollx.scrollLeft += 700;
    // scrollx.scrollwidth=2087;

    if (scrollx.scrollWidth > 20) {
      arrowLeft.classList.remove('display-arrow-left')
    }

    if (scrollx.scrollWidth = 2106) {
      push.classList.add('displayx');
    }

  })

if (arrowRight.classList.contains('display-arrow-right')) {
  arrowRight.classList.remove('display-arrow-right')
} else {

}


document.querySelector('.arrow-left')
  .addEventListener('click', () => {

    push.classList.remove('display-arrow-right');
    push.classList.remove('displayx')
    scrollx.scrollLeft -= 700;
    if (2 < 5) {
      arrowLeft.classList.add('display-arrow-left');
    }
    console.log(push)
  })



const categories = document.querySelectorAll('.category-section li');

// if(categories.classList.contains('hover-cat')){
//   categories.addEventListener('mouseover',()=>{categories.classList.remove('hover-cat')})
// }

function removeClasses() {

  categories.forEach(tab => {
    tab.classList.remove('active-cat');
  });
}
categories.forEach(tab => {
  tab.addEventListener('mouseover', () => { tab.classList.remove('hover-cat') });
  tab.addEventListener('click', () => {
    removeClasses();
    tab.classList.add('active-cat');
  })
});


