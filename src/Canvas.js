import React, { useState,useRef, useEffect, Component } from 'react'
import {
    Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Button, Label } from 'reactstrap';
import Nav from './assets/img/boat.png'
import ocean from './assets/img/ocean.png'
import port from './assets/img/port005.png'
import Showdistance from './Distance';

// Canvas
var totalShips = 20;
const space = 10;

const ships=[];
var startAnimation;
var isAnimationOn = false;
const width_final=1000;
const height_final=600;
var dist=0,s1x,s2x,s1y,s2y,sid=1,cls1sid,cls2sid;

const destination = [[width_final-160,60],[width_final-160,height_final-60]]
// Ship class
class Ship {
    constructor(xPosition, yPosition) {
        this.sid = sid;
        this.xPosition = xPosition;
        this.yPosition = yPosition;
        this.speed = Math.random() *2+ 0.5;
        let ind = Math.random() < 0.5 ? 0 : 1;
        if (ind==0){
            this.destinationX = destination[ind][0]+35;
            this.destinationY = destination[ind][1]+30;
        }
        else{
            this.destinationX = destination[ind][0]+35;
            this.destinationY = destination[ind][1]+10;
        }
        
        this.slope = (this.destinationY - yPosition) / (this.destinationX - xPosition);
        this.incrementX = this.speed / Math.sqrt(1 + this.slope ** 2);
        this.incrementY = (this.slope*this.speed) / Math.sqrt(1 + this.slope ** 2);


        var Angle = Math.atan2(this.destinationY - yPosition, this.destinationX - xPosition);
        // var runn=true
        // var reach=false
        var Per_Frame_Distance = 1+Math.random();

        this.incrementX = Math.cos(Angle) * Per_Frame_Distance;
        this.incrementY = Math.sin(Angle) * Per_Frame_Distance;
        this.xoriginal = Math.cos(Angle) * Per_Frame_Distance;
        this.yoriginal =Math.sin(Angle) * Per_Frame_Distance;
        sid+=1;
    }
}

function newAnimation(ctx){
    for (let i = 0; i < totalShips; i++) {
        var x = Math.random() * (destination[0][0] - space) + space;
        var y = Math.random() * (ctx.canvas.height - destination[0][1] - space) + destination[0][1];
        ships[i] = (new Ship(x, y));
    }
}

var imageObj2 = new Image();
imageObj2.src = ocean
var imageObj1 = new Image();
imageObj1.src = Nav
var imageObj3 = new Image();
imageObj3.src = port

// Animation function
function animate(ctx) {

    ctx.drawImage(imageObj2,0,0,width_final,height_final);    
    
    ctx.fillStyle = 'green';
    for (let i = 0; i < totalShips; i++) {
        ctx.beginPath();
        ctx.drawImage(imageObj1,ships[i].xPosition-15, ships[i].yPosition-15,30,30);
        ctx.fill();
    }   

    ctx.drawImage(imageObj3,destination[0][0]-10, destination[0][1]-80, 200, 200);
    ctx.drawImage(imageObj3,destination[1][0]-10, destination[1][1]-100, 200, 200);

    for(let i=0;i<totalShips;i++) {

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

//Merge function Y
function mergey(p, i, k, j) {
    var result = [];
    var length = 0;

    //position counters
    var c1 = i;
    var c2 = k;

    for (var l = 0; l < i; l = l + 1) {
        //result.push(p[l]);
        result[length++] = p[l];
    }

    while (c1 < k || c2 < j) {
        if (c1 < k && c2 < j) {
            if (p[c1].yPosition < p[c2].yPosition) {
                //result.push(p[c1]);
                result[length++] = p[c1];
                c1 = c1 + 1;
            } else {
                //result.push(p[c2]);
                result[length++] = p[c2];
                c2 = c2 + 1;
            }
        } else if (c1 < k) {
            //result.push(p[c1]);
            result[length++] = p[c1];
            c1 = c1 + 1;
        } else if (c2 < j) {
            //result.push(p[c2]);
            result[length++] = p[c2];
            c2 = c2 + 1;
        }
    }

    for (l = j; l < p.length; l = l + 1) {
        //result.push(p[l]);
        result[length++] = p[l];
    }

    return result;
}


//Merge function X
function mergex(p, i, k, j) {
    var result = [];
    var length = 0;

    //position counters
    var c1 = i;
    var c2 = k;

    for (var l = 0; l < i; l = l + 1) {
        //result.push(p[l]);
        result[length++] = p[l];
    }

    while (c1 < k || c2 < j) {
        if (c1 < k && c2 < j) {
            if (p[c1].xPosition < p[c2].xPosition) {
                //result.push(p[c1]);
                result[length++] = p[c1];
                c1 = c1 + 1;
            } else {
                //result.push(p[c2]);
                result[length++] = p[c2];
                c2 = c2 + 1;
            }
        } else if (c1 < k) {
            //result.push(p[c1]);
            result[length++] = p[c1];
            c1 = c1 + 1;
        } else if (c2 < j) {
            //result.push(p[c2]);
            result[length++] = p[c2];
            c2 = c2 + 1;
        }
    }

    for (l = j; l < p.length; l = l + 1) {
        //result.push(p[l]);
        result[length++] = p[l];
    }

    return result;
}

var closestShips = [];

//Distance calculator
function distance(ship1,ship2){
    if (ship1!==undefined && ship2!==undefined){
    return Math.sqrt((ship1.xPosition - ship2.xPosition)**2 + (ship1.yPosition - ship2.yPosition)**2);
    }
    else{
        return Infinity
    }
}

function closest1(ships) {

    function dacHelper(i, j) {

        if (j - i <= 3) {
            if (j - i === 2) {
                //only two ships
                var x = ships[i];
                var y = ships[j - 1];
                //sort them by y-coord
                if (x.yPosition > y.yPosition) {
                    var temp = x;
                    ships[i] = y;
                    ships[j - 1] = temp;
                }

                //return the ships
                console.log(x,y)
                closestShips[0]=x
                closestShips[1]=y
                return distance(x, y);
                
            } else {
                //we have three ships
                var x = ships[i];
                var y = ships[i + 1];
                var z = ships[j - 1];

                //sort them by y-coord
                if (x.yPosition > y.yPosition) {
                    var temp = x;
                    if (y.yPosition > z.yPosition) {
                        ships[i] = z;
                        ships[j - 1] = temp;
                    } else {
                        if (temp.yPosition > z.yPosition) {
                            ships[i] = y;
                            ships[i + 1] = z;
                            ships[j - 1] = temp
                        } else {
                            ships[i] = y;
                            ships[i + 1] = temp;
                        }
                    }
                } else {
                    if (y.yPosition > z.yPosition) {
                        var temp = z;
                        ships[j - 1] = y;
                        if (x.yPosition > temp.yPosition) {
                            ships[i + 1] = x;
                            ships[i] = temp;
                        } else {
                            ships[i + 1] = temp;
                        }
                    }
                }


                //find the closest pair
                //first get distances
                console.log("267",x,y,z)
                var d12 = distance(x, y);
                var d13 = distance(x, z);
                var d23 = distance(y, z);

                var min = Math.min(d12, d13, d23);

                //return the correct pair of ships
                if (min === d12) {
                    closestShips[0]=x
                    closestShips[1]=y
                    // return closestShips;
                } else if (min == d13) {
                    closestShips[0]=x
                    closestShips[1]=z
                    // return closestShips;
                } else {
                    closestShips[0]=y
                    closestShips[1]=z
                    // return closestShips;
                }
            }
        }
         else {
            // let k be the midpoint of the ships we're looking at
            var k = parseInt((i + j) / 2);

            // find closest pair left
            dacHelper(i, k);
            var leftside = [closestShips[0],closestShips[1]]
            console.log("check",leftside)
            console.log("297",leftside[0],leftside[1])
            var deltaL=distance(leftside[0],leftside[1])
            //find closest pair right
            dacHelper(k, j);
            var rightside = [closestShips[0],closestShips[1]]
            console.log("302",rightside[0],rightside[1])
            var deltaR =distance(rightside[0],rightside[1])

            // delta = min(deltaL, deltaR)
            if (deltaL < deltaR) {
                var delta = deltaL;
                closestShips[0]=leftside[0]
                closestShips[1]=leftside[1]
            } else {
                var delta = deltaR;
                closestShips[0]=rightside[0]
                closestShips[1]=rightside[1]
            }

            //merge left and right ships by y-coord
            ships = mergey(ships, i, k, j);

            //create a vertical strip of ships in temporary array
            var tempArray = [];
            var x = ships[k - 1].xPosition
            for (var l = 0, len = ships.length; l < len; l = l + 1) {
                if (Math.abs(x - ships[l].xPosition) <= delta) {
                    //tempArray.push(ships[l]);
                    tempArray[tempArray.length] = ships[l];
                }
            }

            //compare each point in vertical strip (temp array) w/ next
            //seven ships.  If distance < delta, then delta = distance
            for (l = 0, len = tempArray.length; l < len; l = l + 1) {
                var x = tempArray[l];
                for (var m = l + 1; m <= l + 7 && m < len; m = m + 1) {
                    var y = tempArray[m];
                    console.log("333",y,x)
                    var temp = distance(y, x);
                    if (temp < delta) {
                        delta = temp;
                        closestShips[0]=x
                        closestShips[1]=y
                    }
                }
            }
            // return ans;
        }

    }

    ships.sort(function(a, b) {
        return a.xPosition - b.xPosition;
    });

    dacHelper(0, ships.length);

}

function valid(abc){
    var temp007=[]
    for(let i=0;i<abc.length;i++) {
            // if ( !((abc[i].xPosition > abc[i].destinationX-10 && abc[i].yPosition < abc[i].destinationY+70)||
            //      (abc[i].xPosition > abc[i].destinationX-70 && abc[i].yPosition > abc[i].destinationY-70))){
            if(abc[i].xPosition < abc[i].destinationX-10){
                temp007.push(abc[i])
            }
            
    }
    return temp007
    }


// Closest Pair function
function calculateClosestPair(ctx,ships) {

    pauseAnimation();

    // Calculate closest pair
    var minDistance = Number.MAX_VALUE;
    
    var numberOfShips = ships.length;
    

    var temp007=[]
    temp007=valid(ships)
    if (temp007.length>=2){
    closest1(temp007)

    ctx.beginPath();
    ctx.lineWidth = 2; 
    ctx.strokeStyle = "red"; 
    ctx.moveTo(closestShips[0].xPosition, closestShips[0].yPosition);
    ctx.lineTo(closestShips[1].xPosition, closestShips[1].yPosition);
    
    ctx.stroke();   
    dist= distance(closestShips[0],closestShips[1]);
    s1x = closestShips[0].xPosition;
    s1y = closestShips[0].yPosition;
    s2x = closestShips[1].xPosition;
    s2y = closestShips[1].yPosition;
    cls1sid = closestShips[0].sid;
    cls2sid = closestShips[1].sid;
    }
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
    const [show, setShow] = useState(false);
    // const [dist, setDist] = useState(0);

    useEffect(() => {
        
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        context.canvas.width=1000
        context.canvas.height=600;
        ctx.current=context;

        newAnimation(context);
        animate(context);

        return context;
    },[ctx]);

    function a(){
        playAnimation(ctx.current);
        setShow(false);

    }

    function b(){
        pauseAnimation(ctx.current);
        setShow(false);

    }

    function c(){
        pauseAnimation();
        newAnimation(ctx.current);
        animate(ctx.current);
        setShow(false);

    }

    function d(){
        closestPair(ctx.current);
        setShow(true);
    }

    function e(){
        pauseAnimation(ctx.current);
        toggle();
        setShow(false);

    }

    function f(){
        clearHighlights(ctx.current);
        setShow(false);

    }

    function toggle(){
        setOn(!on);
    }

    function submit(){
        setOn(!on);
        selectedClosestPair(ctx.current,x1,x2,y1,y2);
        setShow(true);
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
            <br/>
            <br/>
           <center><canvas ref={canvasRef}/></center> 
            {/* <canvas ref={CanvasImage}/> */}
            
            {/* <CanvasImage src="https://www.google.com/logos/doodles/2017/115th-anniversary-of-the-antikythera-mechanisms-discovery-6292005859622912-l.png" /> */}
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

            <Showdistance shows={show} distance={dist} s1x={s1x}
            s1y={s1y} s2x={s2x} s2y={s2y} cls1={cls1sid} cls2={cls2sid}/>
        </div>
    )
}



export default Canvas;
