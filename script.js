const canvas=document.getElementById("canvas");
const ctx=canvas.getContext("2d");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
let particles=[];

// Creating class
class Particles{
    constructor(){
        this.x=Math.random()*window.innerWidth;
        this.y=Math.random()*window.innerHeight;
        this.size=Math.random()*2+1;
        this.speedX=Math.random()*2.5+0.5;
        this.speedY=Math.random()*3+0.5;
        this.color="red";

    }
    draw(){
        ctx.fillStyle=this.color;
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.size,0,2*Math.PI);
        ctx.fill();
    }
}

//! Generating particle data.
function generator(){
    for(let i=0;i<=999;i++){
        particles.push(new Particles);
    }
}


function screenUpdate(){
    requestAnimationFrame(screenUpdate);
    generator();
    particles.forEach((data,index)=>{
        console.log(data.draw());

    })
    
}
screenUpdate();