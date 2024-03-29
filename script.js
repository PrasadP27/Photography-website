// for navbar 
let nav = document.querySelector('#navbar')
window.onscroll = () => {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add('onScroll')
    } else {
        nav.classList.remove('onScroll')
    }
}

//for dropdown navbar

let navbar = document.querySelectorAll('.nav-link')
let navCollapse = document.querySelector('.navbar-collapse.collapse')

navbar.forEach((a) => {
    a.addEventListener('click', function(){
        navCollapse.classList.remove('show')
    })
})

//for animation

// home

let t1Hero = gsap.timeline()

t1Hero.from('#home h1', {
    xPercent: 50,
    opacity: 0,
    ease: "back.out(1.7)",
    duration: 1.2
})

t1Hero.from('#home p', {
    xPercent: 50,
    opacity: 0,
    ease: "back.out(1.7)",
    duration: 1.2,
    delay: -0.8
}, "same")

t1Hero.from('#home a', {
    yPercent: -50,
    opacity: 0,
    ease: "circ.in",
}, "same")


// about

let t1About = gsap.timeline({
    scrollTrigger: {
        trigger: '#about',
        start: '10% 60%',
        end: '10% 60%',
        // markers: true,
        scrub: false,
    }
})

t1About.from('.about-container', {
    opacity: 0,
    yPercent: 50,
    ease: "power1.out",
    duration: 0.5
})

t1About.from('.about-img', {
    opacity: 0,
    yPercent: 50,
    ease: "power1.out",
    duration: 0.5
})

//gallery

let t1Gallery = gsap.timeline({
    scrollTrigger: {
        trigger: '#gallery',
        start: '10% 40%',
        end: '10% 40%',
        // markers: true,
        scrub: false,
    }
})

t1Gallery.from('.column-1', {
    opacity: 0,
    xPercent: -30,
    ease: "power1.out",
    duration: 0.8
}, "gallery")

t1Gallery.from('.column-2', {
    opacity: 0,
    yPercent: 30,
    ease: "power1.out",
    duration: 0.8
}, "gallery")

t1Gallery.from('.column-3', {
    opacity: 0,
    xPercent: 30,
    ease: "power1.out",
    duration: 0.8
}, "gallery")


// services

let t1ervices = gsap.timeline({
    scrollTrigger: {
        trigger: '#services',
        start: '10% 60%',
        end: '10% 60%',
        // markers: true,
        scrub: false,
    }
})

t1ervices.from('.services-content', {
    opacity: 0,
    xPercent: -30,
    ease: "back.out(1.7)",
    duration: 0.8
}, 'services')

t1ervices.from('.services-container', {
    opacity: 0,
    xPercent: 30,
    ease: "back.out(1.7)",
    duration: 0.8,
}, "services")


// contact

let t1Contact = gsap.timeline({
    scrollTrigger: {
        trigger: '#contact',
        start: '10% 60%',
        end: '10% 60%',
        // markers: true,
        scrub: false,
    }
})

t1Contact.from('.contact-container', {
    opacity: 0,
    yPercent: 50,
    ease: "power1.out",
    duration: 0.8
}, 'contact')

t1Contact.from('.contact-form', {
    opacity: 0,
    yPercent: 50,
    ease: "power1.out",
    duration: 0.8
}, 'contact')


//scroll color change 

var t1Color = gsap.timeline({
    scrollTrigger: {
        trigger: "#about",
        start: "60% 40%",
        end: "60% 0%",
        // markers: true,
        scrub: 1,
        duration: 1
    }
})

t1Color.to('body', {
    backgroundColor: "#101010",
});

var t2Color = gsap.timeline({
    scrollTrigger: {
        trigger: "#gallery",
        start: "70% 30%",
        end: "70% 0%",
        // markers: true,
        scrub: 1,
        duration: 1
    }
})

t2Color.to('body', {
    backgroundColor: "#fff",
});
