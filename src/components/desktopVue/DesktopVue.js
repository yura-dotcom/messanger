import React from "react";
import ChatListItem from '../chatListItem/ChatListItem';
import MainActiveChat from '../mainActiveChat/MainActiveChat';
import LogoutButton from '../logoutButton/LogoutButton';
import Profile from '../Profile';
import PropTypes from 'prop-types';
import styles from './DesktopVue.module.sass';


function DesktopVue(props) {
  const { search, contacts, setContacts, activeCont, setActiveCont, searchContacts, isMobile } = props;

  return (

    <div className={styles.messanger}>
      <div className={styles.leftBar}>

        <div className={styles.head}>
          <div className={styles.user}>
            <Profile />
            <LogoutButton />
          </div>
          <div className={styles.livesearch}>
            <input type='text' placeholder='search' value={search} onChange={(e) => searchContacts(e)} />
          </div>
        </div>
        <div className={styles.chatListHolder}>
          <div className={styles.chatListTitle}>
            <h2>Chats</h2>
          </div>
          <ul className={styles.chatList}>

            {contacts.map(contact => {
              return (

                <ChatListItem
                  key={contact.name}
                  avaSrc={contact.ava}
                  name={contact.name}
                  messages={contact.messages}
                  activeMsg={contact.activeMsg}
                  setActiveCont={setActiveCont}
                  contacts={contacts}
                  setContacts={setContacts}
                  isMobile={isMobile}
                />
              )
            })}



          </ul>
        </div>
      </div>
      <div className={styles.rightSide}>

        <MainActiveChat
          activeCont={activeCont}
          setActiveCont={setActiveCont}
          contacts={contacts}
          setContacts={setContacts}
          isMobile={isMobile}
        />
      </div>
      <footer className={styles.fotterLine}></footer>
    </div>

  )

}

DesktopVue.propTypes = {

  search: PropTypes.string,
  contacts: PropTypes.array,
  setContacts: PropTypes.func,
  activeCont: PropTypes.object,
  setActiveCont: PropTypes.func,
  searchContacts: PropTypes.func,
  isMobile: PropTypes.bool

}

export default DesktopVue;