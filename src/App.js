import React, { useState, useEffect, useRef } from 'react';
import './App.sass';
import LoginButton from './components/loginButton/LoginButton';
import { useAuth0 } from '@auth0/auth0-react';
import DesktopVue from './components/desktopVue/DesktopVue';
import MobileVue from './components/mobileVue/MobileVue';


function App() {

  const conts = require('./fakeConts.json');

  const localsConts = JSON.parse(localStorage.getItem('contacts'));
  const localsActiveCont = JSON.parse(localStorage.getItem('activeCont'));

  const { isAuthenticated } = useAuth0();
  const [contacts, setContacts] = useState(localsConts ? localsConts : conts);
  const [search, setSearch] = useState('');
  const [activeCont, setActiveCont] = useState(localsActiveCont ? localsActiveCont : {});
  const [isMobile, setIsMobile] = useState();
  const app = useRef();



  useEffect(() => {
    window.addEventListener("resize", isMobileCheck);
    isMobileCheck();
    return () => {
      window.removeEventListener("resize", isMobileCheck);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
    localStorage.setItem('activeCont', JSON.stringify(activeCont));
  }, [contacts, activeCont]);

  function isMobileCheck() {
    (app.current.clientWidth <= 768) ? setIsMobile(true) : setIsMobile(false);
  };



  function searchContacts(e) {
    let queryString = e.target.value.toLowerCase();
    setSearch(e.target.value)
    setContacts(
      [...contacts].sort(cont => cont.name.toLowerCase().search(queryString)).reverse()
    )
  }



  return (
    <div className="App" ref={app}>

      {isAuthenticated ? (

        isMobile ? (
          <MobileVue
            search={search}
            contacts={contacts}
            setContacts={setContacts}
            activeCont={activeCont}
            setActiveCont={setActiveCont}
            searchContacts={searchContacts}
            isMobile={isMobile}
          />

        ) : (
          <DesktopVue
            search={search}
            contacts={contacts}
            setContacts={setContacts}
            activeCont={activeCont}
            setActiveCont={setActiveCont}
            searchContacts={searchContacts}
            isMobile={isMobile}
          />
        )


      ) : (
        <div className='loginScreen'>
          <h1 className='loginScreenTitle'>Login to start</h1>

          <LoginButton />
        </div>

      )}

    </div>
  );
}

export default App;


// function createUsers(u) {
//   let i = 0;
//   do {
//     fetch('https://randomuser.me/api/')
//     .then(response => response.json())
//     .then(json => {
//       let user = json.results[0],
//       name = user.name.first,
//       surname = user.name.last,
//       ava = user.picture.thumbnail,
//       phone = user.phone
//       conts.push({
//         'name': name,
//         'surname': surname,
//         'ava': ava,
//         'phone': phone
//       })
//     })
//     i++
//   } while (i<u);
//   console.log(conts)
// }

// createUsers(9)


