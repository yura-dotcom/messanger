import React from "react";
import Avatar from "./Avatar";
import PropTypes from 'prop-types';
import './ContactMessage.sass';

function ContactMessage(props) {

  const { avaSrc, messageText, messageTime } = props;

  return (
    <div className='contact-message'>
      <Avatar src={avaSrc} />
      <span className="inner">
        <p className='contact-message-text'>{messageText}</p>
        <span className='contact-message-time'>{messageTime}</span>
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