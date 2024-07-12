function show() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });

    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
}

show();









var tl = gsap.timeline()

tl

    .set(".intro-gsap", {
        y: "100px",
        opacity: "0"
    })
    .set(".princple-gsap", {
        y: "100px",
        opacity: "0"
    })
    .set(".princple-box", {
        scale: "0",
        opacity: "0",
    })
    .set(".princple-rotate-img", {
        scale: "0",
        opacity: "0",
        transform: "rotate(90deg)"
    })
    .set("#prinple-ball-img", {
        opacity: "0",
    })
    .set(".tracher-gsap", {
        y: "-10%",
        opacity: "0"
    })






// First Annimation


gsap.to("#ball-img", {
    top: "1.5%",
    duration: 1.5,
    ease: Power1,
}, "a")

gsap.to("#head1 h1 span", {
    top: "0px",
    delay: 1,
    duration: .5,
    ease: Power1,
    stagger: .9
}, "a")


gsap.to("#Ddiv", {
    // scrollTrigger : {
    //   trigger : "#Ddiv",
    //   start : "top 80%",
    //   scrub:true,
    // //   important:true
    // },
    transform: " translate(-50%,0%) rotate(10deg)",
}, "b")

gsap.to("#ball-img", {
    // scrollTrigger : {
    //     trigger : "#Ddiv",
    //     start : "top 80%",
    //     scrub:true,
    //   //   important:true
    //   },
    transform: "translate(-50%,0%)  rotate(-10deg)",
    scrub: 1,
    x: "20px",
    y: "5px",
}, "b")

gsap.to("#ball-img", {
    transform: "rotate(-250deg)",
    top: "3%",
    left: "100%",
    duration: 3,
}, "c")

gsap.to("#Ddiv", {
    transform: "translate(-50%,0%) rotate(0deg)",
    delay: 2
}, "c")
gsap.to(".intro-gsap", {
    // scrollTrigger : {
    //     trigger : ".intro-gsap",
    //     start : "top 60%",
    //     scrub:true,
    //   //   important:true
    //   },
    transform: "rotate(0deg)",
    y: "0px",
    duration: .5,
    delay: .5,
    ease: Power1,
    opacity: "1",
    stagger: ".5"
}, "d")



// Portfolio Annimation

document.querySelector("#folio1").addEventListener("mouseover", function () {
    document.querySelector("#folio1 img").style.scale = "1";
    document.querySelector("#folio1").style.color = "#51733F";
    document.querySelector("#folio1 h1").style.zIndex = "9999";
    document.querySelector("#folio1 h5").style.zIndex = "9999";
})
document.querySelector("#folio1").addEventListener("mouseout", function () {
    document.querySelector("#folio1 img").style.scale = "0";
    document.querySelector("#folio1").style.color = "black";
    document.querySelector("#folio1 h1").style.zIndex = "99";
    document.querySelector("#folio1 h5").style.zIndex = "99";
})


document.querySelector("#folio2").addEventListener("mouseover", function () {
    document.querySelector("#folio2 img").style.scale = "1";
    document.querySelector("#folio2").style.color = "#51733F";
    document.querySelector("#folio2 h1").style.zIndex = "9999";
    document.querySelector("#folio2 h5").style.zIndex = "9999";
})
document.querySelector("#folio2").addEventListener("mouseout", function () {
    document.querySelector("#folio2 img").style.scale = "0";
    document.querySelector("#folio2").style.color = "black";
    document.querySelector("#folio2 h1").style.zIndex = "99";
    document.querySelector("#folio2 h5").style.zIndex = "99";
})
document.querySelector("#folio3").addEventListener("mouseover", function () {
    document.querySelector("#folio3 img").style.scale = "1";
    document.querySelector("#folio3").style.color = "#51733F";
    document.querySelector("#folio3 h1").style.zIndex = "9999";
    document.querySelector("#folio3 h5").style.zIndex = "9999";
})
document.querySelector("#folio3").addEventListener("mouseout", function () {
    document.querySelector("#folio3 img").style.scale = "0";
    document.querySelector("#folio3").style.color = "black";
    document.querySelector("#folio3 h1").style.zIndex = "99";
    document.querySelector("#folio3 h5").style.zIndex = "99";
})
document.querySelector("#folio4").addEventListener("mouseover", function () {
    document.querySelector("#folio4 img").style.scale = "1";
    document.querySelector("#folio4").style.color = "#51733F";
    document.querySelector("#folio4 h1").style.zIndex = "9999";
    document.querySelector("#folio4 h5").style.zIndex = "9999";
})
document.querySelector("#folio4").addEventListener("mouseout", function () {
    document.querySelector("#folio4 img").style.scale = "0";
    document.querySelector("#folio4").style.color = "black";
    document.querySelector("#folio4 h1").style.zIndex = "99";
    document.querySelector("#folio4 h5").style.zIndex = "99";
})
document.querySelector("#folio5").addEventListener("mouseover", function () {
    document.querySelector("#folio5 img").style.scale = "1";
    document.querySelector("#folio5").style.color = "#51733F";
    document.querySelector("#folio5 h1").style.zIndex = "9999";
    document.querySelector("#folio5 h5").style.zIndex = "9999";
})
document.querySelector("#folio5").addEventListener("mouseout", function () {
    document.querySelector("#folio5 img").style.scale = "0";
    document.querySelector("#folio5").style.color = "black";
    document.querySelector("#folio5 h1").style.zIndex = "99";
    document.querySelector("#folio5 h5").style.zIndex = "99";
})

document.querySelector("#folio6").addEventListener("mouseover", function () {
    document.querySelector("#folio6 img").style.scale = "1";
    document.querySelector("#folio6").style.color = "#51733F";
    document.querySelector("#folio6 h1").style.zIndex = "9999";
    document.querySelector("#folio6 h5").style.zIndex = "9999";
})
document.querySelector("#folio6").addEventListener("mouseout", function () {
    document.querySelector("#folio6 img").style.scale = "0";
    document.querySelector("#folio6").style.color = "black";
    document.querySelector("#folio6 h1").style.zIndex = "99";
    document.querySelector("#folio6 h5").style.zIndex = "99";
})




// Key Princple Annimation


tl
.to(".princple-gsap", {
    transform: "rotate(0deg)",
    y: "0px",
    duration: .5,
    delay: 25,
    ease: Power1,
    opacity: "1",
    stagger: ".5"
})
.to(".princple-box", {
    scale: '1',
    opacity: 1,
    delay: .5,
    ease: Power1,
})
.to(".princple-rotate-img", {
   transform: "rotate(0deg)",
   scale: '1',
   opacity: 1,
   duration: .5,
   ease: Power1,
})
.to("#prinple-ball-img", {
    opacity: "1",
    duration: 1,
    left: "45%",
    top: "89%",
    ease: Power1,
    transform: "rotate(0deg)"
})


// Teacher Annimation

.to(".tracher-gsap", {
    y: "100px",
    opacity: 1,
    stagger: .5
})



//Work Annimation

document.querySelector("#work-crl1").addEventListener("mouseover", function () {
    document.querySelector("#work-under-crl1").style.scale = "1";
    document.querySelector("#work-crl1 img").style.filter = " brightness(100)";
})
document.querySelector("#work-crl1").addEventListener("mouseout", function () {
    document.querySelector("#work-under-crl1").style.scale = "0";
    document.querySelector("#work-crl1 img").style.filter = " brightness(0)";
})
document.querySelector("#work-crl2").addEventListener("mouseover", function () {
    document.querySelector("#work-under-crl2").style.scale = "1";
    document.querySelector("#work-crl2 img").style.filter = " brightness(100)";
})
document.querySelector("#work-crl2").addEventListener("mouseout", function () {
    document.querySelector("#work-under-crl2").style.scale = "0";
    document.querySelector("#work-crl2 img").style.filter = " brightness(0)";
})
document.querySelector("#work-crl4").addEventListener("mouseover", function () {
    document.querySelector("#work-under-crl4").style.scale = "1";
    document.querySelector("#work-crl4 img").style.filter = " brightness(100)";
})
document.querySelector("#work-crl4").addEventListener("mouseout", function () {
    document.querySelector("#work-under-crl4").style.scale = "0";
    document.querySelector("#work-crl4 img").style.filter = " brightness(0)";
})
document.querySelector("#work-crl6").addEventListener("mouseover", function () {
    document.querySelector("#work-under-crl6").style.scale = "1";
    document.querySelector("#work-crl6 img").style.filter = " brightness(100)";
})
document.querySelector("#work-crl6").addEventListener("mouseout", function () {
    document.querySelector("#work-under-crl6").style.scale = "0";
    document.querySelector("#work-crl6 img").style.filter = " brightness(0)";

})
document.querySelector("#work-crl7").addEventListener("mouseover", function () {
    document.querySelector("#work-under-crl7").style.scale = "1";
    document.querySelector("#work-crl7 img").style.filter = " brightness(100)";
})
document.querySelector("#work-crl7").addEventListener("mouseout", function () {
    document.querySelector("#work-under-crl7").style.scale = "0";
    document.querySelector("#work-crl7 img").style.filter = " brightness(0)";

})
document.querySelector("#work-crl8").addEventListener("mouseover", function () {
    document.querySelector("#work-under-crl8").style.scale = "1";
    document.querySelector("#work-crl8 img").style.filter = " brightness(100)";
})
document.querySelector("#work-crl8").addEventListener("mouseout", function () {
    document.querySelector("#work-under-crl8").style.scale = "0";
    document.querySelector("#work-crl8 img").style.filter = " brightness(0)";

})
document.querySelector("#work-crl9").addEventListener("mouseover", function () {
    document.querySelector("#work-under-crl9").style.scale = "1";
    document.querySelector("#work-crl9 img").style.filter = " brightness(100)";
})
document.querySelector("#work-crl9").addEventListener("mouseout", function () {
    document.querySelector("#work-under-crl9").style.scale = "0";
    document.querySelector("#work-crl9 img").style.filter = " brightness(0)";
})




//Mentorship Annimation

document.querySelector("#ment-row1").addEventListener("mouseover", function(dept){
    document.querySelector("#ment-row1-img").style.display ="initial"
    gsap.to("#ment-row1-img",{
        top:(dept.y-250)+"px",
        left:(dept.x-1000)+"px",
    })
    gsap.to("#ment-row1-img img",{
        height:"100%"
    })
})
document.querySelector("#ment-row1").addEventListener("mouseout", function(dept){
    document.querySelector("#ment-row1-img").style.display ="none"
    gsap.to("#ment-row1-img img",{
        height:"0%"
    })
})
document.querySelector("#ment-row2").addEventListener("mouseover", function(dept){
    document.querySelector("#ment-row2-img").style.display ="initial"
    gsap.to("#ment-row2-img",{
        top:(dept.y-250)+"px",
        left:(dept.x-1000)+"px"
    })
    gsap.to("#ment-row2-img img",{
        height:"100%"
    })
})
document.querySelector("#ment-row2").addEventListener("mouseout", function(dept){
    document.querySelector("#ment-row2-img").style.display ="none"
    gsap.to("#ment-row2-img img",{
        height:"0%"
    })
})
document.querySelector("#ment-row3").addEventListener("mouseover", function(dept){
    document.querySelector("#ment-row3-img").style.display ="initial"
    gsap.to("#ment-row3-img",{
        top:(dept.y-250)+"px",
        left:(dept.x-1000)+"px"
    })
    gsap.to("#ment-row3-img img",{
        height:"100%"
    })
})
document.querySelector("#ment-row3").addEventListener("mouseout", function(dept){
    document.querySelector("#ment-row3-img").style.display ="none"
    gsap.to("#ment-row3-img img",{
        height:"0%"
    })
})
document.querySelector("#ment-row4").addEventListener("mouseover", function(dept){
    document.querySelector("#ment-row4-img").style.display ="initial"
    gsap.to("#ment-row4-img",{
        top:(dept.y-250)+"px",
        left:(dept.x-1000)+"px"
    })
    gsap.to("#ment-row4-img img",{
        height:"100%"
    })
})
document.querySelector("#ment-row4").addEventListener("mouseout", function(dept){
    document.querySelector("#ment-row4-img").style.display ="none"
    gsap.to("#ment-row4-img img",{
        height:"0%"
    })
})
document.querySelector("#ment-row5").addEventListener("mouseover", function(dept){
    document.querySelector("#ment-row5-img").style.display ="initial"
    gsap.to("#ment-row5-img",{
        top:(dept.y-250)+"px",
        left:(dept.x-1000)+"px"
    })
    gsap.to("#ment-row5-img img",{
        height:"100%"
    })
})
document.querySelector("#ment-row5").addEventListener("mouseout", function(dept){
    document.querySelector("#ment-row5-img").style.display ="none"
    gsap.to("#ment-row5-img img",{
        height:"0%"
    })
})
document.querySelector("#ment-row6").addEventListener("mouseover", function(dept){
    document.querySelector("#ment-row6-img").style.display ="initial"
    gsap.to("#ment-row6-img",{
        top:(dept.y-250)+"px",
        left:(dept.x-1000)+"px"
    })
    gsap.to("#ment-row6-img img",{
        height:"100%"
    })
})
document.querySelector("#ment-row6").addEventListener("mouseout", function(dept){
    document.querySelector("#ment-row6-img").style.display ="none"
    gsap.to("#ment-row6-img img",{
        height:"0%"
    })
})




// Help Annimation


document.querySelector("#help-crl1").addEventListener("mouseover", function () {
    document.querySelector("#help-under-crl1").style.scale = "1";
    document.querySelector("#help-crl1").style.color = "#fff";
})
document.querySelector("#help-crl1").addEventListener("mouseout", function () {
    document.querySelector("#help-under-crl1").style.scale = "0";
    document.querySelector("#help-crl1").style.color = "#000";
})
document.querySelector("#help-crl2").addEventListener("mouseover", function () {
    document.querySelector("#help-under-crl2").style.scale = "1";
    document.querySelector("#help-crl2").style.color = "#fff";
})
document.querySelector("#help-crl2").addEventListener("mouseout", function () {
    document.querySelector("#help-under-crl2").style.scale = "0";
    document.querySelector("#help-crl2").style.color = "#000";
})
document.querySelector("#help-crl3").addEventListener("mouseover", function () {
    document.querySelector("#help-under-crl3").style.scale = "1";
    document.querySelector("#help-crl3").style.color = "#fff";
})
document.querySelector("#help-crl3").addEventListener("mouseout", function () {
    document.querySelector("#help-under-crl3").style.scale = "0";
    document.querySelector("#help-crl3").style.color = "#000";
})
document.querySelector("#help-crl4").addEventListener("mouseover", function () {
    document.querySelector("#help-under-crl4").style.scale = "1";
    document.querySelector("#help-crl4").style.color = "#fff";
})
document.querySelector("#help-crl4").addEventListener("mouseout", function () {
    document.querySelector("#help-under-crl4").style.scale = "0";
    document.querySelector("#help-crl4").style.color = "#000";
})
document.querySelector("#help-crl5").addEventListener("mouseover", function () {
    document.querySelector("#help-under-crl5").style.scale = "1";
    document.querySelector("#help-crl5").style.color = "#fff";
})
document.querySelector("#help-crl5").addEventListener("mouseout", function () {
    document.querySelector("#help-under-crl5").style.scale = "0";
    document.querySelector("#help-crl5").style.color = "#000";
})









