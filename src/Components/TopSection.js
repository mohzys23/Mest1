import React from 'react';
import './TopSection.css';
import getty from '../getty.jpg';

function TopSection () {
    return (
<div class="topsection">
    <img src={getty} alt="code icon" class="top-img"/>
<h1>SHOP NOW!!!</h1>
</div>
    );
}

export default TopSection;