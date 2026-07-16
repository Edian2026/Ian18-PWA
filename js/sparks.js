// ======================================
// IAN 18 - Spark Engine v0.3.4
// ======================================

const spark = document.getElementById("spark");

const container = document.createElement("div");
container.id = "spark-container";
document.body.appendChild(container);

function spawnSpark(){

    if(!spark) return;

    const r = spark.getBoundingClientRect();

    const p = document.createElement("span");

    p.className = "flying-spark";

    p.style.left = (r.left + r.width/2) + "px";
    p.style.top  = (r.top + r.height/2) + "px";

    const dx = (Math.random()*120)-60;
    const dy = -(Math.random()*90)-40;

    p.style.setProperty("--dx",dx+"px");
    p.style.setProperty("--dy",dy+"px");

    const size = 2 + Math.random()*6;

    p.style.width=size+"px";
    p.style.height=size+"px";

    container.appendChild(p);

    setTimeout(()=>{

        p.remove();

    },800);

}

setInterval(spawnSpark,45);