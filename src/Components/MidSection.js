import React from 'react';
import './brands.css';
import hollister from '../hollister.png';
import giorgio from '../giorgio.png';

function MidSection() {
    return (
        <div class="brands">

<div class ="clv">
     <img src={hollister} alt="hollister brand img" />
</div>
<div class="nike">
     <img src={giorgio} alt="giorgio brand img" />
</div>

        </div>

    );
}

export default MidSection;