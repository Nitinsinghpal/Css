gsap.from("h1",{
    opacity:0,
    duration:1,
    x:30,
    delay:1,
    stagger:1
})

gsap.from("#box",{
    x:1000,
    duration:2,
    delay:1,
    rotate:100,
    borderRadius:"50%",
    repeat:-1,
    yoyo:true
})

var tl = gsap.timeline()

tl.to("#box1",{
    x:1000,
    duration:2,
    delay:1
})
tl.to("#box2",{
    x:1000,
    duration:2,
    delay:1
})
tl.to("#box3",{
    x:1000,
    duration:2,
    delay:1
})