import React from 'react';

const btnStyles = {
    fontSize: '18px',
    backgroundColor: 'black',
    color: 'white',
    margin: 5,
};

function Button(props) {

    return <button style={btnStyles}>{props.title}</button>;
    
}
 export default Button;