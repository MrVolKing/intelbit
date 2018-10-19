'use strict';
$(document).ready(function() {
    //------------------------------------------------------------------------//
    //-- WOW JS --------------------------------------------------------------//
    //------------------------------------------------------------------------//
    new WOW({offset: 140, mobile: false}).init();
    //------------------------------------------------------------------------//
    //-- TOGGLE MENU ---------------------------------------------------------//
    //------------------------------------------------------------------------//
    $(document).on('click', '.header-nav__btn-open', function() {
        $(this).addClass("no-active");
        $(".header-nav").addClass('is-active');
        $("html").addClass("no-scroll");
        $("body").addClass("no-scroll");
    })
    $(document).on('click', '.header-nav__btn-close', function() {
        $('.header-nav__btn-open').removeClass("no-active");
        $(".header-nav").removeClass('is-active');
        $("html").removeClass("no-scroll");
        $("body").removeClass("no-scroll");
    })
    //------------------------------------------------------------------------//
    //-- SCROLL ANIMATION ----------------------------------------------------//
    //------------------------------------------------------------------------//
    $(document).on('click', '.fixed-logo, .header-nav__menu-list a, .promo-content__btn-next, .promo-content__btn, .footer-nav__menu-list a', function() {
        $('.header-nav__btn-open').removeClass("no-active");
        $(".header-nav").removeClass('is-active');
        $("html").removeClass("no-scroll");
        $("body").removeClass("no-scroll");
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        // if ($(window).width() <= '768'){
        //     top = $(id).offset().top - 72
        // }
        $('body,html').animate({
            scrollTop: top
        }, 1500);
    })
    $(document).on('click', '.teams-swiper a', function() {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 500);
    })
    //------------------------------------------------------------------------//
    //-- MODAL ---------------------------------------------------------------//
    //------------------------------------------------------------------------//
    // $('#myModal-send-email').modal('toggle');
    //------------------------------------------------------------------------//
    //-- SWIPER --------------------------------------------------------------//
    //------------------------------------------------------------------------//
    var mySwiper = new Swiper('.swiper-container', {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 28,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: true
        },
        keyboard: {
            enabled: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        breakpoints: {
            992: {
                slidesPerView: 1,
                slidesPerGroup: 1
            },
            768: {
                slidesPerView: 1
            }
        }
    });
    $('.swiper-container-2 .swiper-slide').each(function(index) {
        $(this).attr('data-count', index + 1);
    });
    var mySwiper2 = new Swiper('.swiper-container-2', {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 28,
        autoplay: {
            delay: 3000,
            disableOnInteraction: true
        },
        keyboard: {
            enabled: true
        },
        navigation: {
            nextEl: '.swiper-button-next-2',
            prevEl: '.swiper-button-prev-2'
        },
        breakpoints: {
            992: {
                slidesPerView: 3,
                slidesPerGroup: 3
            },
            680: {
                slidesPerView: 2,
                slidesPerGroup: 2
            },
            480: {
                slidesPerView: 1,
                slidesPerGroup: 1
            }
        }
    });
    var mySwiper2 = new Swiper('.swiper-container-3', {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 22,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: true
        },
        keyboard: {
            enabled: true
        },
        navigation: {
            nextEl: '.swiper-button-next-3',
            prevEl: '.swiper-button-prev-3'
        },
        breakpoints: {
            992: {
                slidesPerView: 3,
                slidesPerGroup: 3
            },
            840: {
                slidesPerView: 2,
                slidesPerGroup: 2
            },
            580: {
                slidesPerView: 1,
                slidesPerGroup: 1
            }
        }
    });
    $(document).on('click', '.swiper-container-2 .swiper-slide:not(.is-active)', function() {
        $('.swiper-container-2 .swiper-slide').removeClass('is-active');
        $(this).addClass('is-active');
        $('.teams-img').removeClass('is-active');
        $('.teams-img:nth-child(' + $(this).attr("data-count") + ')').addClass('is-active');
    })
    // -----------------------------------------------------------------------//
    //- FORM -----------------------------------------------------------------//
    // -----------------------------------------------------------------------//
    $(document).on('click', '.consultation-form__submit, .popup-form__submit', function() {
        var form = $(this).closest('form'),
            checkbox = form.find('.consultation-form__checkbox'),
            emailField = form.find('[type="email"]')[0];
        // console.log(emailField.validity);
        if( checkbox.prop('checked') && emailField.validity.valid ) {
            checkbox.removeClass('is-error');
            $('.modal').modal('hide');
            $('#myModal-send-email').modal('toggle');
            setTimeout(function(){
                form.trigger('reset');
            }, 50);
        } else {
            checkbox.addClass('is-error');
        }
    })
    $(document).on('click', '.portfolio-form__submit', function() {
        var form = $(this).closest('form'),
            emailField = form.find('[type="email"]')[0];
        // console.log(emailField.validity);
        if( emailField.validity.valid ) {
            $('.modal').modal('hide');
            $('#myModal-send-email').modal('toggle');
            setTimeout(function(){
                form.trigger('reset');
            }, 50);
        }
    })
    // -----------------------------------------------------------------------//
    //- TEXTSCRAMBLE ---------------------------------------------------------//
    // -----------------------------------------------------------------------//
    class TextScramble {
        constructor(el) {
            this.el = el
            this.chars = '!<>-_\\/[]{}—=+*^?#__'
            this.update = this.update.bind(this)
        }
        setText(newText) {
            const oldText = this.el.innerText
            const length = Math.max(oldText.length, newText.length)
            const promise = new Promise((resolve) => this.resolve = resolve)
            this.queue = []
            for (let i = 0; i < length; i++) {
                const from = oldText[i] || ''
                const to = newText[i] || ''
                const start = Math.floor(Math.random() * 40)
                const end = start + Math.floor(Math.random() * 40)
                this.queue.push({from, to, start, end})
            }
            cancelAnimationFrame(this.frameRequest)
            this.frame = 0
            this.update()
            return promise
        }
        update() {
            let output = ''
            let complete = 0
            for (let i = 0, n = this.queue.length; i < n; i++) {
                let {from, to, start, end, char} = this.queue[i]
                if (this.frame >= end) {
                    complete++
                    output += to
                } else if (this.frame >= start) {
                    if (!char || Math.random() < 0.05) {
                        char = this.randomChar()
                        this.queue[i].char = char
                    }
                    output += `<span class="dud">${char}</span>`
                } else {
                    output += from
                }
            }
            this.el.innerHTML = output
            if (complete === this.queue.length) {
                this.resolve()
            } else {
                this.frameRequest = requestAnimationFrame(this.update)
                this.frame++
            }
        }
        randomChar() {
            return this.chars[Math.floor(Math.random() * this.chars.length)]
        }
    }
    // Example ---------------------------------------------------------------//
    const phrases = ['mobile app development', 'outsourcing', 'web development']
    const el = document.querySelector('.promo-content__bottom')
    const fx = new TextScramble(el)
    let counter = 0
    const next = () => {
        fx.setText(phrases[counter]).then(() => {
            setTimeout(next, 2000)
        })
        counter = (counter + 1) % phrases.length
    }
    next();
});
