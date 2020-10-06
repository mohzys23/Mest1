import React from 'react';

function Form () {
    return(
<form>
    <label for="name">Name: </label> 
    <input type="text" name="name" />
    <br />
    <label for="email">Email: </label>
    <input type="email" name="email" />
    <br />
    <input type="button" value="Submit"/>

</form>
    );
}

export default Form;