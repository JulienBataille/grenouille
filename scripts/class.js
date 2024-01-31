//Line ou Voie d'objets(Enemies/Platformes) caractérisé par une direction,vitesse,Largeur d'objet,type d'objet(le type est utilisé pour déterminer l'image associée à l'objet)
function Line(speed,dir,width,type){
	this.speed=speed;
	this.dir=dir;
	this.width=width;	
	this.type=type;
}

//Objet(Enemies/Platfomes) caractérisé par ses positions x,y et par une "Line"
function Obj(x,y,line){ 
   	this.x=x; 
    this.y=y; 
	this.line=line;
	
	//Fonction qui determine si l'objet et en collision avec le frog	
	this.inCollision=function(frog){
		return frog.x+25>=this.x && frog.x+5<=(this.x+this.line.width)
		// if(frog.x+25>=this.x && frog.x+5<=(this.x+this.line.width)){
		// 	return true;
		// }
		// else{
		// 	return false;
		// }
	}
	//Fonction qui déplace l'object selon sa vitesse & direction	
	this.move=function(){
		this.line.dir == 1
		? this.x = this.x >650
			? - (this.line.width*3) 
			: this.x + (this.line.speed*this.line.dir)
		: this.x = this.x < - this.line.width 
			? 650+(this.line.width*3) 
			: this.x + (this.line.speed*this.line.dir);
	// 	if(this.line.dir==1){
	// 		if(this.x>650){
	// 			this.x=-(this.line.width*3);
	// 		}
	// 		else{
	// 			this.x=this.x+(this.line.speed*this.line.dir);
	// 		}
	// 	}
	// 	else{
	// 		if(this.x<-this.line.width){
	// 			this.x=650+(this.line.width*3);
	// 		}
	// 		else{
	// 			this.x=this.x+(this.line.speed*this.line.dir);
	// 		}
	// 	}
				
	// }

	}
}
//Grounouille caractérisé par ses positions x,y son état(utilisé pour le bloqué) 
//et son degré(utilisé pour le faire tourner lors de l'affichage)		
function Frog(){
	this.x=310; 
    this.y=380;
	this.state=false;
	this.deg=0;
	
	this.block=function(){
		this.state=false;	
	}
	
	this.unBlock=function(){
		this.state=true;	
	}
	
	this.isNotBlocked=function(){
		return this.state;	
	}
	
	this.goUp=function(){
		if(this.state){
			this.y = this.y > 20 ? this.y -30 : this.y ;
			this.deg=0;
			// if(this.y>20){
			// 	this.y=this.y-30;
			// }
		}
	}
	
	this.goDown=function(){
		if(this.state){
			this.x = this.x > 310  && this.y ==170 
			? this.x - (this.x-10)%30 
			: this.x + (this.x-10)%30 ;

			this.y = this.y < 380 
			? this.y +30 
			: this.y;

			this.deg=180;
			// if(this.y==170){ 
			// 	if(this.x>310){
			// 		while(((this.x-10)%30)!=0){
			// 			this.x--;
			// 		}
			// 	}else{
			// 		while(((this.x-10)%30)!=0){
			// 			this.x++;
			// 		}
			// 	}
			// }
			// if(this.y<380){
			// 	this.y=this.y+30;
			// }

		}
	}
	
	this.goLeft=function(){
		if(this.state){
			this.x = this.x >10 
			? this.x - 30 
			: this.x ;

			this.deg=-90;
				// if(this.x>10){
			// 	this.x=this.x-30;
			// }
		}
	}
	
	this.goRight=function(){
		if(this.state){
			this.x = this.x < 610 
			? this.x +30 
			: this.x ;

			this.deg=90;
				// if(this.x<610){
			// 	this.x=this.x+30;
			// }
		}
	}	
			
	this.initPos=function(){
			this.unBlock();
			this.x=310;
			this.y=380;
			this.deg=0;
	}	
	
	this.isOut=function(){
		return this.x<=0 || this.x >= 620 ;
		// if(this.x<=0 || this.x>=620){
		// 	return true;
		// }
		// else{
		// 	return false;
		// }
	}
	
	this.move=function(speed,dir){
		(this.state) ? this.x += (speed*dir): this.x ;
		// if(this.state==true){
		// 	this.x=this.x+(speed*dir);
		// }
	}
	
	this.hide=function(){
		this.block();
		this.x=-30;
		this.y=-30;
	}	
}

//Nénuphar caractérisé par ses positions x,y et son état(si il est utilisé ou pas)
function WaterLily(x,y){
	this.x=x; 
    this.y=y;
	this.state=false;
	
	//Fonction qui retourne l'état du nénuphar (si il est utilisé ou pas)		
	this.isUsed=function(){
		return this.state;
	}
	
	//Fonction	qui determine si le frog est à l'intérieur du nénuphar ou pas
	this.contains=function(frog){
		return frog.x>=this.x && (frog.x+30)<=(this.x+86) && !this.isUsed()
		// if(frog.x>=this.x && (frog.x+30)<=(this.x+86) && !this.isUsed()){
		// 	return true;
		// }
		// else{
		// 	return false;
		// }
	}
	
	this.setUsed=function(){
		this.state=true;	
	}
	this.setUnused=function(){
		this.state=false;	
	}
}