import React from "react";
import PropTypes from 'prop-types';
import './Avatar.sass';

function Avatar(props) {

  const imgSrc = props.src;


  return (

    <div className='avatar'>
      <img src={imgSrc} alt='ava' />
    </div>
  )


}

Avatar.propTypes = {
  imgSrc: PropTypes.string
}

export default Avatar;







