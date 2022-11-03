let hamb = document.getElementById("hamburger")
let mn = document.getElementsByClassName("menu")[0]
hamb.addEventListener('click',()=>{
    if(mn.style.left === "-100%"){
        mn.style.left = "0%"
    }
    else{
        mn.style.left = "-100%"
    }
})


let vl = gsap.timeline()

vl
.to(".loader",{
    delay:1,
    y : -2000

})
.to(".inside",{
    y:-2000,
    duration:0.2
})
.from(".navbar",{
    duration:0.2,
    y:20
})
.from([".content h1",".content p"],{

    opacity:0,
    duration:1,
    onStart:function(){
        $('.content h1').textillate({ in: { effect: 'fadeInUp', sync:true } });
    }
   
})
.from(".content #join",{
    opacity:0,
    duration:0.5,
    scale:1.5
})
