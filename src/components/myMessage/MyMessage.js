import React from "react";
import PropTypes from 'prop-types';
import styles from './MyMessage.module.sass';

function MyMessage(props) {

  const { messageText, messageTime } = props;



  return (
    <div className={styles.myMessage}>
      <p className={styles.myMessageText}>{messageText}</p>
      <span className={styles.myMessageTime}>{messageTime}</span>
    </div>
  )

}

MyMessage.propTypes = {

  messageText: PropTypes.string,
  messageTime: PropTypes.string

}

export default MyMessage;