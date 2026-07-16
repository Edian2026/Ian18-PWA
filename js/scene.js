// =====================================
// IAN 18 EXPERIENCE
// Scene Manager v1.0
// =====================================

const Scene = {

    intro: document.getElementById("intro"),
    main: document.getElementById("main"),
    bomb: document.getElementById("bomb"),

    start(){

        // La tarjeta permanece oculta al comenzar
        this.main.style.opacity = 0;

        // La bomba también
        this.bomb.style.opacity = 0;

        // A los 3.5 segundos baja la bomba
        setTimeout(()=>{

            this.dropBomb();

        },3500);

    },

    dropBomb(){

        this.bomb.style.opacity = 1;
        this.bomb.classList.add("drop");

        // Esperamos que termine la caída
        setTimeout(()=>{

            this.showInvitation();

        },2200);

    },

    showInvitation(){

        this.main.style.transition="opacity 1.2s";

        this.main.style.opacity=1;

    }

};

window.addEventListener("load",()=>{

    Scene.start();

});