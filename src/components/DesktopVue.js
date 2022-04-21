import React from "react";
import ChatListItem from './ChatListItem';
import MainActiveChat from './MainActiveChat';
import LogoutButton from './LogoutButton';
import Profile from './Profile';
import PropTypes from 'prop-types';
import './DesktopVue.sass';


function DesktopVue(props) {
  const { search, contacts, setContacts, activeCont, setActiveCont, searchContacts, isMobile } = props;

  return (

    <div className='messanger'>
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
                  isMobile={isMobile}
                />
              )
            })}



          </ul>
        </div>
      </div>
      <MainActiveChat
        activeCont={activeCont}
        setActiveCont={setActiveCont}
        contacts={contacts}
        setContacts={setContacts}
        isMobile={isMobile}
      />
      <footer className='fotter-line'></footer>
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