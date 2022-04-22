import React from "react";
import Avatar from "../avatar/Avatar";
import PropTypes from 'prop-types';
import styles from './ChatListItem.module.sass';

function ChatListItem(props) {

  const { name, avaSrc, messages, setActiveCont, isMobile, activeMsg, contacts, setContacts,
    setActiveList } = props,
    message = messages[messages.length - 1].message,
    time = messages[messages.length - 1].time;

  function checkMsg() {
    setContacts(
      contacts.map(el => {
        if (name === el.name) {
          el.activeMsg = false
        }
        return el
      })
    )
  }

  function openChat() {
    checkMsg()
    setActiveCont(
      {
        "name": name,
        "ava": avaSrc,
        "messages": props.messages
      }
    )
    if(isMobile) setActiveList(true);
  }

  return (
    <li className={styles.chatListItem} onClick={openChat}>
      <div className={styles.contacChatMessage}>
        <Avatar src={avaSrc} />
        <span>

          <h4 className={styles.contactName}>{name}</h4>
          <span className={styles.messageText}>{message}</span>

          {activeMsg &&
            <div className={styles.messageIco}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcchBq-iW9Ur6IDh36fGfszNOaxS2cMQX4_A&usqp=CAU" alt="ico"/>
            </div>
          }

        </span>
      </div>
      <div className={styles.messageTime}>
        <span>{time}</span>
      </div>

    </li>
  )
}

ChatListItem.propTypes = {
  name: PropTypes.string, 
  avaSrc: PropTypes.string, 
  messages: PropTypes.array,
  setActiveCont: PropTypes.func,
  isMobile: PropTypes.bool,
  activeMsg: PropTypes.bool,
  contacts: PropTypes.array,
  setContacts: PropTypes.func,
  setActiveList: PropTypes.func,
}

export default ChatListItem;