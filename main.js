let home = document.getElementById("home");
let megaMenu = document.getElementById("mega");
let upBtn = document.getElementById("up")
let ul1 = document.getElementById("ul1")
let bars = document.getElementById("bars")
let closeIcon = document.getElementById("close")

megaMenu.onmouseleave = function() {
    this.classList.add("hide")
    setTimeout(() => {
        this.classList.remove("mega2");
    },500)
}



home.onclick = () => {
  megaMenu.classList.toggle("mega2");
  megaMenu.classList.remove("hide");
};

bars.onclick = function(){
    ul1.classList.toggle("icon-click");
    this.style.display = "none"
    closeIcon.style.display = "block"
};

closeIcon.onclick = function(){
    ul1.classList.remove("icon-click");
    megaMenu.classList.remove("mega2")
    this.style.display = "none"
    bars.style.display = "block"
};


window.onscroll =  ()=>{
    if (scrollY >= 500) {
        upBtn.style.display = "block"
    }else{
        upBtn.style.display = "none"
    }
}

upBtn.onclick =  ()=>{
    scroll({
        top:0,
        behavior:"smooth"
    })
}
