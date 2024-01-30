function LaunchGame(){
    let life_count = 3;
    let time = 60;
    let score = 0;
    let wl_full = 0;
    let loading = 0;
    let begin = false;


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

    function playSound(sound){
        if (frog.isNotBlocked()){
            sound.play() ;
        }
    }

    function writeMessage(){

    }

    let line1 = new Line (Math.floor((Math.random() * 3 ) + 1), -1, 34, 1);
    let line2 = new Line (Math.floor((Math.random() * 3 ) + 1), 1, 28, 2);
    let line3 = new Line (Math.floor((Math.random() * 3 ) + 1), -1, 33, 3);
    let line4 = new Line (Math.floor((Math.random() * 3 ) + 1), 1, 34, 4);
    let line5 = new Line (Math.floor((Math.random() * 3 ) + 1), -1, 54, 5);

    let line6 = new Line (Math.floor((Math.random() * 3 ) + 1), 1, 117, 6);
    let line7 = new Line (Math.floor((Math.random() * 3 ) + 1), -1, 180, 7);
    let line8 = new Line (Math.floor((Math.random() * 3 ) + 1), -1, 84, 8);
    let line9 = new Line (Math.floor((Math.random() * 3 ) + 1), -1, 180, 7);
    let line10 = new Line (Math.floor((Math.random() * 3 ) + 1), -1, 117, 6);

    let enms = new Array;
    enms [0] = new Obj(50, 350, line1);
    enms [1] = new Obj(250, 350, line1);
    enms [2] = new Obj(450, 350, line1);
    enms [3] = new Obj(120, 320, line2);
    enms [4] = new Obj(250, 320, line2);
    enms [5] = new Obj(380, 320, line2);
    enms [6] = new Obj(120, 290, line3);
    enms [7] = new Obj(250, 290, line3);
    enms [8] = new Obj(380, 290, line3);
    enms [9] = new Obj(120, 260, line4);
    enms [10] = new Obj(250, 260, line4);
    enms [11] = new Obj(380, 260, line4);
    enms [12] = new Obj(120, 230, line5);
    enms [13] = new Obj(250, 230, line5);

    let plts = new Array;
    plts[0] = new Obj(50, 170, line6);
    plts[1] = new Obj(450, 170, line6);
    plts[2] = new Obj(850, 170, line6);
    plts[3] = new Obj(120, 140, line7);
    plts[4] = new Obj(450, 140, line7);
    plts[5] = new Obj(790, 140, line7);
    plts[6] = new Obj(320, 110, line8);
    plts[7] = new Obj(620, 110, line8);
    plts[8] = new Obj(920, 110, line8);
    plts[9] = new Obj(120, 80, line9);
    plts[10] = new Obj(420, 80, line9);
    plts[11] = new Obj(720, 80, line9);
    plts[12] = new Obj(120, 50, line10);
    plts[13] = new Obj(320, 50, line10);
    plts[14] = new Obj(720, 50, line10);

    let wls = new Array;
    wls[0] = new WaterLily (42, 0);
    wls[1] = new WaterLily (162, 0);
    wls[2] = new WaterLily (282, 0);
    wls[3] = new WaterLily (402, 0);
    wls[4] = new WaterLily (522, 0);

    let frog = new Frog();
    loading = loading + 17;


    function Frog(){

    }

    function main_loop(){
       if (begin == false){
        ctx.lineJoin = "round";
        ctx.lineWidth = 7;
        ctx.strokeStyle = "#fff";
        ctx.strokeRect(175, 235, 300, 28);
        ctx.fillStyle = "#000";
        ctx.fillRect(175, 235, 300, 28);
        ctx.fillStyle = "#2E6730";
        ctx.fillRect(175, 235, (loading * 3), 28);
        ctx.LineWidth = 3;
        ctx.font = "12pt Comic Sans MS";
        ctx.strokeStyle = "#f2f2f2";
        ctx.fillStyle = "#000";
        ctx.strokeText("Loading " + loading + "%", 275, 255);
        ctx.fillText("Loading " + loading + "%", 275, 255);
       } 
    }

    function whatKey(evt){
        switch(evt.keyCode){
            case 81:
                frog.goLeft(); 
                playSound(boing_sound);
                anim_time = 8;
            break;
            case 68:
                frog.goRight(); 
                playSound(boing_sound);
                anim_time = 8;
            break;
            case 37:
                frog.goLeft(); 
                playSound(boing_sound);
                anim_time = 8;
            break;
            case 83:
                frog.goDown(); 
                playSound(boing_sound);
                anim_time = 8;
            break;
            case 90:
                frog.goUp(); 
                playSound(boing_sound);
                anim_time = 8;
                if (frog.y < last_y && frog.state == true){
                    last_y = frog.y;
                    score = score + 50;
                }
            break;
            case 82:
                if(message_state == 2 || message_state == 3){
                    life_count = 3;
                    score = 0;
                    last_y = 380;
                    wl_full = 0;
                    for (i = 0; i < wls.length;i++ ){
                        wls[i].setUnused();
                    }
                    message_state = 0;
                    frog.initPos();
                    setTimer();
                }
            break;
            case 13:
                if(loading == 100){
                    loading = 0;
                    frog.unBlock();
                    beggin = true;
                    setTimer();
                }
            break;

        }
    }


}

