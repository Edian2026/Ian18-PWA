// ===========================
// Fuse Engine
// ===========================

const igniteBtn=document.getElementById("igniteBtn");

if(igniteBtn){

    igniteBtn.addEventListener("click",startFuse);

}

function startFuse(){

    igniteBtn.classList.add("hideIgnite");

    // Desbloquea el audio en iPhone y Android
    playExplosionSound();

    let count=3;

    const bomb=document.getElementById("bomb");

    const timer=setInterval(()=>{

        bomb.style.filter=
        `drop-shadow(0 0 ${count*12}px red)`;

        count--;

        if(count<0){

            clearInterval(timer);

            const r=bomb.getBoundingClientRect();

            explode(

                r.left+r.width/2,

                r.top+r.height/2

            );

            showInvitation();

        }

    },1000);

}