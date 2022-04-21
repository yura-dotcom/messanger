import React from "react";
import Avatar from "./Avatar";
import PropTypes from 'prop-types';
import './ChatHead.sass';

function ChatHead(props) {
  const { name, ava } = props;

  if (name) {
    return (
      <>
        <Avatar src={ava} />
        <div className='contact-name'>
          <h4>{name}</h4>
        </div>
      </>
    )
  } else {
    return (<div>browse contact</div>)
  }
}

ChatHead.propTypes = {
  ava: PropTypes.string,
  name: PropTypes.string
}

export default ChatHead;