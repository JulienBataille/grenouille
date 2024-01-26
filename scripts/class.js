function Line(speed, dir, width, type){
    this.speed = speed;
    this.dir = dir;
    this.width = width;
    this.type = type;

};

function Obj(x, y, line){
    this.x = x;
    this.y = y;
    this.line = line;

    this.inCollision = function(frog){
        if (frog.x + 25 >= this.x && frog.x + 5 <= (this.x + this.line.width)){
            return true;
        } else {
            return false;
        }
    }

    this.move = function (){
        if (this.line.dir == 1){
            if (this.x > 650){
                this.x = -(this.line.width*3);
            } else{
                this.x = this.x + (this.line.speed * this.line.dir);
            }
        } else{
            if (this.x < -this.line.width){
                this.x = 650 + (this.line.width * 3);
            } else{
                this.x = this.x + (this.line.speed * this.line.dir);
            }
        }
    }

}