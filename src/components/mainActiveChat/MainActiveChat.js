import React, { useRef, useEffect } from "react";
import ChatHead from "../chatHead/ChatHead";
import ContactMessage from "../contactMessage/ContactMessage";
import MessageForm from "../messageForm/MessageForm";
import MyMessage from "../myMessage/MyMessage";
import PropTypes from 'prop-types';
import styles from './MainActiveChat.module.sass';


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
    <div className={styles.main}>
      <div className={styles.activeChatHead} >
        <ChatHead
          name={name}
          ava={ava}
        />
        {isMobile && (

          <div className={styles.listActionWrap}>
            <button className={styles.listAction}
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
      <div className={styles.activeChatBody} ref={scrBar}>
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
      <div className={styles.newMessageSender}>
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