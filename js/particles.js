// ======================================
// IAN 18 - Particle Engine
// ======================================

const canvas = document.getElementById("fx");
const ctx = canvas.getContext("2d");

function resizeCanvas(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();

const particles = [];

class Particle{

    constructor(x,y){

        this.x=x;
        this.y=y;

        this.vx=(Math.random()-0.5)*5;
        this.vy=(Math.random()-1.2)*5;

        this.life=60;

        this.size=Math.random()*4+2;

    }

    update(){

        this.x+=this.vx;
        this.y+=this.vy;

        this.vy+=0.03;

        this.life--;

    }

    draw(){

        ctx.beginPath();

        ctx.fillStyle=`rgba(255,180,50,${this.life/60})`;

        ctx.arc(this.x,this.y,this.size,0,Math.PI*2);

        ctx.fill();

    }

}

function spawnParticles(x,y,n=8){

    for(let i=0;i<n;i++){

        particles.push(new Particle(x,y));

    }

}

function animateParticles(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    for(let i=particles.length-1;i>=0;i--){

        particles[i].update();

        particles[i].draw();

        if(particles[i].life<=0){

            particles.splice(i,1);

        }

    }

    requestAnimationFrame(animateParticles);

}

animateParticles();