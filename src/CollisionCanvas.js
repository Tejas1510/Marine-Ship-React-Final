import React, { useState,useRef, useEffect, Component } from 'react';
import Nav from './assets/img/boat.png'
import ocean from './assets/img/ocean.png'
import port from './assets/img/island.png'

// Canvas
const totalShips = 20;
const midis=25;
const ships=[];
const width_final=1000;
const height_final=800;

// Ship class
class Ship {
    constructor(startX, startY, endX, endY) {
        this.xPosition = startX;
        this.yPosition = startY;

        this.startX = startX;
        this.startY = startY;
        this.endX = endX;
        this.endY = endY;

        var Angle = Math.atan2(endY - startY, endX - startX);
        var runn=true
        
        var Per_Frame_Distance =1+Math.random();//0-1

        this.incrementX = Math.cos(Angle) * Per_Frame_Distance;
        this.incrementY = Math.sin(Angle) * Per_Frame_Distance;

        this.xoriginal = Math.cos(Angle) * Per_Frame_Distance;
        this.yoriginal =Math.sin(Angle) * Per_Frame_Distance;
        
    }

    stop(){
        this.incrementX=0;
        this.incrementY=0;
        this.runn=false;
    }

    resume(){
        this.incrementX=this.xoriginal;
        this.incrementY=this.yoriginal;
    }


}

var imageObj2 = new Image();
imageObj2.src = ocean
var imageObj1 = new Image();
imageObj1.src = Nav
var imageObj3 = new Image();
imageObj3.src = port

function newAnimation(){
    for(let i=0;i<(totalShips/2);i++){

        ships.push(new Ship(Math.floor(Math.random() * 1000),1,Math.floor(Math.random() * 1000),Math.floor(Math.random() * 800)      ))// x=rand y=0   x=rand y=500
        ships.push(new Ship(1,Math.floor(Math.random() * 800), Math.floor(Math.random() * 1000),Math.floor(Math.random() * 800)     ))//  x=0 y=rand  x=500 y=rand  
        ships.push(new Ship(Math.floor(Math.random() * 1000),800,Math.floor(Math.random() * 1000),Math.floor(Math.random() * 800)    ));// x=rand y=500 x= rand y=0
        ships.push(new Ship(1000,Math.floor(Math.random() * 800),Math.floor(Math.random() * 1000),Math.floor(Math.random() * 800) ));// x=500  y=rand x=0 y=rand
    
    }
}

function backtooriginal(){
    for(let i=0;i<ships.length;i++){
        ships[i].resume();
    }
}

function distance1(i,k){
    var d=(  (ships[i].xPosition-ships[k].xPosition)**2+(ships[i].yPosition-ships[k].yPosition)**2)**0.5
    return d
}


function running(ships){
    backtooriginal();

    for(let i=0;i<ships.length;i++){

        for(let k=0;k<ships.length;k++ ){

            if (i!=k){

                
                if (distance1(i,k)<=midis){
                    ships[k].stop()
                    ships[i].resume()
                    
                }

            }
        }
    }
}

function animate(ctx) {

    ctx.drawImage(imageObj2,0,0,width_final,height_final);
        
    ctx.fillStyle = 'green';
    for (let i = 0; i < totalShips; i++) {
        ctx.beginPath();
        ctx.drawImage(imageObj1,ships[i].xPosition-15, ships[i].yPosition-15,30,30);
        ctx.fill();
    }

    running(ships)

    for (let i in ships) {
    
        ships[i].xPosition += ships[i].incrementX;
        ships[i].yPosition += ships[i].incrementY;

        if (ships[i].xPosition >1200 || ships[i].yPosition > 1200 ||
            ships[i].xPosition <-200 || ships[i].yPosition < -200)
        {
            
            ships[i].xoriginal=0
            ships[i].yoriginal=0
        }

        
    }
}

const CollisionCanvas = props => {

    const ctx=useRef(null)
    const canvasRef = useRef(null)

    useEffect(() => {
        
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        context.canvas.width=1000;
        context.canvas.height=800;
        ctx.current=context;

        newAnimation();
        setInterval(() => {
            animate(context);
        }, 30);

    });

    return (
        <div class="container">
            <canvas ref={canvasRef}/>
        </div>
    )
}



export default CollisionCanvas;
