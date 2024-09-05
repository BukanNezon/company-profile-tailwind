// Initialize Swiper for Offering
const offeringSwiper = new Swiper('.offering-swiper', {
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.offering-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.offering-button-next',
        prevEl: '.offering-button-prev',
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
    },
});

// Initialize Swiper for Testimonials
const testimonialsSwiper = new Swiper('.testimonials-swiper', {
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.testimonials-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.testimonials-button-next',
        prevEl: '.testimonials-button-prev',
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 1,
            spaceBetween: 40,
        },
    },
});

document.addEventListener("DOMContentLoaded", () => {
    const texts = ['Passion', 'Creativity', 'Energy', 'Imagination', 'Dedication'];
    const typingContainer = document.getElementById('typed-text');
    let currentTextIndex = 0;
    let isTyping = true;
    let text = '';
    let charIndex = 0;
    const typingSpeed = 100; // Kecepatan mengetik
    const eraseSpeed = 50; // Kecepatan menghapus
    const pause = 1500; // Waktu jeda antara teks

    function type() {
        if (isTyping) {
            // Mengetik karakter berikutnya
            text = `Code with ${texts[currentTextIndex].substring(0, charIndex + 1)}`;
            typingContainer.textContent = text;
            charIndex++;
            if (charIndex === texts[currentTextIndex].length) {
                isTyping = false;
                setTimeout(() => {
                    type(); // Mulai menghapus setelah jeda
                }, pause);
            } else {
                setTimeout(type, typingSpeed);
            }
        } else {
            // Menghapus karakter satu per satu
            text = `Code with ${texts[currentTextIndex].substring(0, charIndex - 1)}`;
            typingContainer.textContent = text;
            charIndex--;
            if (charIndex === 0) {
                isTyping = true;
                currentTextIndex = (currentTextIndex + 1) % texts.length;
                setTimeout(() => {
                    type(); // Mulai mengetik teks berikutnya setelah jeda
                }, pause);
            } else {
                setTimeout(type, eraseSpeed);
            }
        }
    }

    type(); // Mulai animasi
});


