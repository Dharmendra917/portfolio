console.log("hellow! developers");

var tablinks = document.getElementsByClassName('tab-links');
var tabcontents = document.getElementsByClassName('tab-contents');
var sidemenu = document.getElementById("sidemenu");
 
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

function openmenu(){
    sidemenu.style.right = "0px";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbxjzKzLGYG3pXReGx4MEzk_yKlyKSKhmT3Lh6AqvdqwraMPPpaoPVmSLf_BUcfV7udyXQ/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent successfully ";
        setTimeout(function(){
            msg.innerHTML = "";
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })


// ---------------gsap-------------
function header(){
    tl = gsap.timeline({
        scrollTrigger:{
            trigger: "#herader",
            start: "12% 50%",
            end: "12% 35%",
            scrub: 1,
            pin: true,
            // markers: true,
        }
    })
    
    gsap.from("nav",{
        duration: .9,
        opacity: .5,
        ease: Power1,
        y:"-15%"
    },"same")
    gsap.from(".header-text p",{
        duration: .9,
        opacity: .5,
        // scale: .9,
        y:"-12%",
        ease: Power2,
       
    },"same")
    gsap.from(".header-text h1",{
        duration: .9,
        opacity: .5,
        stagger: 1.5,
        delay:.1,
        y:"-10%",
        ease: Power2,
    },"same")
    tl
    .to(".header-text",{
        duration: .9,
        opacity: .5,
        stagger: 1.5,
        delay:.1,
        y:"-10%",
        ease: Power1,
        stagger: 5,
    })
    
}

function about(){
    tl2= gsap.timeline({
        scrollTrigger:{
            trigger: "#about",
            start: "12% 35%",
            end: "12% 25%",
            scrub: 1,
            pin: true,
            // markers: true,
        }
    })
    tl2
    .to(".about-col-1 img",{
         opacity: 1, 
         duration: 2,
         scale: 1,
         ease: Power1,
    },"same2")
    .to(".about-col-2",{
        opacity: 1, 
        duration: 2,
        delay: 1,
        ease: Power1,
    },"same2")
}

header();
about();