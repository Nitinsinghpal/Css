var main = document.querySelector('#main');
var cursor = document.querySelector('#cursor');
var image = document.querySelector('#image');

main.addEventListener('mousemove', function(e) {
    gsap.to(cursor,{
        x: e.x,
        y: e.y,
        duration: 1,
        // ease: "back.out",
        // duration: 0.5
    })
})

image.addEventListener("mouseenter", function(){
    cursor.innerHTML = "View More"
    gsap.to(cursor,{
        scale: 3,
    })
})
image.addEventListener("mouseleave", function(){
    cursor.innerHTML = ""
    gsap.to(cursor,{
        scale: 1,
    })
})