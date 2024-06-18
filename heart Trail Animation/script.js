const bodyEl = document.querySelector("body");
bodyEl.addEventListener("mousemove", (dets)=>{
    const xpos = dets.x;
    const ypos = dets.y;
    const divEl = document.createElement("div");
    divEl.style.left = xpos + "px";
    divEl.style.top = ypos + "px";
    const size = Math.random() * 100;
    divEl.style.width = size + "px";
    divEl.style.height = size + "px";
    bodyEl.appendChild(divEl);
    setTimeout(function(){
        divEl.remove();
    }, 6000);
})