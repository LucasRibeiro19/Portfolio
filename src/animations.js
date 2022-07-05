const menu = document.querySelector(".menu-container");
const nav =  document.querySelector(".nav-cta");
const title = document.querySelector("#job");
const github = document.querySelector(".fa-brands.fa-github.fa-3x");
const linkedIn = document.querySelector(".fa-brands.fa-linkedin-in.fa-3x");
const slogan = document.querySelector("#slogan");
const devLogo = document.querySelector("#developer-pic");
const homeMouse = document.querySelector(".home-mouse-container");

nav.addEventListener('click',()=>{
    nav.classList.toggle('active')
    menu.classList.toggle("active")
})

new Typewriter(title,{
    // deleteSpeed: 20
})
.pauseFor(1000)
.typeString('<span style="color:#2F2CBA;font-weight:bold">Front-End </span>')
.typeString('<span style="color:#1a1a1a">Developer</span>')
.start()

gsap.from(github,{
    x:-20,
    opacity:0,
    duration: 1,
    delay:5,
});

gsap.from(linkedIn,{
    x:20,
    opacity:0,
    duration: 1,
    delay:5,
});
gsap.from(slogan,{
    opacity:0,
    duration: 1,
    delay:5.2,
});
gsap.from(devLogo,{
    y:20,
    opacity:0,
    duration: 1.5,
    delay:5.6,
});
gsap.from(homeMouse,{
    opacity:0,
    duration: 1.5,
    delay:6,
});

