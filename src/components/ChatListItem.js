import React from "react";
import Avatar from "./Avatar";
import PropTypes from 'prop-types';
import './ChatListItem.sass';

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
    <li className='chat-list-item' onClick={openChat}>
      <div className='contact-chat-message'>
        <Avatar src={avaSrc} />
        <span>

          <h4 className='contact-name'>{name}</h4>
          <span className="message-text">{message}</span>

          {activeMsg &&
            <div className="message-ico">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcchBq-iW9Ur6IDh36fGfszNOaxS2cMQX4_A&usqp=CAU" alt="ico"/>
            </div>
          }

        </span>
      </div>
      <div className='message-time'>
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