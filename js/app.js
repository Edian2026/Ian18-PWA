const target=new Date("2026-08-22T21:00:00");

function update(){

const now=new Date();

const diff=target-now;

const d=Math.floor(diff/1000/60/60/24);

const h=Math.floor(diff/1000/60/60)%24;

const m=Math.floor(diff/1000/60)%60;

const s=Math.floor(diff/1000)%60;

days.textContent=d;

hours.textContent=h;

minutes.textContent=m;

seconds.textContent=s;

}

setInterval(update,1000);

update();