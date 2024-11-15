gsap.to("#page2 h1",{
    transform:"translateX(-48%)",
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        markers:true,
        start:"top 0%",
        end:"bottom -150%",
        scrub:true,
        pin:true
    }
})