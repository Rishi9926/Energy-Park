var t1 = gsap.timeline()
t1.from('.overlay .nav .l img, .l h4, .r button',{
    y:-30,
    duration:1,
    opacity: 0,
    daley:0.2,
    stagger:.2,
    // scrub:2
})

let box = document.querySelectorAll(".box1");
let h = document.querySelectorAll(".box1 h1")

box.forEach(function(dets){
    dets.addEventListener("mouseenter",function(val) {
        dets.style.color = "#fff"
        dets.style.backgroundColor = "yellow"
    })

    dets.addEventListener("mouseleave",function(val) {
        dets.style.color = "#000"
        dets.style.backgroundColor = ""
    })
})
