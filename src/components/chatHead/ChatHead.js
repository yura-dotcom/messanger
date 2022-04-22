import React from "react";
import Avatar from "../avatar/Avatar";
import PropTypes from 'prop-types';
import styles from './ChatHead.module.sass';

function ChatHead(props) {
  const { name, ava } = props;

  if (name) {
    return (
      <>
        <Avatar src={ava} />
        <div className={styles.contactName}>
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