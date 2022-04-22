import React, { useState } from "react";
import Profile from "../Profile";
import LogoutButton from "../logoutButton/LogoutButton";
import ChatListItem from "../chatListItem/ChatListItem";
import MainActiveChat from "../mainActiveChat/MainActiveChat";
import PropTypes from 'prop-types';
import styles from './MobileVue.module.sass';

function MobileVue(props) {

  const [activeList, setActiveList] = useState(false);

  const { search, contacts, setContacts, activeCont, setActiveCont, searchContacts, isMobile } = props;




  return (
    <div className={styles.messangerMobile}>
      {activeList ? (
        <div className={styles.chatWrap}>

          <MainActiveChat
            activeList={activeList}
            setActiveList={setActiveList}
            activeCont={activeCont}
            setActiveCont={setActiveCont}
            contacts={contacts}
            setContacts={setContacts}
            isMobile={isMobile}
          />
        </div>
      ) : (
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
                    setActiveList={setActiveList}
                    isMobile={isMobile}
                  />
                )
              })}



            </ul>
          </div>
        </div>


      )}
      <footer className={styles.fotterLine}></footer>
    </div>
  )
}

MobileVue.propTypes = {

  search: PropTypes.string,
  contacts: PropTypes.array,
  setContacts: PropTypes.func,
  activeCont: PropTypes.object,
  setActiveCont: PropTypes.func,
  searchContacts: PropTypes.func,
  isMobile: PropTypes.bool

}

export default MobileVue;



// useEffect(() => {
//   window.addEventListener('popstate', backToList);
// });

// function backToList(e) {
//   if (activeList) {
//     e.preventDefault();
//     e.stopPropagation();
//     setActiveList(false);
//     localStorage.setItem('activeCont', JSON.stringify({}));
//   }
// }