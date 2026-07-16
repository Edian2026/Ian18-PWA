// ============================================
// IAN 18 EXPERIENCE
// Explosion Engine v2.0
// ============================================

function playExplosionSound() {

    const AudioContext = window.AudioContext || window.webkitAudioContext;

    if (!AudioContext) return;

    const ctx = new AudioContext();

    const now = ctx.currentTime;

    // BOOM grave
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(120, now);
    osc.frequency.exponentialRampToValueAtTime(35, now + 0.6);

    gain.gain.setValueAtTime(0.8, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.8);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.8);

    // Ruido
    const buffer = ctx.createBuffer(1, ctx.sampleRate * 0.8, ctx.sampleRate);
    const data = buffer.getChannelData(0);

    for (let i = 0; i < data.length; i++) {
        data[i] = Math.random() * 2 - 1;
    }

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = 500;

    const noiseGain = ctx.createGain();
    noiseGain.gain.value = 0.4;

    noise.connect(filter);
    filter.connect(noiseGain);
    noiseGain.connect(ctx.destination);

    noise.start(now);
    noise.stop(now + 0.6);

}

function flashExplosion(){

    const flash=document.getElementById("flash");

    if(!flash) return;

    flash.classList.add("flash-active");

    setTimeout(()=>{

        flash.classList.remove("flash-active");

    },200);

}

function shakeScreen(){

    document.body.classList.add("shake");

    setTimeout(()=>{

        document.body.classList.remove("shake");

    },500);

}

function explode(x,y){

    if(typeof spawnParticles==="function"){

        spawnParticles(x,y,280);

        setTimeout(()=>{

            spawnParticles(x,y,180);

        },60);

        setTimeout(()=>{

            spawnParticles(x,y,120);

        },140);

    }

    flashExplosion();

    shakeScreen();

    playExplosionSound();

    if(navigator.vibrate){

        navigator.vibrate([180,60,180]);

    }

    const bomb=document.getElementById("bomb");

    if(bomb){

        bomb.style.transition="opacity .4s";

        bomb.style.opacity="0";

    }

}