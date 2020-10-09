import React, { useState,useRef, useEffect, Component } from 'react'
import {
    Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Button, Label } from 'reactstrap';

// Canvas
const totalShips = 20;
const space = 10;
const destination = [[760,20],[760,760]]
const ships=[];
var startAnimation;
var isAnimationOn = false;

// Ship class
class Ship {
    constructor(xPosition, yPosition) {
        this.xPosition = xPosition;
        this.yPosition = yPosition;
        this.speed = Math.random() *2+ 0.5;
        let ind = Math.random() < 0.5 ? 0 : 1;
        this.destinationX = destination[ind][0];
        this.destinationY = destination[ind][1];
        this.slope = (this.destinationY - yPosition) / (this.destinationX - xPosition);
        this.incrementX = this.speed / Math.sqrt(1 + this.slope ** 2);
        this.incrementY = (this.slope*this.speed) / Math.sqrt(1 + this.slope ** 2);
    }
}

function newAnimation(ctx){
    for (let i = 0; i < totalShips; i++) {
        var x = Math.random() * (destination[0][0] - space) + space;
        var y = Math.random() * (ctx.canvas.height - destination[0][1] - space) + destination[0][1];
        ships[i] = (new Ship(x, y));
    }
}

// Animation function
function animate(ctx) {

    ctx.fillStyle = '#42a7f5';
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    

    ctx.fillStyle = 'green';

    for (let i = 0; i < totalShips; i++) {
        ctx.beginPath();
        ctx.arc(ships[i].xPosition, ships[i].yPosition, 5, 0 * Math.PI, 2 * Math.PI);
        ctx.fill();
    }

    ctx.fillStyle = 'black';

    ctx.fillRect(destination[0][0], destination[0][1], 20, 20);
    ctx.fillRect(destination[1][0], destination[1][1], 20, 20);

    for (let i = 0; i < totalShips; i++) {
        if (ships[i].incrementX>0) {
            if (ships[i].xPosition < ships[i].destinationX){
                ships[i].xPosition += ships[i].incrementX;
            }
        } else {
            if (ships[i].xPosition > ships[i].destinationX){
                ships[i].xPosition += ships[i].incrementX;
            }
        }

        if (ships[i].incrementY>0) {
            if (ships[i].yPosition < ships[i].destinationY){
                ships[i].yPosition += ships[i].incrementY;
            }
        } else {
            if (ships[i].yPosition > ships[i].destinationY){
                ships[i].yPosition += ships[i].incrementY;
            }
        }
    }
}

// Pause Animation
function pauseAnimation() {
    clearInterval(startAnimation);
    isAnimationOn = false;
}

// Play Animation
function playAnimation(context) {
    if (!isAnimationOn) {
        startAnimation = setInterval(()=>animate(context), 30);
        isAnimationOn = true;
    }
}

// Closest Pair function
function calculateClosestPair(ctx,ships) {

    pauseAnimation();

    // Calculate closest pair
    var minDistance = Number.MAX_VALUE;
    var closestShips = [null, null];
    var numberOfShips = ships.length;

    function calculateDistance(ship1,ship2){
        return Math.sqrt((ship1.xPosition - ship2.xPosition)**2 + (ship1.yPosition - ship2.yPosition)**2);
    }

    for (let i = 0; i < numberOfShips; i++) {
        for (let j = i+1; j < numberOfShips; j++) {
            
            if (!(ships[i].xPosition >= ships[i].destinationX &&
                ships[j].xPosition >= ships[i].destinationX )){

                var distance = calculateDistance(ships[i], ships[j]);
                if ( distance < minDistance) {
                    closestShips[0] = ships[i];
                    closestShips[1] = ships[j];
                    minDistance = distance;
                }
            }

        }
    }

    // Animate the Closest Ships
    ctx.fillStyle = 'red';

    ctx.beginPath();
    ctx.arc(closestShips[0].xPosition, closestShips[0].yPosition, 5, 0 * Math.PI, 2 * Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(closestShips[1].xPosition, closestShips[1].yPosition, 5, 0 * Math.PI, 2 * Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(closestShips[0].xPosition, closestShips[0].yPosition);
    ctx.lineTo(closestShips[1].xPosition, closestShips[1].yPosition);
    ctx.stroke();   
}

// Closest Pair (Calculate)
function closestPair(ctx){
    calculateClosestPair(ctx,ships);
}

// Closest Pair (Select)
function selectedClosestPair(ctx,x1,x2,y1,y2){
    animate(ctx);
    // Animate square
    ctx.beginPath();
    ctx.rect(x1, y1, x2-x1, y2-y1);
    ctx.stroke();

    var selectedShips = [];

    for(let i=0; i<totalShips; i++){
        if (ships[i].xPosition>=x1 && ships[i].xPosition<=x2
            && ships[i].yPosition>=y1 && ships[i].yPosition<=y2){
            selectedShips.push(ships[i]);
        }
    }

    if (selectedShips.length>1){
        calculateClosestPair(ctx,selectedShips);
    }
}

function clearHighlights(ctx){
    animate(ctx);
}

const Canvas = props => {

    const ctx=useRef(null)
    const canvasRef = useRef(null)
    const [on, setOn] = useState(false);
    const [x1, setx1] = useState(0);
    const [y1, sety1] = useState(0);
    const [x2, setx2] = useState(0);
    const [y2, sety2] = useState(0);


    useEffect(() => {
        
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        context.canvas.width=800;
        context.canvas.height=800;
        ctx.current=context;

        newAnimation(context);
        animate(context);

        return context;
    },[ctx]);

    function a(){
        playAnimation(ctx.current);
    }

    function b(){
        pauseAnimation(ctx.current);
    }

    function c(){
        pauseAnimation();
        newAnimation(ctx.current);
        animate(ctx.current);
    }

    function d(){
        closestPair(ctx.current);
    }

    function e(){
        pauseAnimation(ctx.current);
        toggle();
    }

    function f(){
        clearHighlights(ctx.current);
    }

    function toggle(){
        setOn(!on);
    }

    function submit(){
        setOn(!on);
        selectedClosestPair(ctx.current,x1,x2,y1,y2);
    }

    function x1Change(e){
        setx1(e.target.value);
    }

    function x2Change(e){
        setx2(e.target.value);
    }

    function y1Change(e){
        sety1(e.target.value);
    }
    
    function y2Change(e){
        sety2(e.target.value);
    }
    return (
        <div class="container">
            <canvas ref={canvasRef}/>
            
            <div class="row btn-group d-flex justify-content-center"  role="group" >
                <Button variant="primary" onClick={a}>Play</Button>
                <Button variant="primary" onClick={b}>Pause</Button>
                <Button variant="primary" onClick={c}>New</Button>
                <Button variant="primary" onClick={d}>Calculate</Button>
                <Button variant="primary" onClick={e}>Select</Button>
                <Button variant="primary" onClick={f}>Clear</Button>
            </div>

            <Modal isOpen={on} toggle={toggle}>
                <ModalHeader>Enter Coordinates</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label htmlFor="x1">X1</Label>
                            <Input type="text" id="x1" name="x1"
                            onChange={x1Change}/>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="y1">Y1</Label>
                            <Input type="text" id="y1" name="y1"
                            onChange={y1Change}/>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="x2">X2</Label>
                            <Input type="text" id="x2" name="x2"
                            onChange={x2Change}/>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="y2">Y2</Label>
                            <Input type="text" id="y2" name="y2"
                            onChange={y2Change}/>
                        </FormGroup>
                        <Button onClick={submit} color="primary">Calculate</Button>
                    </Form>
                </ModalBody>
            </Modal>

        </div>
    )
}



export default Canvas;
