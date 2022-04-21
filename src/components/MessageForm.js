import React, { useState } from "react";
import PropTypes from 'prop-types';
import './MessageForm.sass';

function MessageForm(props) {

  const [mText, setMText] = useState('');

  const { name, contacts, setContacts } = props;


  function sortContacts(newConts) {
    setContacts(
      [...newConts].sort((a, b) => a.messages[a.messages.length - 1].srtTime - b.messages[b.messages.length - 1].srtTime).reverse()
    )
  }

  function soundMsg() {
    let audio = new Audio();
    audio.src = 'https://zvukogram.com/mp3/cats/1376/zvuk-sms-so-svisto.mp3';
    audio.autoplay = true;
  }


  function createMessage(e) {
    setMText(e.target.value)
  }

  async function msgAnswer() {
    let newConts = [],
      dateTime = new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString(),
      srtTime = new Date().getTime(),
      contResp;

    await fetch('https://api.chucknorris.io/jokes/random')
      .then(response => response.json())
      .then(json => contResp = json.value);


    contacts.forEach(el => {
      if (el.name !== name) {
        newConts.push(el)
      } else {
        if (el.name !== JSON.parse(localStorage.getItem('activeCont')).name) {
          el.activeMsg = true;
          // console.log(el.activeMsg)
        }
        el.messages.push({
          "author": "contact",
          "message": contResp,
          "time": dateTime,
          "srtTime": srtTime
        });
        newConts.push(el)
        soundMsg()
      }
    });


    sortContacts(newConts)
  }


  function sendMessage(e) {
    e.preventDefault();
    let newConts = [],
      dateTime = new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString(),
      srtTime = new Date().getTime();
    if (mText && name) {
      contacts.forEach(el => {
        if (el.name !== name) {
          newConts.push(el)
        } else {
          el.messages.push({
            "author": "me",
            "message": mText,
            "time": dateTime,
            "srtTime": srtTime
          })
          newConts.push(el)
        }
      });
      sortContacts(newConts)
      setTimeout(() => msgAnswer(), 9000)
      setMText('')
    }

  }

  if (name) {

    return (
      <form onSubmit={(e) => sendMessage(e)}>
        <input
          type='text'
          placeholder='Type your message'
          value={mText}
          onChange={(e) => createMessage(e)}
        />
        <input type='submit' value='' />
      </form>
    )
  }

}

MessageForm.propTypes = {

  name: PropTypes.string,
  contacts: PropTypes.array,
  setContacts: PropTypes.func,

}

export default MessageForm;