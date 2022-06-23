const title = document.querySelector("#job");
const github = document.querySelector(".fa-brands.fa-github.fa-3x");
const linkedIn = document.querySelector(".fa-brands.fa-linkedin-in.fa-3x");
const accroche = document.querySelector("#accroche");


new Typewriter(title,{
    deleteSpeed: 20
})
.pauseFor(1000)
.typeString('<span style="color:#2F2CBA;font-weight:bold">Front-End </span>')
.typeString('<span style="color:#FFFF">Developer</span>')
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
gsap.from(accroche,{
    opacity:0,
    duration: 1,
    delay:5.2,
});

