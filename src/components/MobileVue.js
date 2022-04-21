import React, { useState } from "react";
import Profile from "./Profile";
import LogoutButton from "./LogoutButton";
import ChatListItem from "./ChatListItem";
import MainActiveChat from "./MainActiveChat";
import PropTypes from 'prop-types';
import './MobileVue.sass';

function MobileVue(props) {

  const [activeList, setActiveList] = useState(false);

  const { search, contacts, setContacts, activeCont, setActiveCont, searchContacts, isMobile } = props;

  
  

  return (
    <div className="messanger mobile">
      {activeList ? (

        <MainActiveChat
          activeList={activeList}
          setActiveList={setActiveList}
          activeCont={activeCont}
          setActiveCont={setActiveCont}
          contacts={contacts}
          setContacts={setContacts}
          isMobile={isMobile}
        />
      ) : (
        <div className='left-bar'>
          <div className='head'>
            <div className='user'>
              <Profile />
              <LogoutButton />
            </div>
            <div className='livesearch'>
              <input type='text' placeholder='search' value={search} onChange={(e) => searchContacts(e)} />
            </div>
          </div>
          <div className='chat-list-holder'>
            <div className='chat-list-title'>
              <h2>Chats</h2>
            </div>
            <ul className='chat-list'>

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
      <footer className='fotter-line'></footer>
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