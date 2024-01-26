function LaunchGame(){
    let life_count = 3;
    let time = 60;
    let score = 0;
    let wl_full = 0;
    let loading = 0;


    let canvas = document.getElementById("board");   

    if (canvas.getContext){
        ctx = canvas.getContext('2d');
        setInterval(main_loop, 16);
        window.addEventListener('keydown', whatKey, true);
        loading = loading + 5;

    }

    let frog_sound = new Audio("sounds/frog.wav");
    let water_sound = new Audio("sounds/water.wav");
    let hit_sound = new Audio("sounds/hit.wav");
    let bell_sound = new Audio("sounds/bell.wav");
    let boing_sound = new Audio("sounds/boing.wav");

    frog_sound.oncanplaythrough = loading = loading + 3;
    water_sound.oncanplaythrough = loading = loading + 3;
    hit_sound.oncanplaythrough = loading = loading + 3;
    bell_sound.oncanplaythrough = loading = loading + 3;
    boing_sound.oncanplaythrough = loading = loading + 3;

    let imgs = new Array(21);

    for (i=0; i<imgs.length; i++){
        imgs[i] = new Image();
        imgs[i].onload = function(){
            loading = loading + 3;
        };
        imgs[i].src = "imgs/img_"+i+".gif";
    }

    function main_loop(){

    }

    function whatKey(){

    }


}

