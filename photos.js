const { pictures } = photoData[id];
const swiperWrapper = document.querySelector('.swiper-wrapper');
swiperWrapper.innerHTML = ''; // Clear previous slides

pictures.forEach(picture => {
    const slide = document.createElement('div');
    slide.className = 'swiper-slide';

    const img = document.createElement('img');
    img.src = picture;
    img.alt = 'Photo';

    slide.appendChild(img);
    swiperWrapper.appendChild(slide);
});

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
