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

    function setTimer(){
        time = 60;
        interval = setInterval(function(){
            if (time == 0){
                playSound(bell_sound);
                loseLife();
            }
        },  1000);
    };

    function loseLife(){

    }

    function playSound(){

    }

    function writeMessage(){

    }

    let line1 = new Line (Math.floor((Math.random() * 3 ) + 1), -1, 34, 1);
    let line2 = new Line (Math.floor((Math.random() * 3 ) + 1), 1, 28, 2);
    let line3 = new Line (Math.floor((Math.random() * 3 ) + 1), -1, 33, 3);
    let line4 = new Line (Math.floor((Math.random() * 3 ) + 1), 1, 34, 4);
    let line5 = new Line (Math.floor((Math.random() * 3 ) + 1), -1, 54, 5);

    let line6 = new Line (Math.floor((Math.random() * 3 ) + 1), -1, 117, 6);
    let line7 = new Line (Math.floor((Math.random() * 3 ) + 1), -1, 180, 7);
    let line8 = new Line (Math.floor((Math.random() * 3 ) + 1), -1, 84, 8);
    let line9 = new Line (Math.floor((Math.random() * 3 ) + 1), -1, 180, 7);
    let line10 = new Line (Math.floor((Math.random() * 3 ) + 1), -1, 117, 6);



    function main_loop(){

    }

    function whatKey(){

    }


}

