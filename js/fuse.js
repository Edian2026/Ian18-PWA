// =====================================
// Fuse Engine v2
// =====================================

const igniteBtn = document.getElementById("igniteBtn");
const ember = document.getElementById("ember");
const bomb = document.getElementById("bomb");

if (igniteBtn) {
    igniteBtn.addEventListener("click", startFuse);
}

function startFuse(){

    igniteBtn.classList.add("hideIgnite");

    // Desbloquea el audio en móviles
    playExplosionSound();

    ember.classList.add("fuse-burning");

    let progress = 0;

    const total = 55;

    const interval = setInterval(()=>{

        progress++;

        ember.style.top = (-10 + progress) + "px";

        bomb.style.transform =
            `translateX(-50%) scale(${1 + progress*0.002})`;

        bomb.style.filter =
            `drop-shadow(0 0 ${progress/2}px red)`;

        // Chispas
        if(typeof spawnParticles==="function"){

            const r = ember.getBoundingClientRect();

            spawnParticles(
                r.left + r.width/2,
                r.top + r.height/2,
                2
            );

        }

        if(progress>=total){

            clearInterval(interval);

            const r = bomb.getBoundingClientRect();

            explode(
                r.left+r.width/2,
                r.top+r.height/2
            );

            showInvitation();

        }

    },55);

}