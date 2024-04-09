function lines (){
    let sizeWidth = Math.random() * 22;
    let duration = Math.random() * 3;

    let e = document.createElement('div');
    e.setAttribute("class","circle");
    document.body.appendChild(e);

    e.style.width = 12 + sizeWidth + "px";
    e.style.left  = Math.random()* + innerWidth + "px";
    e.style.animation = 2 + duration + "s";

    setTimeout(()=>{
        document.body.removeChild(e);
    }, 5000)
}

setInterval(() => {
    lines();
}, 200);