import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'
import './assets/vendor/ionicons/css/ionicons.min.css';

function Showdistance(props) {
    if (props.shows==true){
        return (
            <div>
                <br/>
                <br/>
                <div className="d-flex justify-content-center">
                    <h3>Closest distance  : {props.distance}</h3>
                </div>

                <br></br>


                <div class="container">
                    <div className="row">
                        <div className="col-12 col-sm-6 offset-2">
                            <h3>Ship 1</h3>
                            <h4>ID : {props.cls1}</h4>
                            <h4>X  : {props.s1x}</h4>
                            <h4>Y  : {props.s1y}</h4>
                        </div>
                        <div className="col-12 col-sm-4 ">
                            <h3>Ship 2</h3>
                            <h4>ID : {props.cls2}</h4>
                            <h4>X  : {props.s2x}</h4>
                            <h4>Y  : {props.s2y}</h4>
                        </div>
                    </div>
                </div>
        
            </div>
        )
    } else{
        return (
            <div></div>
        )
    }
}

export default Showdistance
