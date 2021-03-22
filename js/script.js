const headerElement = document.querySelector(".section-header");
const mainNavigationHeaderElement = document.getElementById('main-navigation');


document.querySelector(".faq-accordion").addEventListener("click", event => {
    if (event.target.closest(".faq-accordion__item")) {
        event.target.closest(".faq-accordion__item").classList.toggle("faq-accordion__item--active");
    }
});

document.querySelector(".btn-burger").addEventListener("click", event => {
    headerElement.classList.toggle("section-header--active-nav");

    if (headerElement.classList.contains("section-header--active-nav")) {
        hideScroll();
    } else {
        showScroll();
    }
});

const hideScroll = () => {
    const scrollWidth = `${getScrollbarWidth()}px`;

    document.body.style.paddingRight = scrollWidth;
    document.body.style.overflow = 'hidden';

    mainNavigationHeaderElement.style.paddingRight = scrollWidth;
};

const showScroll = event => {
    document.body.style.paddingRight = '';
    document.body.style.overflow = 'visible';

    mainNavigationHeaderElement.style.paddingRight = '';
};

const resetNav = () => {
    headerElement.classList.remove("section-header--active-nav");
    showScroll();
};

window.addEventListener('resize', resetNav);

const getScrollbarWidth = () => {
    const outer = document.createElement('div');

    outer.style.position = 'absolute';
    outer.style.top = '-9999px';
    outer.style.width = '50px';
    outer.style.height = '50px';
    outer.style.overflow = 'scroll';
    outer.style.visibility = 'hidden';

    document.body.appendChild(outer);
    const scrollBarWidth = outer.offsetWidth - outer.clientWidth;
    document.body.removeChild(outer);

    return scrollBarWidth;
};

const swiper1 = new Swiper('.section-hero-image', {
    // Optional parameters
    autoHeight: true,
    // If we need pagination
    pagination: {
        el: '.section-hero-image .dots',
        clickable: true,
    },
});

const swiper2 = new Swiper('.slider-blog-container', {
    loop: true,
    pagination: {
        el: '.section-blog .dots',
        clickable: true,
    },
    navigation: {
        nextEl: '.section-blog .swiper-button-next',
        prevEl: '.section-blog .swiper-button-prev',
    },
});

const swiper3 = new Swiper('.slider-quotes-container', {
    loop: true,
    slidesPerView: 'auto',
    // spaceBetween: 90,
    pagination: {
        el: '.section-quotes .dots',
        clickable: true,
    },
});