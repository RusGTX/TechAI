'use strict';

 
 // ScrollReveal-------------------------------------->
      
 window.sr = ScrollReveal();

 sr.reveal('.navbar', {
     duration:2000,
     origin:'bottom'
 });
 sr.reveal('.leftCase', {
     duration:2000,
     origin:'bottom',
     distance:'300px'
 });
 sr.reveal('.rightCase', {
     duration:2000,
     origin:'right',
     distance:'300px'
 });
 sr.reveal('.firstCase-btn', {
     duration:2000,
     origin:'bottom',
     dela:2000,
 });
 sr.reveal('#testimonials div', {
     duration:2000,
     origin:'bottom',
 });

 sr.reveal('.info-left', {
     duration:2000,
     origin:'left',
     distance:'500px',
     viewFactor:0.2
 });
 sr.reveal('.info-right', {
     duration:2000,
     origin:'right',
     distance:'500px',
     viewFactor:0.2
 });

 //image anim
 sr.reveal('.first', {
     duration:2000,
     origin:'right',
     distance:'300px',
     viewFactor:0.2
 });
 sr.reveal('.second', {
     duration:2500,
     origin:'right',
     distance:'400px',
     viewFactor:0.2
 });
 sr.reveal('.third', {
     duration:3000,
     origin:'right',
     distance:'500px',
     viewFactor:0.2
 });
 sr.reveal('.forth', {
    duration:3000,
    origin:'left',
    distance:'500px',
    viewFactor:0.2
});
sr.reveal('.fifth', {
    duration:3000,
    origin:'bottom',
    distance:'500px',
    viewFactor:0.2
});


// smoothScroll ---------------------------------------->>

 $(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 100);
});


//GSAP animation-------------------------------------->

gsap.config({trialWarn: false});
let select = s => document.querySelector(s),
    toArray = s => gsap.utils.toArray(s),
    mainSVG = select('#mainSVG'),
    allEll = toArray('.ell'),
    colorArr = ['#359EEE', '#FFC43D','#EF476F','#03CEA4']

let colorInterp = gsap.utils.interpolate(colorArr);

gsap.set(mainSVG, {
  visibility: 'visible'
})

function animate (el, count) {
  let tl = gsap.timeline({
  defaults: {
    ease: 'sine.inOut'
  },
    repeat: -1
});
  gsap.set(el, {
    opacity:1- count/(allEll.length),
    stroke: colorInterp(count/(allEll.length))
  })

  tl.to(el, {
  attr: {
    ry: `-=${count*2.3}`,
    rx: `+=${count*1.4}`
  },
  ease: 'sine.in'
})
.to(el, {
  attr: {
    ry: `+=${count*2.3}`,
    rx: `-=${count*1.4}`
  },
  ease: 'sine'
})
.to(el, {
  duration: 1,
  rotation: -180,
  transformOrigin: '50% 50%'
}, 0).timeScale(0.5)
}
allEll.forEach((c, i) => {
  gsap.delayedCall(i/(allEll.length-1), animate, [c, i+1])
})
gsap.to('#aiGrad', {
  duration: 4,
  delay: 0.75,
  attr: {
    x1: '-=300',
    x2: '-=300'
  },
  scale: 1.2,
  transformOrigin: '50% 50%',
  repeat: -1,
  ease: 'none'
})
gsap.to('#ai', {
  duration: 1,
  scale: 1.1,
  transformOrigin: '50% 50%',
  repeat: -1,
  yoyo: true,
  ease: 'sine.inOut'
}) 

//contact animation------------------------>

const words = document.querySelectorAll('.word')

words.forEach(word => {
  const wordToDisplay = word.getAttribute('data-word').split('')
  
  wordToDisplay.forEach(letter => {
    const charaDiv = document.createElement('div')
    const letterDiv = document.createElement('div')

    charaDiv.classList.add('chara-container')
    letterDiv.classList.add('chara')
    letterDiv.innerText = letter
    
    charaDiv.appendChild(letterDiv)
    word.appendChild(charaDiv)
  })
})

const charaContainer = document.querySelectorAll('.chara-container')
const chara = document.querySelectorAll('.chara')

// SET

