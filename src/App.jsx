import { useState } from 'react';

import Header from './components/Header';
import ContactList from './components/ContactList';
import AddContact from './components/AddContact';

function App() {

  const[contacts, setContacts] = useState([])
  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts,contact]);
  }

  /* const contacts = [
    {
      id: '1',
      name : 'Mehitak',
      email: 'hitak123@gmail.com',
    },

    {
      id: '2',
      name : 'Carta',
      email: 'cartaissue@hotmail.com',
    }
  ] */

  return (
    <div className='ui container'>
      <Header />
      <AddContact addContactHandler={addContactHandler}/>
      <ContactList contacts={contacts}/>
    </div>
  );
}

export default App
