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
