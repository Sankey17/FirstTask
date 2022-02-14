import React from 'react';
import PropTypes from 'prop-types';

export default function ExtraProp(props) {
    return(
      
        <h2>Hello  {props.name}</h2>
       
    )
}

ExtraProp.prototype ={
    name: PropTypes.string.isRequired
}