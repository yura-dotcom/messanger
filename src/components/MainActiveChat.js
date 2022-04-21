import React, { useRef, useEffect } from "react";
import ChatHead from "./ChatHead";
import ContactMessage from "./ContactMessage";
import MessageForm from "./MessageForm";
import MyMessage from "./MyMessage";
import PropTypes from 'prop-types';
import './MainActiveChat.sass';


function MainActiveChat(props) {


  const { contacts, setContacts, activeCont, isMobile, setActiveList } = props,
    { name, ava, messages } = activeCont,
    scrBar = useRef();

  const scrollToBottom = () => {
    scrBar.current.scrollTop = Math.ceil(scrBar.current.scrollHeight - scrBar.current.clientHeight)
  }

  useEffect(() => {
    scrollToBottom()
  });

  return (
    <div className='main active-chat'>
      <div className='active-chat-head'>
        <ChatHead
          name={name}
          ava={ava}
        />
        {isMobile && (

          <div className="list-action-wrap">
            <button className="list-action"
              onClick={() => {
                setActiveList(false)
                localStorage.setItem('activeCont', JSON.stringify({}));
                }}
            >
              list
            </button>
          </div>
        )}
      </div>
      <div className='active-chat-body' ref={scrBar}>
        {
          name ? (
            messages.map((msg, i) => {
              if (msg.author === "contact") {
                return (
                  <ContactMessage
                    key={i}
                    avaSrc={ava}
                    messageText={msg.message}
                    messageTime={msg.time}
                  />
                )
              } else {
                return (
                  <MyMessage
                    key={i}
                    messageText={msg.message}
                    messageTime={msg.time}
                  />
                )
              }
            })

          ) : (
            'no messages'
          )
        }
      </div>
      <div className='new-message-sender'>
        <MessageForm
          name={name}
          contacts={contacts}
          setContacts={setContacts}
        />
      </div>
    </div>
  )

}

MainActiveChat.propTypes = {

  contacts: PropTypes.array,
  setContacts: PropTypes.func,
  activeCont: PropTypes.object,
  setActiveCont: PropTypes.func,
  isMobile: PropTypes.bool,

}

export default MainActiveChat;