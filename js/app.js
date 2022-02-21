// Toggle menu when click icon bars
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
const activeClass = 'is-show';

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle(activeClass);
  menu.classList.toggle(activeClass);
});

document.addEventListener('click', (event) => {
  if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
    menu.classList.remove(activeClass);
    menuToggle.classList.remove(activeClass);
  }
});
// Links hover effect
window.addEventListener('load', () => {
  const menu = document.querySelector('.menu');

  const listLink = document.querySelectorAll('.menu .menu-item:not(:last-child) .menu-link');
  const line = document.createElement('div');
  line.className = 'line-effect';
  document.body.appendChild(line);
  [...listLink].forEach((item) => {
    item.addEventListener('mouseenter', handleHoverLink);
  });
  function handleHoverLink(event) {
    const { top, left, width, height } = event.target.getBoundingClientRect();
    const offset = 5;
    line.style.width = `${width}px`;
    line.style.left = `${left}px`;
    line.style.top = `${top + height + offset}px`;
  }
  menu.addEventListener('mouseleave', () => {
    line.style.width = '0px';
  });
});

// When window scrolls , show/hide header
const header = document.querySelector('.header');

function debounce(callback, wait) {
  let timeoutId;
  return function () {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(callback, wait);
  };
}

function handleWindowScroll() {
  const headerHeight = header && header.offsetHeight;
  const scrollY = window.pageYOffset;
  if (scrollY >= headerHeight) {
    header && header.classList.add('is-fixed');
    document.body.style.paddingTop = `${headerHeight}px`;
  } else {
    header && header.classList.remove('is-fixed');
    document.body.style.paddingTop = `0px`;
  }
}
window.addEventListener('scroll', debounce(handleWindowScroll, 200));

// Use slick to make slides
$(document).ready(function () {
  $('.banner-list').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: `<button type='button' class='slick-prev slick-arrow'><i class="fa-solid fa-angle-left"></i></button>`,
    nextArrow: `<button type='button' class='slick-next slick-arrow'><i class="fa-solid fa-angle-right"></i></button>`,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: true,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          slidesToShow: 1,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
    ],
  });

  $('.product-list').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: `<button type='button' class='slick-prev slick-arrow'><i class="fa-solid fa-angle-left"></i></button>`,
    nextArrow: `<button type='button' class='slick-next slick-arrow'><i class="fa-solid fa-angle-right"></i></button>`,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: true,
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 900,
        settings: {
          arrows: false,
          slidesToShow: 3,
          dots: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          arrows: false,
          slidesToShow: 2,
          dots: true,
        },
      },
      {
        breakpoint: 500,
        settings: {
          arrows: false,
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  });

  // Show video use venobox lib
  $('.venobox').venobox();
});
