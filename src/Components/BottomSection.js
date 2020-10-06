import React from 'react';
import './brands.css';
import dg from '../dg.png';
import louis from '../louis.jpg';

function BottomSection () {
    return (
 <div class="brands">

<div class ="dg">
     <img src={dg} alt="hollister brand img" />
</div>
<div class="louis">
     <img src={louis} alt="giorgio brand img" />
</div>

        </div>
    );
}


export default BottomSection;