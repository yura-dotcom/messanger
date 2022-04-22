import React from "react";
import PropTypes from 'prop-types';
import styles from './Avatar.module.sass';

function Avatar(props) {

  const imgSrc = props.src;


  return (

    <div className={styles.avatar}>
      <img src={imgSrc} alt='ava' />
    </div>
  )


}

Avatar.propTypes = {
  src: PropTypes.string
}

export default Avatar;







