import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'
import './assets/css/style.css';
import CollisionCanvas from './CollisionCanvas';

function collisionavoider() {
    return (
        <div>
            <div className="collision-avoider">
                <CollisionCanvas/>
            </div>
        </div>
    )
}

export default collisionavoider
