import React from 'react';
import './brands.css';
import calvin from '../calvin.png';
import nike from '../nike.png';

function Section() {
    return (
<div class="brands">
    <div class="clv">
<img src={calvin} alt="calvin brand img" />
    </div>
    <div class="nike">
<img src={nike} alt="calvin brand img" />
    </div>

</div>
    );
}

export default Section;