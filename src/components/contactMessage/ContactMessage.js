import React from "react";
import Avatar from "../avatar/Avatar";
import PropTypes from 'prop-types';
import styles from './ContactMessage.module.sass';

function ContactMessage(props) {

  const { avaSrc, messageText, messageTime } = props;

  return (
    <div className={styles.contactMessage}>
      <Avatar src={avaSrc} />
      <span className={styles.inner}>
        <p className={styles.contactMessageText}>{messageText}</p>
        <span className={styles.contactMessageTime}>{messageTime}</span>
      </span>
    </div>
  )

}

ContactMessage.propTypes = {
  messageText: PropTypes.string, 
  messageTime: PropTypes.string,
  avaSrc: PropTypes.string
}

export default ContactMessage;

// 'https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg'