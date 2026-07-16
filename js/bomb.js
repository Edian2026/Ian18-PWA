// ==============================
// IAN 18 - Bomb Animation v0.3
// ==============================

const bomb = document.getElementById("bomb");

let angle = 0;
let direction = 1;

function swing(){

    angle += 0.15 * direction;

    if(angle > 8) direction = -1;

    if(angle < -8) direction = 1;

    bomb.style.transform =
        `translateX(-50%) rotate(${angle}deg)`;

    requestAnimationFrame(swing);

}

swing();

// Vibración muy suave

setInterval(()=>{

    bomb.style.marginTop=Math.random()*2+"px";

},60);