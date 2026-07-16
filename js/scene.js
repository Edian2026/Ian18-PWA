// =========================================
// IAN 18 - Scene Manager
// =========================================

const Scene = {

    intro: document.getElementById("intro"),
    bomb: document.getElementById("bomb"),
    card: document.getElementById("card"),
    flash: document.getElementById("flash"),

    start(){

        this.card.style.opacity = "0";

        this.bomb.style.opacity = "0";

        setTimeout(()=>{

            this.dropBomb();

        },2500);

    },

    dropBomb(){

        this.bomb.style.opacity="1";

        this.bomb.classList.add("bomb-drop");

        setTimeout(()=>{

            this.card.classList.add("card-show");

        },1800);

        setTimeout(()=>{

    const r = this.bomb.getBoundingClientRect();

    explode(
        r.left + r.width/2,
        r.top + r.height/2
    );

},1700);

    }

};

window.addEventListener("load",()=>{

    Scene.start();

});
function showInvitation(){

    const card=document.getElementById("card");

    card.classList.add("card-show");

}