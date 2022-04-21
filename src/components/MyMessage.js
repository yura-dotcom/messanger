import React from "react";
import PropTypes from 'prop-types';
import './MyMessage.sass';

function MyMessage(props) {

  const { messageText, messageTime } = props;



  return (
    <div className='my-message'>
      <p className='my-message-text'>{messageText}</p>
      <span className='my-message-time'>{messageTime}</span>
    </div>
  )

}

MyMessage.propTypes = {

  messageText: PropTypes.string,
  messageTime: PropTypes.string

}

export default MyMessage;