let crsr = document.querySelector("#cursor")
let move = document.querySelector("#cursor-blur")

document.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"
    move.style.left = dets.x -250 +"px"
    move.style.top = dets.y -250 +"px"
})





gsap.to("#nav",{
    backgroundColor:"#000",
    height:"110px",
    duration:0.5,
    delay:1,
    scrollTrigger:{
        trigger:"#Nav",
        scroller:"body",
        start:"top -10%",
        end:" top -11%",
        scrub: 1
    }
})
gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        scrooler:"body",
        start:"top -30%",
        end:"top -80%",
        scrub:2

    }
})